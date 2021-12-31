import React, { useEffect, useRef } from 'react';
import _ from 'lodash';

import useChar from '../../hooks/CreatureStore';
import { expunge } from '../../helpers/CalcStats';
import { ultimateLoc } from '../../helpers/EquipOrg';
import indentImg from '../../media/ui/indent-arrow.png';

const ItemSummary = ({item, sell}) => {
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
            case "sell":
                sell(item);
                break;
            case "useUp":
                let tempInv;
                if (item.quantity > 1) {
                    tempInv = _.set(cur.equipment, `${index}.quantity`, item.quantity - 1);
                    setCur({
                        ...cur,
                        equipment: tempInv
                    });
                    menu.current.value = oldLoc;
                } else {
                    tempInv = [
                            ...cur.equipment.slice(0, index),
                            ...cur.equipment.slice(index + 1)
                    ];
                    const defaultLoc = ultimateLoc(item, cur.equipment);
                    for (let j = 0; j < tempInv.length; j++) {
                        if (tempInv[j].location === item.id) {
                            tempInv[j].location = defaultLoc;
                        }
                    }
                    setCur({
                        ...expunge(cur, item.id),
                        equipment: tempInv
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
            case "equipped":
                setCur({
                    ...cur,
                    equipment: [
                        ...cur.equipment.slice(0, index),
                        {
                            ...cur.equipment[index],
                            location: newLoc
                        },
                        ...cur.equipment.slice(index + 1)
                    ],
                    mods: [
                        ...cur.mods,
                        ...(item.modifier ?
                            item.modifier.map((modObj) => ({
                                ...modObj,
                                origin: item.id,
                                choices: true
                            }))
                        : [])
                    ],
                    verbs: [
                        ...cur.verbs,
                        ...(item.verb ?
                            item.verb.map((verbObj) => ({
                                ...verbObj,
                                origin: item.id,
                                delta: item.delta
                            }))
                        : [])
                    ]
                });
                break;
            default:
                setCur({
                    ...expunge(cur, item.id),
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