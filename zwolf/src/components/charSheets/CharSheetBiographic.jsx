import React from 'react';

import useChar from '../../hooks/CreatureStore';

const CharSheetBiographic = () => {
    const cur = useChar((state) => state.cur);

    return (
        <section className="tab biographic">
            <h2>Complications</h2>
            {cur.complications.map((complication) => {
                <p>{complication}</p>
            })}
        </section>
    );
}

export default CharSheetBiographic;