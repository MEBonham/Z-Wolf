import React, { useState, useEffect } from 'react';

import useUser from '../../hooks/UserStore';
import useChar from '../../hooks/CreatureStore';
import useDice from '../../hooks/DiceStore';

const VerbDetails = ({ details, vType }) => {
    const uid = useUser((state) => state.uid);
    const cur = useChar((state) => state.cur);
    const roll = useDice((state) => state.addRoll);
    const [component, setComponent] = useState(null);

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
    let [title, text] = oldMine(details.origin, details.bullet);

    const mineVerbStuff = () => {
        let originObj;
        let originType;
        ["equipment", "feats", "kits", "talents"].forEach((type) => {
            const filtArr = cur[type].filter((obj) => obj.id === details.origin);
            if (filtArr.length > 0) {
                originObj = filtArr[0];
                originType = type;
            }
        });
        console.log(cur.name, details.origin);
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
            const rangeBlock = remainingText.split("; ")[0];
            const impactBlock = remainingText.split("; ")[1];
            const dmgTypeBlock = remainingText.split("; ")[2];
            const bleedBlock = remainingText.split("; ")[3].split("}")[0].slice(0, -2);
            const impactMod = parseInt(impactBlock.slice(16)) + cur.stats[`${attackForm}ImpactMod`];
            return(
                <section className="attacks">
                    <h4
                        className="pseudoButton clickable"
                        onClick={() => roll({
                            sides: "usual",
                            modifier: impactMod,
                            text: `an Attack with ${title}`,
                            character: cur.name,
                            campaign: cur.campaign
                        }, cur.stats.coastNum, cur.status, uid)}
                    >Attack</h4>
                    <p>
                        {`${rangeBlock.split(" ")[0]}: ${rangeBlock.split(" ").slice(1).join(" ")}; `}
                        {`Impact ${impactMod >= 0 ? "+" : ""}${impactMod} (${dmgTypeBlock}); `}
                        {`Accuracy ${cur.stats[`${attackForm}Acc`]}; Bleed ${bleedBlock.split(" ").slice(-1)}.`}
                    </p>
                </section>
            );
        }
        return(<p>{text}</p>);
    }
    useEffect(() => {
        setComponent(mineVerbStuff());
    }, [cur]);

    return(
        <>
            {component}
        </>
    );
}

export default VerbDetails;