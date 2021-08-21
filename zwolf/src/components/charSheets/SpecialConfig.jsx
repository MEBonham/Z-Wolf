import React, { useState, useEffect } from 'react';
import _ from 'lodash';
import { nanoid } from 'nanoid'

import fb from '../../fbConfig';
import checked from '../../media/ui/checked-box.png';
import unchecked from '../../media/ui/empty-checkbox.png';
import useChar from '../../hooks/CreatureStore';
import useSidebar from '../../hooks/SidebarStore';
import { calcStats } from '../../helpers/CalcStats';
import { skillsList } from '../../helpers/GameConstants';
import { clumpObjectsByProperty } from '../../helpers/utilityFct';
import BufferDot from '../ui/BufferDot';

const SpecialConfig = (props) => {
    const { id, level, origin, slug, type } = props.data;
    const cur = useChar((state) => state.cur);
    const setCur = useChar((state) => state.setCur);
    const setPreviewType = useSidebar((state) => state.setPreviewType);
    const setPreviewSlug = useSidebar((state) => state.setPreviewSlug);
    const modeSwap = useSidebar((state) => state.modeSwap);
    const [lib, setLib] = useState({});
    const [overlaps, setOverlaps] = useState([]);
    const [archeStr, setArcheStr] = useState([]);
    const [archeShow, setArcheShow] = useState(false);
    const [prevId, setPrevId] = useState(id ? id : "(none)");
    const db = fb.db;
    useEffect(() => {
        const tempLib = {};
        db.collection(type).get()
            .then((querySnapshot) => {
                querySnapshot.forEach((doc) => {
                    tempLib[doc.id] = doc.data();
                });
                setLib(tempLib);
            }).catch((error) => {
                console.log("Error getting library: ", error);
            });
    }, []);

    const expunge = (block, badId) => {
        let tempArr = [];
        ["feats", "talents", "mods", "verbs", "trainedSkills"].forEach((type) => {
            tempArr = tempArr.concat(block[type].filter((obj) => obj.origin === badId));
        });
        if (!tempArr.length) {
            return block;
        }
        let tempBlock = {
            ...block,
            mods: block.mods.filter((obj) => obj.origin !== badId),
            verbs: block.verbs.filter((obj) => obj.origin !== badId),
            trainedSkills: block.trainedSkills.filter((obj) => obj.origin !== badId)
        };
        block.feats.filter((obj) => obj.origin === badId).forEach((featObj) => {
            tempBlock = expunge(tempBlock, featObj.id);
        });
        block.talents.filter((obj) => obj.origin === badId).forEach((talentObj) => {
            tempBlock = expunge(tempBlock, talentObj.id);
        });
        return tempBlock;
    }

    const handleMenu = (ev) => {
        const newId = nanoid();
        if (ev.target.value === "(none)") {
            const tempBlock = {
                ...(expunge(cur, prevId)),
                [type]: [
                    ...cur[type].filter((obj) => obj.origin !== origin)
                ]
            };
            setCur({
                ...tempBlock,
                stats: calcStats(tempBlock)
            });
        } else {
            const libEntry = lib[ev.target.value];
            let tempMods = _.get(libEntry, "modifier", []);
            let tempVerbs = _.get(libEntry, "verb", []);
            tempMods = tempMods.map((base) => ({
                ...base,
                origin: newId,
                level,
                choices: {}
            }));
            tempVerbs = tempVerbs.map((base) => ({
                ...base,
                origin: newId,
                level
            }));
            const tempTrains = tempMods.filter((modObj) => modObj.target === "numTrainedSkills")
                .map((modObj) => ({
                    origin: newId,
                    level,
                    skill: _.get(modObj, "skillOptions", "Free Choice")
                }));
            let tempBlock = {
                ...(expunge(cur, prevId)),
                [type]: [
                    ...cur[type].filter((obj) => obj.origin !== origin),
                    {
                        id: newId,
                        slug: ev.target.value,
                        origin,
                        level,
                        name: libEntry.name,
                        choices: {},
                        delta: libEntry.delta
                    }
                ]
            };
            tempBlock = {
                ...tempBlock,
                mods: [
                    ...tempBlock.mods,
                    ...tempMods
                ],
                verbs: [
                    ...tempBlock.verbs,
                    ...tempVerbs
                ],
                trainedSkills: [
                    ...tempBlock.trainedSkills,
                    ...tempTrains
                ]
            };
            setCur({
                ...tempBlock,
                stats: calcStats(tempBlock)
            });
            setOverlaps(clumpObjectsByProperty(tempMods, "overlap"));
        }
        setPrevId(newId);
    }

    const handlePreview = (ev) => {
        setPreviewType(type);
        setPreviewSlug(slug);
        modeSwap("libPreview");
    }

    useEffect(() => {
        const tempMods = cur.mods.filter((modObj) => modObj.origin === id);
        setOverlaps(clumpObjectsByProperty(tempMods, "overlap"));
        let deltaStr = _.get(cur[type].filter((obj) => obj.id === id)[0], "delta", "");
        if (deltaStr.includes(`{"insert":"Archetypes:"},`)) {
            deltaStr = deltaStr.split(`{"insert":"Archetypes:"},`)[1];
            let prevStart = 0;
            let depth = 0;
            let indexOdd = false;
            let tempArr = [];
            for (let i = 0; i < deltaStr.length; i++) {
                if (deltaStr[i] === "{") {
                    depth += 1;
                    if (depth === 1) {
                        prevStart = i;
                    }
                } else if (deltaStr[i] === "}") {
                    depth -= 1;
                    if (depth === 0) {
                        if (indexOdd) {
                            tempArr.push(JSON.parse(deltaStr.slice(prevStart, i + 1)));
                        }
                        indexOdd = !indexOdd;
                    }
                }
            }
            setArcheStr(tempArr.map((obj) => obj.insert));
        } else {
            setArcheStr([]);
        }
    }, [cur, id]);

    return(
        <>
            <div className="bufferBox">
                <div className={`specialConfig ${origin.length > 6 ? "bonus" : null}`}>
                    <span className="levelBubble clickable" onClick={handlePreview}>{level}</span>
                    {type === "kits" && <BufferDot />}
                    <span>
                        <select onChange={handleMenu} value={slug ? slug : "(none)"}>
                            <option value="(none)">(none)</option>
                            {Object.keys(lib).sort((a, b) => lib[a].name - lib[b].name)
                                .map((libSlug) => (
                                    <option value={libSlug} key={libSlug}>{lib[libSlug].name}</option>
                            ))}
                        </select>
                    </span>
                </div>
                <BufferDot />
                {id && (cur.mods).filter((modObj) => modObj.origin === id && modObj.target === "numTrainedSkills")
                    .map((modObj) => {
                        if (modObj.type === "Synergy") return;
                        return(
                            <div key="onlyOne" className="training">
                                {[...Array(modObj.mag).keys()].map((i) => {
                                    let curSkill;
                                    if (cur.trainedSkills.filter((obj) => obj.origin === id).length) {
                                        curSkill = cur.trainedSkills.filter((obj) => obj.origin === id)[i].skill;
                                    } else {
                                        curSkill = "Free Choice";
                                    }
                                    return (
                                        <select
                                            key={i}
                                            value={curSkill}
                                            onChange={(ev) => {
                                                ev.preventDefault();
                                                const tempObjs = cur.trainedSkills.filter((obj) => obj.origin === id);
                                                tempObjs[i] = _.set(tempObjs[i], "skill", ev.target.value);
                                                const tempBlock = {
                                                    ...cur,
                                                    trainedSkills: [
                                                        ...cur.trainedSkills.filter((obj) => obj.origin !== id),
                                                        ...tempObjs
                                                    ]
                                                };
                                                setCur({
                                                    ...tempBlock,
                                                    stats: calcStats(tempBlock)
                                                });
                                            }}
                                        >
                                            {modObj.selection === "any" ?
                                                <>
                                                    <option value="Free Choice">(none)</option>
                                                    {skillsList.map((skillName) => (
                                                        <option value={skillName} key={skillName}>{skillName}</option>
                                                    ))}
                                                </> :
                                                (modObj.selection ?? []).length > 1 ?
                                                    <>
                                                        <option value="Free Choice">(none)</option>
                                                        {modObj.selection.map((skillName) => (
                                                            <option value={skillName} key={skillName}>{skillName}</option>
                                                        ))}
                                                    </> :
                                                    <option value={modObj.selection ? modObj.selection[0] : "error"}>{modObj.selection ? modObj.selection[0] : "error"}</option>
                                            }
                                        </select>
                                    );
                                })}
                                <BufferDot />
                            </div>
                        );
                    })}
                {overlaps.length > 0 && overlaps.map((modCluster, i) => {
                    const overlapId = modCluster[0].overlap;
                    let quarry = cur[type].filter((specialObj) => specialObj.id === id)[0];
                    const curChoice = _.get(quarry, `choices[${overlapId}]`, modCluster[0].target);
                    return (
                        <div key={i} className="choices">
                            <select
                                value={curChoice}
                                onChange={(ev) => {
                                    ev.preventDefault();
                                    quarry = _.set(quarry, `choices[${overlapId}]`, ev.target.value);
                                    const tempBlock = {
                                        ...cur,
                                        [type]: [
                                            ...cur[type].filter((obj) => obj.id !== id),
                                            quarry
                                        ]
                                    };
                                    setCur({
                                        ...tempBlock,
                                        stats: calcStats(tempBlock)
                                    });
                                }}
                            >
                                {modCluster.map((modObj) => (
                                    <option value={modObj.target} key={modObj.target}>
                                        {modObj.mag > 0 ? "+" : null}{modObj.mag} to {modObj.target}
                                    </option>
                                ))}
                            </select>
                            <BufferDot />
                        </div>
                    )
                })}
                {archeStr.length > 0 && <div className="archetypes">
                    <button
                        onClick={(ev) => {
                            ev.preventDefault();
                            setArcheShow(!archeShow);
                        }}
                    >
                        Archetypes
                    </button>
                    {archeShow && <div className="checklist">
                        {archeStr.map((reqs, i) => {
                            const tempMod = cur.mods.filter(
                                (modObj) => (modObj.origin === id && modObj.target === "kpMax" && modObj.archeNum === i)
                            )[0];
                            return(
                                <div key={reqs}>
                                    <img
                                        src={tempMod ? checked : unchecked}
                                        alt="checkbox"
                                        className="clickable"
                                        onClick={(ev) => {
                                            let tempBlock = {};
                                            if (tempMod) {          // Un-checking Archetype
                                                tempBlock = {
                                                    ...cur,
                                                    mods: [
                                                        ...cur.mods.filter(
                                                            (modObj) => (modObj.origin !== id ||
                                                                modObj.target !== "kpMax" ||
                                                                modObj.archeNum !== i)
                                                        )
                                                    ]
                                                }
                                            } else {                // Checking Archetype
                                                tempBlock = {
                                                    ...cur,
                                                    mods: [
                                                        ...cur.mods,
                                                        {
                                                            choices: {},
                                                            level,
                                                            mag: 1,
                                                            origin: id,
                                                            overlap: Math.random(),
                                                            target: "kpMax",
                                                            type: "Untyped",
                                                            archeNum: i
                                                        }
                                                    ]
                                                }
                                            }
                                            setCur({
                                                ...tempBlock,
                                                stats: calcStats(tempBlock)
                                            });
                                        }}
                                    />
                                    <span>{reqs}</span>
                                </div>
                            );
                        })}
                    </div>}
                    <BufferDot />
                </div>}
            </div>
        </>
    );
}

export default SpecialConfig;