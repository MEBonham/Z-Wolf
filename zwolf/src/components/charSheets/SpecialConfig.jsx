import React, { useState, useEffect } from 'react';
import _ from 'lodash';
import { nanoid } from 'nanoid'

import fb from '../../fbConfig';
import useChar from '../../hooks/CreatureStore';
import useSidebar from '../../hooks/SidebarStore';
import { calcStats } from '../../helpers/CalcStats';
import BufferDot from '../ui/BufferDot';

const SpecialConfig = (props) => {
    const { id, level, origin, slug, type } = props.data;
    const cur = useChar((state) => state.cur);
    const setCur = useChar((state) => state.setCur);
    const setPreviewType = useSidebar((state) => state.setPreviewType);
    const setPreviewSlug = useSidebar((state) => state.setPreviewSlug);
    const modeSwap = useSidebar((state) => state.modeSwap);
    const [lib, setLib] = useState({});
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
                level
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
                        name: libEntry.name
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
        }
        setPrevId(newId);
    }

    const handlePreview = (ev) => {
        setPreviewType(type);
        setPreviewSlug(slug);
        modeSwap("libPreview");
    }

    return(
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
        </div>
    );
}

export default SpecialConfig;