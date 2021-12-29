import React, { useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';

import fb from '../../fbConfig';
import { CharSheetStyling, HzSpace, PortraitDiv } from '../../styling/StyleBank';
import useChar from '../../hooks/CreatureStore';
import useSidebar from '../../hooks/SidebarStore';
import useDice from '../../hooks/DiceStore';

import portraitDefault from '../../media/ui/portrait-default.jpg';
import jasmine from '../../media/example-playgroup/JasmineAvatar.png';
import kelani from '../../media/example-playgroup/KelaniAvatar.png';
import megan from '../../media/example-playgroup/MeganAvatar.png';
import pedro from '../../media/example-playgroup/PedroAvatar.png';
import tim from '../../media/example-playgroup/TimAvatar.png';
import CharSaver from '../hidden/CharSaver';
import Pool from './Pool';
import EditBox from './EditBox';
import CharSheetMain from './CharSheetMain';
import CharSheetInventory from './CharSheetInventory';
import CharSheetConfigure from './CharSheetConfigure';
import CharSheetBiographic from './CharSheetBiographic';
import ImageUploader from '../ui/ImageUploader';

const PORTRAIT_PATH = "portraits";

const CharSheetShell = () => {
    const { slug } = useParams();
    const cur = useChar((state) => state.cur);
    const setCur = useChar((state) => state.setCur);
    const loadingChar = useChar((state) => state.loadingChar);
    const setLoadingChar = useChar((state) => state.setLoadingChar);
    const sidebarMode = useSidebar((state) => state.mode);
    const roll = useDice((state) => state.addRoll);

    const [activeTab, setActiveTab] = useState("Main");
    const [tabContents, setTabContents] = useState(null);
    const [headerStatsWidth, setHeaderStatsWidth] = useState(1000);
    const [examplePlayerReminder, setExamplePlayerReminder] = useState(null);
    const portraitElement = useRef(null);

    useEffect(() => {
        if (cur && cur.examplePc) {
            switch (slug) {
                case "ankithlakith":
                    setExamplePlayerReminder(<img className="exRemind" src={jasmine} alt="Player: Jasmine" />);
                    break;
                case "robry":
                    setExamplePlayerReminder(<img className="exRemind" src={pedro} alt="Player: Pedro" />);
                    break;
                case "znibbi":
                    setExamplePlayerReminder(<img className="exRemind" src={tim} alt="Player: Tim" />);
                    break;
                case "gratlyn":
                    setExamplePlayerReminder(<img className="exRemind" src={megan} alt="Player: Megan" />);
                    break;
                default:
                    setExamplePlayerReminder(<img className="exRemind" src={kelani} alt="GM: Kelani" />);
            }
        } else if (examplePlayerReminder) {
            setExamplePlayerReminder(null);
        }
    }, [cur, slug]);

    useEffect(() => {
        const ele = document.querySelector("div.headerStats");
        if (ele) {
            setHeaderStatsWidth(ele.offsetWidth);
        }
    }, [cur, loadingChar]);

    const db = fb.db;
    const onceOnly = useRef(true);
    useEffect(() => {
        if (onceOnly.current) {
            setLoadingChar(true);
            onceOnly.current = false;
        }

        const unsubscribe = db.collection("creatures").doc(slug)
            .onSnapshot((snapshot) => {
                setCur({
                    ...snapshot.data(),
                    slug
                });
                setLoadingChar(false);
                // console.log(cur);
            });
        
        return(() => {
            unsubscribe();
        });
    }, []);

    useEffect(() => {
        if (typeof window !== "undefined") {
            const savedTab = window.localStorage.getItem("zWolfActiveCharTab");
            if (savedTab === "Inventory") {
                setActiveTab("Inventory");
            } else if (savedTab === "Configure") {
                setActiveTab("Configure");
            } else if (savedTab === "Biographic") {
                setActiveTab("Biographic");
            } else {
                window.localStorage.setItem("zWolfActiveCharTab", "Main");
            }
        }
    }, []);

    useEffect(() => {
        switch (activeTab) {
            case "Biographic":
                setTabContents(<CharSheetBiographic />);
                break;
            case "Configure":
                setTabContents(<CharSheetConfigure />);
                break;
            case "Inventory":
                setTabContents(<CharSheetInventory />);
                break;
            default:
                setTabContents(<CharSheetMain />);
        }
    }, [activeTab]);

    const storageRef = fb.storage().ref(`${PORTRAIT_PATH}/${slug}`);
    storageRef.getDownloadURL()
        .then((url) => {
            if (portraitElement.current) {
                portraitElement.current.setAttribute('src', url);
            }
        }).catch((error) => {
            if (error.code === "storage/object-not-found") {
                if (portraitElement.current) {
                    portraitElement.current.setAttribute('src', portraitDefault);
                }
            } else {
                console.log(error.code);
            }
        });

    const handleTab = (newTab) => {
        window.localStorage.setItem("zWolfActiveCharTab", newTab);
        setActiveTab(newTab);
    }

    return (
        <CharSheetStyling>
            {(loadingChar || !cur) ?
                <h1>(Loading ...)</h1> :
                <>
                    <CharSaver slug={slug} />
                    <header>
                        <div className="headerStats">
                            <header>
                                <h1>{cur.name}</h1>
                                <h2 className="editParent">Level<HzSpace />{
                                    activeTab === "Configure" ?
                                    <EditBox attributePath="level" classes="" inputType="number" /> :
                                    cur.level
                                }<HzSpace />{
                                    activeTab === "Configure" ?
                                    <EditBox attributePath="epithet" classes="" inputType="text" /> :
                                    cur.epithet
                                }</h2>
                            </header>
                            <div className="pools">
                                <Pool type="vp" color="green" spellOut="Vitality" />
                                <Pool type="sp" color="red" spellOut="Stamina" />
                                {cur.pc ? <Pool type="kp" color="blue" spellOut="Karma" /> : null}
                            </div>
                            <div className="basics">
                                <div className="defVals">
                                    <p><strong>AV: {cur.stats.av}</strong></p>
                                    <p><strong>Res.Val.: {cur.stats.resVal}</strong></p>
                                </div>
                                <div className="pseudoTable">
                                    <div className="misc">
                                        <span
                                            onClick={sidebarMode === "play"? () => roll({
                                                sides: "usual",
                                                modifier: cur.stats.heroics,
                                                text: "a Heroics Check",
                                                character: cur.name
                                            }) : null}
                                            className={sidebarMode === "play" ? "clickable" : ""}
                                        >
                                            <strong>Heroics +{cur.stats.heroics}</strong>
                                        </span>
                                        <span
                                            onClick={sidebarMode === "play"? () => roll({
                                                sides: "usual",
                                                modifier: cur.stats.awesome,
                                                text: "an Awesome Check",
                                                character: cur.name
                                            }) : null}
                                            className={sidebarMode === "play" ? "clickable" : ""}
                                        >
                                            <strong>Awesome +{cur.stats.awesome}</strong>
                                        </span>
                                        <span
                                            onClick={sidebarMode === "play"? () => roll({
                                                sides: "usual",
                                                modifier: cur.stats.spellcraft,
                                                text: "a Spellcraft Check",
                                                character: cur.name
                                            }) : null}
                                            className={sidebarMode === "play" ? "clickable" : ""}
                                        >
                                            <strong>Spellcraft {cur.stats.spellcraft >= 0 ? "+" : null}{cur.stats.spellcraft}</strong>
                                        </span>
                                        <span
                                            onClick={sidebarMode === "play"? () => roll({
                                                sides: "usual",
                                                modifier: cur.stats.speed,
                                                text: "a Speed Check",
                                                character: cur.name
                                            }) : null}
                                            className={sidebarMode === "play" ? "clickable" : ""}
                                        >
                                            <strong>Speed {cur.stats.speed >= 0 ? "+" : null}{cur.stats.speed}</strong>
                                        </span>
                                    </div>
                                    <div className="saves">
                                        <span
                                            onClick={sidebarMode === "play"? () => roll({
                                                sides: "usual",
                                                modifier: cur.stats.defSave,
                                                text: "a Defense Save",
                                                character: cur.name
                                            }) : null}
                                            className={sidebarMode === "play" ? "clickable" : ""}
                                        >
                                            <strong>Defense {cur.stats.defSave >= 0 ? "+" : null}{cur.stats.defSave}</strong>
                                        </span>
                                        <span
                                            onClick={sidebarMode === "play"? () => roll({
                                                sides: "usual",
                                                modifier: cur.stats.fortSave,
                                                text: "a Fortitude Save",
                                                character: cur.name
                                            }) : null}
                                            className={sidebarMode === "play" ? "clickable" : ""}
                                        >
                                            <strong>Fortitude {cur.stats.fortSave >= 0 ? "+" : null}{cur.stats.fortSave}</strong>
                                        </span>
                                        <span
                                            onClick={sidebarMode === "play"? () => roll({
                                                sides: "usual",
                                                modifier: cur.stats.refSave,
                                                text: "a Reflex Save",
                                                character: cur.name
                                            }) : null}
                                            className={sidebarMode === "play" ? "clickable" : ""}
                                        >
                                            <strong>Reflex {cur.stats.refSave >= 0 ? "+" : null}{cur.stats.refSave}</strong>
                                        </span>
                                        <span
                                            onClick={sidebarMode === "play"? () => roll({
                                                sides: "usual",
                                                modifier: cur.stats.willSave,
                                                text: "a Willpower Save",
                                                character: cur.name
                                            }) : null}
                                            className={sidebarMode === "play" ? "clickable" : ""}
                                        >
                                            <strong>Willpower {cur.stats.willSave >= 0 ? "+" : null}{cur.stats.willSave}</strong>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <PortraitDiv className="portrait" headerStatsWidth={headerStatsWidth}>
                            {activeTab === "Configure" ?
                                <ImageUploader
                                    path={PORTRAIT_PATH}
                                    slug={slug}
                                    defaultPortrait={portraitDefault}
                                /> : 
                                <img ref={portraitElement} alt="portrait" />
                            }
                            {examplePlayerReminder}
                        </PortraitDiv>
                    </header>
                    <nav className="charSheetTabs">
                        <span className={`clickable ${activeTab === "Main" ? "active" : null}`} onClick={() => handleTab("Main")}>Main</span>
                        <span className={`clickable ${activeTab === "Inventory" ? "active" : null}`} onClick={() => handleTab("Inventory")}>Inventory</span>
                        <span className={`clickable ${activeTab === "Biographic" ? "active" : null}`} onClick={() => handleTab("Biographic")}>Biographic</span>
                        <span className={`clickable ${activeTab === "Configure" ? "active" : null}`} onClick={() => handleTab("Configure")}>Configure</span>
                    </nav>
                    {tabContents}
                </>
            }
        </CharSheetStyling>
    );
}

export default CharSheetShell;