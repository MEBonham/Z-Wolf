import React, { useState, useEffect } from 'react';

import useUser from '../../hooks/UserStore';
import useChar from '../../hooks/CreatureStore';
import useDice from '../../hooks/DiceStore';
import { checkSituation } from '../../helpers/CalcStats';
import checked from '../../media/ui/checked-box.png';
import unchecked from '../../media/ui/empty-checkbox.png';

const VerbDetails = ({ details, vType }) => {
    const uid = useUser((state) => state.uid);
    const cur = useChar((state) => state.cur);
    const setCur = useChar((state) => state.setCur);
    const roll = useDice((state) => state.addRoll);
    const [component, setComponent] = useState(null);
    const [title, setTitle] = useState(null);
    const [text, setText] = useState(null);

    const oldMine = (originId, originBullet) => {
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
    useEffect(() => {
        if (details.origin !== 0) {
            let [tempTitle, tempText] = oldMine(details.origin, details.bullet, cur);
            setTitle(tempTitle);
            setText(tempText);
        } else {
            setTitle(details.title);
        }
    }, [cur]);

    const toggle2H = () => {
        setCur({
            ...cur,
            status: {
                ...cur.status,
                versatile2H: !cur.status.versatile2H
            }
        });
    }

    const mineVerbStuff = () => {
        let originObj;
        let originType;
        ["equipment", "feats", "kits", "talents"].forEach((type) => {
            const filtArr = cur[type].filter((obj) => obj.id === details.origin);
            if (filtArr.length > 0) {
                originObj = filtArr[0];
                originType = type;
            } else if (details.origin === 0) {
                originType = "default";
                originObj = {
                    delta: details.delta,
                    tags: details.tags
                };
            }
        });
        // console.log(cur.name, details.origin);
        const delta = originObj.delta;
        if (vType === "Attack") {
            let attackForm = "wpn";
            if (originType === "equipment" && originObj.tags.includes("Weapon")) {
                attackForm = "wpn";
            } else if (delta.toLowerCase().includes("spell attack")) {
                attackForm = "spell";
            } else if (delta.toLowerCase().includes("vim attack")) {
                attackForm = "vim";
            }
            let remainingText = delta.slice(delta.indexOf("Range"));
            // console.log(remainingText);
            let rangeBlock = remainingText.split("; ")[0];
            if (rangeBlock.includes("Melee")) {
                let strArr = rangeBlock.split(" ");
                let reach = parseFloat(strArr[2]);
                reach += cur.stats.meleeReachMod;
                rangeBlock = ([
                    ...strArr.slice(0, 2),
                    reach,
                    ...strArr.slice(3)
                ]).join(" ");
            }
            const impactBlock = remainingText.split("; ")[1];
            const dmgTypeBlock = remainingText.split("; ")[2];
            const bleedBlock = remainingText.split("; ")[3].split(".")[0];
            let impactMod = parseInt(impactBlock.slice(16)) + cur.stats[`${attackForm}ImpactMod`];
            cur.mods.filter((modObj) => modObj.target === `${attackForm}ImpactMod` && modObj.condition && modObj.condition.startsWith("attackSituation"))
                .forEach((modObj) => {
                    // console.log(modObj);
                    const [flag, mod] = checkSituation(modObj.condition, cur, originObj);
                    if (flag) {
                        // console.log(flag);
                        impactMod += mod;
                    }
                });
            let accMod = cur.stats[`${attackForm}Acc`];
            cur.mods.filter((modObj) => modObj.target === `${attackForm}Acc` && modObj.condition && modObj.condition.startsWith("attackSituation"))
                .forEach((modObj) => {
                    const [flag, mod] = checkSituation(modObj.condition, cur, originObj, (modObj.primary ? true : false));
                    if (flag) {
                        accMod += mod;
                    }
                });
            return(
                <section className="attacks">
                    <div>
                        <h4
                            className="pseudoButton clickable"
                            onClick={() => roll({
                                sides: "usual",
                                modifier: impactMod,
                                text: `an Attack with ${title}`,
                                character: cur.name,
                                campaign: cur.campaign,
                                extraInfo: `${rangeBlock.split(" ")[0]}: ${rangeBlock.split(" ").slice(1).join(" ")}; ` +
                                    `Accuracy ${accMod}; ${dmgTypeBlock}; ` +
                                    `Bleed ${bleedBlock.split(" ").slice(-1)}.`
                            }, cur.stats.coastNum, cur.status, uid)}
                        >
                            Attack
                        </h4>
                        {originObj.tags && originObj.tags.includes("Weapon") && originObj.heft === "Versatile" ?
                            <span className="versatileCheck">
                                <span> </span>
                                {cur.status.versatile2H ?
                                    <img
                                        src={checked}
                                        className="clickable"
                                        onClick={toggle2H}
                                    /> :
                                    <img
                                        src={unchecked}
                                        className="clickable"
                                        onClick={toggle2H}
                                    />
                                }
                                <label>Wielded 2-Handed?</label>
                            </span> :
                            null
                        }
                    </div>
                    <p>
                        {`${rangeBlock.split(" ")[0]}: ${rangeBlock.split(" ").slice(1).join(" ")}; `}
                        {`Impact ${impactMod >= 0 ? "+" : ""}${impactMod} (${dmgTypeBlock}); `}
                        {`Accuracy ${accMod}; Bleed ${bleedBlock.split(" ").slice(-1)}.`}
                    </p>
                </section>
            );
        }
        return(<p>{text}</p>);
    }
    useEffect(() => {
        setComponent(mineVerbStuff());
    }, [cur, title, text]);

    return(
        <>
            {component}
        </>
    );
}

export default VerbDetails;