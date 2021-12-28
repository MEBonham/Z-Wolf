import React, { useEffect, useRef } from 'react';

import useChar from '../../hooks/CreatureStore';
import indentImg from '../../media/ui/indent-arrow.png';

const ItemSummary = ({item}) => {
    const cur = useChar((state) => state.cur);
    const setCur = useChar((state) => state.setCur);
    const index = cur.equipment.findIndex((itemObj) => itemObj.id === item.id);
    const menu = useRef(null);
    const oldLoc = item.location;

    useEffect(() => {
        menu.current.value = oldLoc;
    }, [cur]);

    const moveEquip = (ev) => {
        const newLoc = ev.target.value;

        switch (newLoc) {
            case "useUp":
                if (item.quantity > 1) {
                    setCur({
                        ...cur,
                        equipment: [
                            ...cur.equipment.slice(0, index),
                            {
                                ...cur.equipment[index],
                                quantity: item.quantity - 1,
                                location: oldLoc
                            },
                            ...cur.equipment.slice(index + 1)
                        ]
                    });
                    menu.current.value = oldLoc;
                } else {
                    setCur({
                        ...cur,
                        equipment: [
                            ...cur.equipment.slice(0, index),
                            ...cur.equipment.slice(index + 1)
                        ]
                    });
                }
                break;
            case "moveUp":
                const beforeSlice = cur.equipment.slice(0, index);
                let j = beforeSlice.length - 1;
                while (j >= 0) {
                    if (beforeSlice[j].depth === item.depth) break;
                    j--;
                }

                setCur({
                    ...cur,
                    equipment: [
                        ...cur.equipment.slice(0, j),
                        {
                            ...cur.equipment[index],
                            i: j
                        },
                        ...cur.equipment.slice(j + 1, index),
                        {
                            ...cur.equipment[j],
                            i: index
                        },
                        ...cur.equipment.slice(index + 1)
                    ]
                });
                menu.current.value = oldLoc;
                break;
            case "moveDown":
                const afterSlice = cur.equipment.slice(index + 1);
                const k = afterSlice.findIndex((itemObj) => itemObj.depth === item.depth) + index + 1;

                setCur({
                    ...cur,
                    equipment: [
                        ...cur.equipment.slice(0, index),
                        {
                            ...cur.equipment[k],
                            i: index
                        },
                        ...cur.equipment.slice(index + 1, k),
                        {
                            ...cur.equipment[index],
                            i: k
                        },
                        ...cur.equipment.slice(k + 1)
                    ]
                });
                menu.current.value = oldLoc;
                break;
            default:
                setCur({
                    ...cur,
                    equipment: [
                        ...cur.equipment.slice(0, index),
                        {
                            ...cur.equipment[index],
                            location: newLoc
                        },
                        ...cur.equipment.slice(index + 1)
                    ]
                });
        }
    }

    return(
        <h4 className="itemSummary">
            <span className="nameQty">
                {[...Array(item.depth).keys()].map((i) => (<img src={indentImg} className="icon" key={i} />))}
                {item.name + (item.quantity > 1 ? ` (x${item.quantity})` : "")}
            </span>
            <span className="bulk">
                Bulk: {parseFloat(item.bulk) * item.quantity}
            </span>
            <select onClick={(ev) => ev.stopPropagation()} onChange={moveEquip} ref={menu}>
                <option value="available">Available</option>
                <option value="equipped">Equipped</option>
                <option value="notCarried">Not Carried</option>
                {cur.equipment.filter((itemObj) => itemObj.tags.includes("Container"))
                    .map((itemObj) => (
                        <option key={itemObj.id} value={itemObj.id}>{itemObj.name}</option>
                    ))
                }
                {item.i > 0 ? <option value="moveUp">Move Up</option> : null}
                {item.i + 1 < item.outOf ? <option value="moveDown">Move Down</option> : null}
                <option value="sell">Sell (one)</option>
                <option value="useUp">Use Up (one)</option>
            </select>
        </h4>
    );
}

export default ItemSummary;