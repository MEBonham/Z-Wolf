import React from 'react';

import useChar from '../../hooks/CreatureStore';

const ComplicationSummary = ({ compObj, index }) => {
    const cur = useChar((state) => state.cur);
    const setCur = useChar((state) => state.setCur);

    const invoke = (ev) => {
        ev.stopPropagation();
        setCur({
            ...cur,
            complications: [
                ...cur.complications.slice(0, index),
                {
                    ...cur.complications[index],
                    invokes: cur.complications[index].invokes + 1
                },
                ...cur.complications.slice(index + 1)
            ],
            kp: Math.min(cur.kp + 1, cur.stats.kpMax)
        });
    }

    return(
        <h4 className="complicationTitleBar">
            <span>{compObj.category}</span>
            <span onClick={invoke} className="mebButton clickable">Invoke</span>
        </h4>
    );
}

export default ComplicationSummary;