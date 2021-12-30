import React from 'react';
import { useParams } from 'react-router-dom';

import { skillsList, verbTypes } from '../../helpers/GameConstants';
import useChar from '../../hooks/CreatureStore';
import useSidebar from '../../hooks/SidebarStore';
import useDice from '../../hooks/DiceStore';
import Accordion from '../ui/Accordion';
import AccordionSection from '../ui/AccordionSection';
import BufferDot from '../ui/BufferDot';

const CharSheetMain = () => {
    const { slug } = useParams();
    const cur = useChar((state) => state.cur);
    const sidebarMode = useSidebar((state) => state.mode);
    const roll = useDice((state) => state.addRoll);

    const mineVerbDelta = (originId, originBullet) => {
        const menuForId = [
            ...cur.equipment,
            ...cur.feats,
            ...cur.kits,
            ...cur.talents
        ];
        const delta = menuForId.filter((obj) => obj.id === originId)[0].delta;
        const title = delta.split(`"attributes":`)[0].split(`"insert":`)[1].slice(1, -4);
        const intervalStr = delta.split(`"list":"bullet"`)[parseInt(originBullet) - 1];
        const intervalArr = intervalStr.split(`"insert":`);
        return [title, intervalArr[intervalArr.length - 1].slice(1, -18)];
    }

    return (
        <section className="tab main">
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
                                character: cur.name
                            }) : null}
                            className={sidebarMode === "play" ? "clickable" : ""}
                        >
                            <td>{skillName}</td>
                            <td>{cur.stats[skillName] >= 0 ? "+" : null}{cur.stats[skillName]}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
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
                            {verbList.map((verbObj, i) => {
                                const [title, text] = mineVerbDelta(verbObj.origin, verbObj.bullet);
                                return(<AccordionSection key={i}>
                                    <h4>{title}</h4>
                                    <p>{text}</p>
                                </AccordionSection>);
                            })}
                        </Accordion>
                    </div>);
                })}
            </section>
        </section>
    );
}

export default CharSheetMain;