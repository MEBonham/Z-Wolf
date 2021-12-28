import React, { useState, useEffect } from 'react';
import _ from 'lodash';
import { nanoid } from 'nanoid'

import fb from '../../fbConfig';
import useChar from '../../hooks/CreatureStore';
import useSidebar from '../../hooks/SidebarStore';
import { expunge } from '../../helpers/CalcStats';
import { clumpObjectsByProperty } from '../../helpers/utilityFct';
import BufferDot from '../ui/BufferDot';
import TrainingPicker from './TrainingPicker';

const SpecialConfig = (props) => {
    const { id, level, origin, slug, type, choices } = props.data;
    const cur = useChar((state) => state.cur);
    const setCur = useChar((state) => state.setCur);
    const archeEdit = useChar((state) => state.archeEdit);
    const setArcheEdit = useChar((state) => state.setArcheEdit);
    const setPreviewType = useSidebar((state) => state.setPreviewType);
    const setPreviewSlug = useSidebar((state) => state.setPreviewSlug);
    const modeSwap = useSidebar((state) => state.modeSwap);
    const [lib, setLib] = useState({});
    const [overlaps, setOverlaps] = useState([]);
    const [archeStr, setArcheStr] = useState([]);
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

    const handleMenu = (ev) => {
        const newId = nanoid();
        if (ev.target.value === "(none)") {
            if (archeEdit === prevId) {
                setArcheEdit(null);
            }
            setCur({
                ...(expunge(cur, prevId)),
                [type]: [
                    ...cur[type].filter((obj) => obj.origin !== origin)
                ]
            });
        } else {
            if (archeEdit === prevId) {
                setArcheEdit(newId);
            }
            const libEntry = lib[ev.target.value];
            let tempMods = _.get(libEntry, "modifier", []);
            let tempVerbs = _.get(libEntry, "verb", []);
            tempMods = tempMods.map((base) => ({
                ...base,
                origin: newId,
                level,
                choices
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
            setCur({
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
        setArcheStr(_.get(cur[type].filter((obj) => obj.id === id)[0], "delta", ""));
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
                                {[...Array(modObj.mag).keys()].map((i) => (
                                    <span key={i}>
                                        <TrainingPicker origin={id} index={i} modObj={modObj} />
                                        <BufferDot />
                                    </span>
                                ))}
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
                                    setCur({
                                        ...cur,
                                        [type]: [
                                            ...cur[type].filter((obj) => obj.id !== id),
                                            quarry
                                        ]
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
                {archeStr.includes(`{"insert":"Archetypes:"},`) && <div className="archetypes">
                    <button
                        onClick={(ev) => {
                            ev.preventDefault();
                            if (archeEdit === id) {
                                setArcheEdit(null);
                            } else {
                                setArcheEdit(id);
                            }
                        }}
                    >
                        Archetypes
                    </button>
                    <BufferDot />
                </div>}
            </div>
        </>
    );
}

export default SpecialConfig;