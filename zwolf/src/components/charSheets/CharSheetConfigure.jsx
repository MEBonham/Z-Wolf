import React, { useState, useEffect } from 'react';
import _ from 'lodash';

import useChar from '../../hooks/CreatureStore';
import checked from '../../media/ui/checked-box.png';
import unchecked from '../../media/ui/empty-checkbox.png';
import SpecialConfig from './SpecialConfig';
import BufferDot from '../ui/BufferDot';

const CharSheetConfigure = () => {
    const cur = useChar((state) => state.cur);
    const setCur = useChar((state) => state.setCur);
    const archeEdit = useChar((state) => state.archeEdit);
    const setArcheEdit = useChar((state) => state.setArcheEdit);
    const [kitBlocks, setKitBlocks] = useState([]);
    const [featBlocks, setFeatBlocks] = useState([]);
    const [talentBlocks, setTalentBlocks] = useState([]);
    const [archeStr, setArcheStr] = useState([]);

    useEffect(() => {
        const tempKits = [];
        const tempFeats = [];
        const tempTalents = [];
        for (let i = 1; i <= cur.level; i++) {
            if (i === 1) {
                tempKits.push({
                    level: i,
                    origin: "1A",
                    type: "kits",
                    ...cur.kits.filter((kitObj) => kitObj.origin === "1A")[0]
                });
                tempTalents.push({
                    level: i,
                    origin: "1A",
                    type: "talents",
                    ...cur.talents.filter((talentObj) => talentObj.origin === "1A")[0]
                });
                tempTalents.push({
                    level: i,
                    origin: "1B",
                    type: "talents",
                    ...cur.talents.filter((talentObj) => talentObj.origin === "1B")[0]
                });
                tempTalents.push({
                    level: i,
                    origin: "1C",
                    type: "talents",
                    ...cur.talents.filter((talentObj) => talentObj.origin === "1C")[0]
                });
            }
            if (i % 2 === 1 && i < 11) {
                tempKits.push({
                    level: i,
                    origin: `${i}`,
                    type: "kits",
                    ...cur.kits.filter((kitObj) => kitObj.origin === `${i}`)[0]
                });
            }
            if (i < 9) {
                tempFeats.push({
                    level: i,
                    origin: `${i}`,
                    type: "feats",
                    ...cur.feats.filter((featObj) => featObj.origin === `${i}`)[0]
                });
            }
            tempTalents.push({
                level: i,
                origin: `${i}`,
                type: "talents",
                ...cur.talents.filter((talentObj) => talentObj.origin === `${i}`)[0]
            });
            cur.mods.filter((modObj) => modObj.level === i && modObj.target === "numFeats")
                .forEach((bonusFeatObj) => {
                    if (bonusFeatObj.type === "Synergy") return;    // Synergy bonuses to numFeats or numTalents won't work
                    for (let j = 0; j < bonusFeatObj.mag; j++) {
                        tempFeats.push({
                            level: i,
                            origin: bonusFeatObj.origin,
                            type: "feats",
                            ...cur.feats.filter((featObj) => featObj.origin === bonusFeatObj.origin)[j]
                        });
                    }
                });
            cur.mods.filter((modObj) => modObj.level === i && modObj.target === "numTalents")
                .forEach((bonusTalentObj) => {
                    if (bonusTalentObj.type === "Synergy") return;    // Synergy bonuses to numFeats or numTalents won't work
                    for (let j = 0; j < bonusTalentObj.mag; j++) {
                        tempTalents.push({
                            level: i,
                            origin: bonusTalentObj.origin,
                            type: "talents",
                            ...cur.talents.filter((talentObj) => talentObj.origin === bonusTalentObj.origin)[j]
                        });
                    }
                });
        }
        setKitBlocks(tempKits);
        setFeatBlocks(tempFeats);
        setTalentBlocks(tempTalents);
    }, [cur]);

    useEffect(() => {
        if (archeEdit) {
            let deltaStr = _.get(cur.kits.filter((obj) => obj.id === archeEdit)[0], "delta", "");
            if (deltaStr.includes(`{"insert":"Archetypes:"},`)) {
                deltaStr = deltaStr.split(`{"insert":"Archetypes:"},`)[1];
                let prevStart = 0;
                let depth = 0;
                let indexOdd = false;
                let tempArr = [];
                const orMarkers = [];
                for (let i = 0; i < deltaStr.length; i++) {
                    if (deltaStr[i] === "{") {
                        depth += 1;
                        if (depth === 1) {
                            prevStart = i;
                        }
                    } else if (deltaStr[i] === "}") {
                        depth -= 1;
                        if (depth === 0) {
                            const fragment = JSON.parse(deltaStr.slice(prevStart, i + 1));
                            const orTag = {
                                attributes: {
                                    bold: true
                                },
                                insert: "or"
                            };
                            if (_.isEqual(fragment, orTag)) {
                                tempArr.push(fragment);
                                orMarkers.push(i);
                            } else if (indexOdd) {
                                tempArr.push(fragment);
                            }
                            indexOdd = !indexOdd;
                        }
                    }
                }
                setArcheStr(tempArr.map((obj) => obj.insert).join("$$").replaceAll("$$or$$", " or ").split("$$"));
            } else {
                setArcheStr([]);
            }
        } else {
            setArcheStr([]);
        }
    }, [archeEdit, cur]);

    return (
        <section className="tab configure">
            {archeEdit && <div className="checklist">
                <h4>
                    Archetypes Attained
                    <BufferDot />
                    <span
                        className="clickable"
                        onClick={() => setArcheEdit(null)}
                    >
                        Close
                    </span>
                </h4>
                {archeStr.map((reqs, i) => {
                    const tempMod = cur.mods.filter(
                        (modObj) => (modObj.origin === archeEdit && modObj.target === "kpMax" && modObj.archeNum === i)
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
                                                    level: _.get(cur.kits.filter((obj) => obj.id === archeEdit)[0], "level", -1),
                                                    mag: 1,
                                                    origin: archeEdit,
                                                    overlap: Math.random(),
                                                    target: "kpMax",
                                                    type: "Untyped",
                                                    archeNum: i
                                                }
                                            ]
                                        }
                                    }
                                    setCur(tempBlock);
                                }}
                            />
                            <span>{reqs}</span>
                        </div>
                    );
                })}
            </div>}
            <h2>Configuration</h2>
            <div className="kits">
                <strong>Kits:</strong>
                <span> </span>
                {kitBlocks.map((kitObj, i) => 
                    <SpecialConfig
                        key={i}
                        data={kitObj}
                    />
                )}
            </div>
            <div className="notKits">
                <strong>Feats:</strong>
                <span> </span>
                {featBlocks.map((featObj, i) =>
                    <SpecialConfig
                        key={i}
                        data={featObj}
                    />
                )}
            </div>
            <div className="notKits">
                <strong>Talents:</strong>
                <span> </span>
                {talentBlocks.map((talentObj, i) =>
                    <SpecialConfig
                        key={i}
                        data={talentObj}
                    />
                )}
            </div>
        </section>
    );
}

export default CharSheetConfigure;