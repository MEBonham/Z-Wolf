import React, { useState, useEffect, useRef } from 'react';
import _ from 'lodash';
import { useForm } from 'react-hook-form';

import useChar from '../../hooks/CreatureStore';
import SpecialConfig from './SpecialConfig';
import { skillsList } from '../../helpers/GameConstants';
import BufferDot from '../ui/BufferDot';
import TrainingPicker from './TrainingPicker';
import ArchetypeChecklist from './ArchetypeChecklist';

const CharSheetConfigure = () => {
    const cur = useChar((state) => state.cur);
    const setCur = useChar((state) => state.setCur);
    const [kitBlocks, setKitBlocks] = useState([]);
    const [featBlocks, setFeatBlocks] = useState([]);
    const [talentBlocks, setTalentBlocks] = useState([]);
    const [synergies, setSynergies] = useState([]);
    const bestSave = useRef(null);
    const { register, handleSubmit, reset } = useForm();

    // useEffect(() => {
    //     setCur({
    //         ...cur,
    //         mods: [
    //             ...cur.mods,
    //             {
    //                 choices: {},
    //                 level: 1,
    //                 mag: "special",
    //                 origin: "1A",
    //                 overlap: "0",
    //                 primary: true,
    //                 skill: "Brawn",
    //                 target: "av",
    //                 type: "Synergy"
    //             },
    //             {
    //                 choices: {},
    //                 level: 1,
    //                 mag: "special",
    //                 origin: "1B",
    //                 overlap: "1",
    //                 primary: false,
    //                 skill: "Brawn",
    //                 target: "wpnImpactMod",
    //                 type: "Synergy"
    //             }
    //         ]
    //     });
    //     console.log("complete");
    // }, []);

    useEffect(() => {
        if (cur && bestSave.current) {
            bestSave.current.value = cur.bestSave;
        }

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
        setSynergies(cur.mods.filter((modObj) => modObj.type === "Synergy" && cur.stats.skillRanks[modObj.skill] > 2));
    }, [cur]);

    const newLang = (formData) => {
        setCur({
            ...cur,
            languages: [
                ...cur.languages,
                formData.newLang
            ]
        });
        reset();
    }

    return (
        <section className="tab configure">
            <ArchetypeChecklist />
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
            <section>
                <h3>Skills</h3>
                <section>
                    <h4>Initial Trainings</h4>
                    <div>
                        <TrainingPicker index={0} origin="1A" modObj={{ selection: "any" }} />
                        <TrainingPicker index={0} origin="1B" modObj={{ selection: "any" }} />
                    </div>
                </section>
                <h4>Normal Ranks</h4>
                <table className="skillRankSelections">
                    <tbody>
                        {_.range(cur.level).map((i) => (
                            <tr key={i}>
                                <td><strong>(L{i + 1})</strong><BufferDot /></td>
                                {_.range(6).map((j) => {
                                    let ranksAssigned;
                                    if (cur.baseSkillRanks[`${i + 1}`]) {
                                        ranksAssigned = cur.baseSkillRanks[`${i + 1}`].length;
                                    } else {
                                        ranksAssigned = 0;
                                    }
                                    // console.log(i, j, ranksAssigned);
                                    return(
                                        <td key={j}>
                                            <select
                                                value={_.get(cur, `baseSkillRanks[${i + 1}][${j}]`, "Athletics")}
                                                onChange={(ev) => {
                                                    ev.preventDefault();
                                                    setCur(_.set(cur, `baseSkillRanks[${i + 1}][${j}]`, ev.target.value));
                                                }}
                                                disabled={(j <= ranksAssigned) ? false : true}
                                            >
                                                {skillsList.map((skillName) => (
                                                    <option key={skillName} value={skillName}>{skillName}</option>
                                                ))}
                                            </select>
                                        </td>
                                    );
                                })}
                            </tr>
                        ))}
                    </tbody>
                </table>
                {synergies.length > 0 && <section className="synergies">
                    <h4>Primary Synergy Bonuses</h4>
                    <div>
                        {skillsList.map((skillName) => {
                            const mods = synergies.filter((modObj) => modObj.skill === skillName);
                            let alreadyPrimary = mods.findIndex((modObj) => modObj.primary);
                            if (mods.length > 0 && alreadyPrimary < 0) {
                                alreadyPrimary = 0;
                                mods[0].primary = true;
                                setCur({
                                    ...cur,
                                    mods: [
                                        ...cur.mods.filter((modObj) => modObj.type !== "Synergy" || modObj.skill !== skillName),
                                        ...mods
                                    ]
                                });
                            }
                            if (!mods.length) return null;
                            return (
                                <span key={skillName}>
                                    <strong>{skillName}:</strong> 
                                    <select
                                        value={alreadyPrimary}
                                        onChange={(ev) => {
                                            ev.preventDefault();
                                            for (let i = 0; i < mods.length; i++) {
                                                if (i === parseInt(ev.target.value)) {
                                                    mods[i].primary = true;
                                                } else {
                                                    mods[i].primary = false;
                                                }
                                            }
                                            setCur({
                                                ...cur,
                                                mods: [
                                                    ...cur.mods.filter((modObj) => modObj.type !== "Synergy" || modObj.skill !== skillName),
                                                    ...mods
                                                ]
                                            });
                                        }}
                                    >
                                        {mods.map((modObj, i) => (
                                            <option key={modObj.target} value={i}>{modObj.target}</option>
                                        ))}
                                    </select>
                                </span>
                            );
                        })}
                    </div>
                </section>}
            </section>
            <section className="misc">
                <h3>Other</h3>
                <div>
                    <label>Best Save:</label>
                    <select
                        onChange={(ev) => setCur({
                            ...cur,
                            bestSave: ev.target.value
                        })}
                        ref={bestSave}
                    >
                        <option value="fort">Fortitude</option>
                        <option value="ref">Reflex</option>
                        <option value="will">Willpower</option>
                    </select>
                </div>
                <form onSubmit={handleSubmit(newLang)}>
                    <input type="text" placeholder="New Language" {...register("newLang", { required: true })} />
                    <button type="submit">Add Language</button>
                </form>
            </section>
        </section>
    );
}

export default CharSheetConfigure;