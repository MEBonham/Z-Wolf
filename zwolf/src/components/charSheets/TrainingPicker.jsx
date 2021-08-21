import React from 'react';
import _ from 'lodash';

import { skillsList } from '../../helpers/GameConstants';
import useChar from '../../hooks/CreatureStore';

const TrainingPicker = (props) => {
    const { index, modObj, origin } = props;
    const cur = useChar((state) => state.cur);
    const setCur = useChar((state) => state.setCur);
    let curSkill;
    if (cur.trainedSkills.filter((obj) => obj.origin === origin).length) {
        curSkill = cur.trainedSkills.filter((obj) => obj.origin === origin)[index].skill;
    } else {
        curSkill = "Free Choice";
    }
    return (
        <select
            value={curSkill}
            onChange={(ev) => {
                ev.preventDefault();
                const tempObjs = cur.trainedSkills.filter((obj) => obj.origin === origin);
                tempObjs[index] = _.set(tempObjs[index], "skill", ev.target.value);
                setCur({
                    ...cur,
                    trainedSkills: [
                        ...cur.trainedSkills.filter((obj) => obj.origin !== origin),
                        ...tempObjs
                    ]
                });
            }}
        >
            {modObj.selection === "any" ?
                <>
                    <option value="Free Choice">(none)</option>
                    {skillsList.map((skillName) => (
                        <option value={skillName} key={skillName}>{skillName}</option>
                    ))}
                </> :
                (modObj.selection ?? []).length > 1 ?
                    <>
                        <option value="Free Choice">(none)</option>
                        {modObj.selection.map((skillName) => (
                            <option value={skillName} key={skillName}>{skillName}</option>
                        ))}
                    </> :
                    <option value={modObj.selection ? modObj.selection[0] : "error"}>{modObj.selection ? modObj.selection[0] : "error"}</option>
            }
        </select>
    );
}

export default TrainingPicker;