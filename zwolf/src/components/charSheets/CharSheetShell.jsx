import React, { useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';

import fb from '../../fbConfig';
import { CharSheetStyling } from '../../styling/StyleBank';
import useChar from '../../hooks/CreatureStore';

import Pool from './Pool';
import CharSheetMain from './CharSheetMain';
import CharSheetInventory from './CharSheetInventory';
import CharSheetConfigure from './CharSheetConfigure';
import CharSheetBiographic from './CharSheetBiographic';

const CharSheetShell = () => {
    const { slug } = useParams();
    const cur = useChar((state) => state.cur);
    const setCur = useChar((state) => state.setCur);
    const loadingChar = useChar((state) => state.loadingChar);
    const setLoadingChar = useChar((state) => state.setLoadingChar);

    const [activeTab, setActiveTab] = useState("Main");
    const [tabContents, setTabContents] = useState(null);

    const db = fb.db;
    const onceOnly = useRef(true);
    useEffect(() => {
        if (onceOnly.current) {
            setLoadingChar(true);
            onceOnly.current = false;
        }

        const unsubscribe = db.collection("creatures").doc(slug)
            .onSnapshot((snapshot) => {
                setCur(snapshot.data());
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

    const handleTab = (newTab) => {
        window.localStorage.setItem("zWolfActiveCharTab", newTab);
        setActiveTab(newTab);
    }

    return (
        <CharSheetStyling>
            {(loadingChar || !cur) ?
                <h1>(Loading ...)</h1> :
                <>
                    <header>
                        <div className="headerStats">
                            <header>
                                <h1>{cur.name}</h1>
                                <h2>Level {cur.level} {cur.epithet}</h2>
                            </header>
                            <div className="pools">
                                <Pool type="vp" color="green" spellOut="Vitality" />
                                <Pool type="sp" color="red" spellOut="Stamina" />
                                <Pool type="kp" color="blue" spellOut="Karma" />
                            </div>
                            <div className="basics">
                                <div className="defVals">
                                    <p><strong>AV: {cur.stats.av}</strong></p>
                                    <p><strong>Res.Val.: {cur.stats.resVal}</strong></p>
                                </div>
                                <div className="pseudoTable">
                                    <div className="misc">
                                        <span><strong>Heroics +{cur.stats.heroics}</strong></span>
                                        <span><strong>Awesome +{cur.stats.awesome}</strong></span>
                                        <span><strong>Spellcraft {cur.stats.spellcraft >= 0 ? "+" : null}{cur.stats.spellcraft}</strong></span>
                                        <span><strong>Speed {cur.stats.speed >= 0 ? "+" : null}{cur.stats.speed}</strong></span>
                                    </div>
                                    <div className="saves">
                                        <span><strong>Defense {cur.stats.defSave >= 0 ? "+" : null}{cur.stats.defSave}</strong></span>
                                        <span><strong>Fortitude {cur.stats.fortSave >= 0 ? "+" : null}{cur.stats.fortSave}</strong></span>
                                        <span><strong>Reflex {cur.stats.refSave >= 0 ? "+" : null}{cur.stats.refSave}</strong></span>
                                        <span><strong>Willpower {cur.stats.willSave >= 0 ? "+" : null}{cur.stats.willSave}</strong></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="portrait">
                            (for image)
                        </div>
                    </header>
                    <nav className="charSheetTabs">
                        <span className={`clickable ${activeTab === "Main" ? "active" : null}`} onClick={() => handleTab("Main")}>Main</span>
                        <span className={`clickable ${activeTab === "Inventory" ? "active" : null}`} onClick={() => handleTab("Inventory")}>Inventory</span>
                        <span className={`clickable ${activeTab === "Configure" ? "active" : null}`} onClick={() => handleTab("Configure")}>Configure</span>
                        <span className={`clickable ${activeTab === "Biographic" ? "active" : null}`} onClick={() => handleTab("Biographic")}>Biographic</span>
                    </nav>
                    {tabContents}
                </>
            }
        </CharSheetStyling>
    );
}

export default CharSheetShell;