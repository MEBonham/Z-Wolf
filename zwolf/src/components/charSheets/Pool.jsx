import React, { useEffect } from 'react';

import useChar from '../../hooks/CreatureStore';

const Pool = (props) => {
    const { type, color, spellOut } = props;
    const cur = useChar((state) => state.cur);

    useEffect(() => {
        let el = document.querySelector(`header div.pools .${type} .bar .innerBar`);
        el.style.backgroundColor = color;
        el.style.width = `${100 * cur[type] / Math.max(1, cur.stats[`${type}Max`])}%`;
    }, [cur])

    return (
        <div className={`pool ${type}`}>
            <div className="poolMax">
                Max: {cur.stats[`${type}Max`]}
            </div>
            <div className="bar">
                <div className="innerBar" />
            </div>
            <div className="mainPoolVal">
                <p>{cur[type]}</p>
                <p className="small">{spellOut}</p>
            </div>
        </div>
    );
}

export default Pool;