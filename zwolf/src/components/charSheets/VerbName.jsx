import React from 'react';

import useChar from '../../hooks/CreatureStore';

const VerbName = ({ details }) => {
    const cur = useChar((state) => state.cur);
    

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

    return(<h4>{title}</h4>);
}

export default VerbName;