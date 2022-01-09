import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { skillsList, verbTypes, statuses, sizeCatNames } from '../../helpers/GameConstants';
import { checkCondition } from '../../helpers/CalcStats';
import useUser from '../../hooks/UserStore';
import useChar from '../../hooks/CreatureStore';
import useSidebar from '../../hooks/SidebarStore';
import useDice from '../../hooks/DiceStore';
import Accordion from '../ui/Accordion';
import AccordionSection from '../ui/AccordionSection';
import BufferDot from '../ui/BufferDot';
import checked from '../../media/ui/checked-box.png';
import unchecked from '../../media/ui/empty-checkbox.png';
import VerbName from './VerbName';
import VerbDetails from './VerbDetails';

const CharSheetMain = () => {
    const { slug } = useParams();
    const uid = useUser((state) => state.uid);
    const cur = useChar((state) => state.cur);
    const setCur = useChar((state) => state.setCur);
    const sidebarMode = useSidebar((state) => state.mode);
    const roll = useDice((state) => state.addRoll);
    const [verbArea, setVerbArea] = useState(null);

    const toggleStatus = (key) => {
        setCur({
            ...cur,
            status: {
                ...cur.status,
                [key]: !cur.status[key]
            }
        });
    }

    useEffect(() => {
        setVerbArea(
            <section className="verbs">
                <h2>Verbs</h2>
                {verbTypes.map((vType) => {
                    const verbList = cur.verbs.filter((verbObj) => !verbObj.level || (verbObj.level <= cur.level))
                        .filter((verbObj) => verbObj.activity === vType);
                    if (verbList.length === 0 && !["Passive"].includes(vType)) {
                        return null;
                    }
                    return (<div key={vType}>
                        <h3>{vType}</h3>
                        <Accordion lsUniqueKey={`zWolfCharVerbsAccordion_${slug}_${vType}`}>
                            {vType === "Passive" ? 
                                <AccordionSection>
                                    <h4>{sizeCatNames[`${cur.stats.sizeCategory}`]} Size</h4>
                                    <p>
                                        You are a {sizeCatNames[`${cur.stats.sizeCategory}`]} creature.
                                        <span> </span>
                                        {cur.stats.sizeCategory < 4 ? "Boost checks where your being smaller than a compared creature is an advantage (e.g. hiding from them). Drag checks where your being smaller than a compared creature is a disadvantage (e.g. maintaining your footing if they push you around)." : null}
                                        <span> </span>
                                        {cur.stats.sizeCategory > -4 ? "Boost checks where your being larger than a compared creature is an advantage (e.g. maintaining your footing if they push you around). Drag checks where your being larger than a compared creature is a disadvantage (e.g. hiding from them)." : null}
                                    </p>
                                </AccordionSection>
                            : null}
                            {vType === "Passive" ? 
                                <AccordionSection>
                                    <h4>Languages</h4>
                                    <p>
                                        <BufferDot />
                                        {cur.languages.slice().sort().map((language, i) => (
                                            <span key={i}>
                                                {language} <BufferDot />
                                            </span>
                                        ))}
                                    </p>
                                </AccordionSection>
                            : null}
                            {verbList.filter((verbObj) => (!verbObj.condition || checkCondition(verbObj.condition, cur)))
                                .map((verbObj, i) => {
                                    // console.log(cur.name, verbObj.origin);
                                    return(<AccordionSection key={i}>
                                        <VerbName  details={verbObj} />
                                        <VerbDetails vType={vType} details={verbObj} />
                                    </AccordionSection>);
                                })}
                            {vType === "Attack" ? 
                                <AccordionSection>
                                    <h4 className="muted">Unarmed Strike</h4>
                                    <VerbDetails vType={vType} details={{
                                        origin: 0,
                                        delta: `Attack: Range Melee 1; Impact Modifier -4; Bludgeoning Damage; Bleed Number 3.`,
                                        tags: [],
                                        title: "Unarmed Strike"
                                    }} />
                                </AccordionSection>
                            : null}
                        </Accordion>
                    </div>);
                })}
            </section>
        );
    }, [cur, slug])

    return (
        <section className="tab main">
            <div className="leftColumn">
                <table>
                    <thead>
                        <tr>
                            <th colSpan='2'>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {Object.keys(statuses).map((boolLabel) => (
                            <tr key={boolLabel}>
                                <td>{cur.status[boolLabel] ?
                                    <img
                                        src={checked}
                                        className="clickable"
                                        onClick={() => toggleStatus(boolLabel)}
                                    /> :
                                    <img
                                        src={unchecked}
                                        className="clickable"
                                        onClick={() => toggleStatus(boolLabel)}
                                    />
                                }</td>
                                <td>{boolLabel}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <table>
                    <thead>
                        <tr>
                            <th colSpan='2'>Skills (CoastNum: {cur.stats.coastNum})</th>
                        </tr>
                    </thead>
                    <tbody>
                        {skillsList.map((skillName) => (
                            <tr
                                key={skillName}
                                onClick={sidebarMode === "play"? () => roll({
                                    sides: "usual",
                                    modifier: cur.stats[skillName],
                                    text: `a${skillName === "Athletics" || skillName === "Insight" ? "n" : ""} ${skillName} Check`,
                                    character: cur.name,
                                    campaign: cur.campaign
                                }, cur.stats.coastNum, cur.status, uid) : null}
                                className={sidebarMode === "play" ? "clickable" : ""}
                            >
                                <td>{skillName}</td>
                                <td>{cur.stats[skillName] >= 0 ? "+" : null}{cur.stats[skillName]}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            {verbArea}
        </section>
    );
}

export default CharSheetMain;