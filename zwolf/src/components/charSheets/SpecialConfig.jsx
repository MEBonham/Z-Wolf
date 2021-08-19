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

    const handleMenu = (ev) => {
        const newId = nanoid();
        if (ev.target.value === "(none)") {
            const tempBlock = {
                ...cur,
                [type]: [
                    ...cur[type].filter((obj) => obj.origin !== origin)
                ],
                mods: [
                    ...cur.mods.filter((obj) => obj.origin !== prevId)
                ],
                verbs: [
                    ...cur.verbs.filter((obj) => obj.origin !== prevId)
                ],
                trainedSkills: [
                    ...cur.trainedSkills.filter((obj) => obj.origin !== prevId)
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
            tempMods = tempMods.map((prev) => ({
                ...prev,
                origin: newId
            }));
            tempVerbs = tempVerbs.map((prev) => ({
                ...prev,
                origin: newId
            }));
            const tempBlock = {
                ...cur,
                [type]: [
                    ...cur[type].filter((obj) => obj.origin !== origin),
                    {
                        id: newId,
                        slug: ev.target.value,
                        origin,
                        level,
                        name: libEntry.name
                    }
                ],
                mods: [
                    ...cur.mods.filter((obj) => obj.origin !== prevId),
                    ...tempMods
                ],
                verbs: [
                    ...cur.verbs.filter((obj) => obj.origin !== prevId),
                    ...tempVerbs
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
        <div className="specialConfig">
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
                <BufferDot />
            </span>
        </div>
    );
}

export default SpecialConfig;