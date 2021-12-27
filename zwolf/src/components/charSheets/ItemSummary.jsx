import React, { useEffect, useRef } from 'react';

import useChar from '../../hooks/CreatureStore';

const ItemSummary = ({item, index}) => {
    const cur = useChar((state) => state.cur);
    const setCur = useChar((state) => state.setCur);
    const menu = useRef(null);
    const oldLoc = item.location;

    useEffect(() => {
        menu.current.value = oldLoc;
    }, []);

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
                    .map((itemObj) => {
                        <option key={itemObj.id} value={itemObj.id}>{itemObj.name}</option>
                    })
                }
                <option value="sell">Sell (one)</option>
                <option value="useUp">Use Up (one)</option>
            </select>
        </h4>
    );
}

export default ItemSummary;