import React, { useEffect } from 'react';

import useChar from '../../hooks/CreatureStore';
import minusBtn from '../../media/ui/MinusButton.png';
import plusBtn from '../../media/ui/PlusButton.png';

const Pool = (props) => {
    const { type, color, spellOut } = props;
    const cur = useChar((state) => state.cur);
    const setCur = useChar((state) => state.setCur);

    useEffect(() => {
        let el = document.querySelector(`header div.pools .${type} .bar .innerBar`);
        el.style.backgroundColor = color;
        el.style.width = `${100 * cur[type] / Math.max(1, cur.stats[`${type}Max`])}%`;
    }, [cur])

    const increment = () => {
        setCur({
            ...cur,
            [type]: Math.min(cur[type] + 1, cur.stats[`${type}Max`])
        });
    }

    const decrement = () => {
        setCur({
            ...cur,
            [type]: Math.max(cur[type] - 1, 0)
        });
    }

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
            <img src={minusBtn} onClick={decrement} alt="Minus One" className="decrement clickable" />
            <img src={plusBtn} onClick={increment} alt="Plus One" className="increment clickable" />
        </div>
    );
}

export default Pool;