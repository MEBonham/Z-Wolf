import React, { useState, useEffect } from 'react';

import useChar from '../../hooks/CreatureStore';
import SpecialConfig from './SpecialConfig';

const CharSheetConfigure = () => {
    const cur = useChar((state) => state.cur);
    const [kitBlocks, setKitBlocks] = useState([]);
    const [featBlocks, setFeatBlocks] = useState([]);
    const [talentBlocks, setTalentBlocks] = useState([]);

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
                    ...cur.kits.filter((kitObj) => kitObj.origin === "1")[0]
                });
            }
            if (i < 9) {
                tempFeats.push({
                    level: i,
                    origin: `${i}`,
                    type: "feats",
                    ...cur.feats.filter((featObj) => featObj.origin === `${i}`)
                });
            }
            tempTalents.push({
                level: i,
                origin: `${i}`,
                type: "talents",
                ...cur.talents.filter((talentObj) => talentObj.origin === `${i}`)
            });
        }
        setKitBlocks(tempKits);
        setFeatBlocks(tempFeats);
        setTalentBlocks(tempTalents);
    }, [cur]);

    return (
        <section className="tab configure">
            <h2>Configuration</h2>
            <p>
                <strong>Kits:</strong>
                <span> </span>
                {kitBlocks.map((kitObj, i) => 
                    <SpecialConfig
                        key={i}
                        data={kitObj}
                        terminal={i === kitBlocks.length - 1}
                    />
                )}
            </p>
            <p>
                <strong>Feats:</strong>
                <span> </span>
                {featBlocks.map((featObj, i) =>
                    <SpecialConfig
                        data={featObj}
                        terminal={i === featBlocks.length - 1}
                    />
                )}
            </p>
            <p>
                <strong>Talents:</strong>
                <span> </span>
                {talentBlocks.map((talentObj, i) =>
                    <SpecialConfig
                        data={talentObj}
                        terminal={i === talentBlocks.length - 1}
                    />
                )}
            </p>
        </section>
    );
}

export default CharSheetConfigure;