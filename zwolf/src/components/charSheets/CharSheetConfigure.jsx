import React from 'react';

import useChar from '../../hooks/CreatureStore';

const CharSheetConfigure = () => {
    const cur = useChar((state) => state.cur);

    return (
        <section className="tab configure">
            <h2>Configuration</h2>
            <p><strong>Kits:</strong> {cur.kits.map((kitObj) => kitObj.name).join(", ")}</p>
            <p><strong>Feats:</strong> {cur.feats.map((featObj) => featObj.name).join(", ")}</p>
            <p><strong>Talents:</strong> {cur.talents.map((talentObj) => talentObj.name).join(", ")}</p>
        </section>
    );
}

export default CharSheetConfigure;