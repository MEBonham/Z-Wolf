import React, { useState, useEffect } from 'react';
import _ from 'lodash';

import useChar from '../../hooks/CreatureStore';
import checked from '../../media/ui/checked-box.png';
import unchecked from '../../media/ui/empty-checkbox.png';
import BufferDot from '../ui/BufferDot';

const ArchetypeChecklist = () => {
    const cur = useChar((state) => state.cur);
    const setCur = useChar((state) => state.setCur);
    const archeEdit = useChar((state) => state.archeEdit);
    const setArcheEdit = useChar((state) => state.setArcheEdit);
    const [archeStr, setArcheStr] = useState([]);

    useEffect(() => {
        if (archeEdit) {
            let deltaStr = _.get(cur.kits.filter((obj) => obj.id === archeEdit)[0], "delta", "");
            if (deltaStr.includes(`{"insert":"Archetypes:"},`)) {
                deltaStr = deltaStr.split(`{"insert":"Archetypes:"},`)[1];
                let prevStart = 0;
                let depth = 0;
                let indexOdd = false;
                let tempArr = [];
                const orMarkers = [];
                for (let i = 0; i < deltaStr.length; i++) {
                    if (deltaStr[i] === "{") {
                        depth += 1;
                        if (depth === 1) {
                            prevStart = i;
                        }
                    } else if (deltaStr[i] === "}") {
                        depth -= 1;
                        if (depth === 0) {
                            const fragment = JSON.parse(deltaStr.slice(prevStart, i + 1));
                            const orTag = {
                                attributes: {
                                    bold: true
                                },
                                insert: "or"
                            };
                            if (_.isEqual(fragment, orTag)) {
                                tempArr.push(fragment);
                                orMarkers.push(i);
                            } else if (indexOdd) {
                                tempArr.push(fragment);
                            }
                            indexOdd = !indexOdd;
                        }
                    }
                }
                setArcheStr(tempArr.map((obj) => obj.insert).join("$$").replaceAll("$$or$$", " or ").split("$$"));
            } else {
                setArcheStr([]);
            }
        } else {
            setArcheStr([]);
        }
    }, [archeEdit, cur]);

    if (!archeEdit) return null;
    return (
        <div className="checklist">
            <h4>
                Archetypes Attained
                <BufferDot />
                <span
                    className="clickable"
                    onClick={() => setArcheEdit(null)}
                >
                    Close
                </span>
            </h4>
            {archeStr.map((reqs, i) => {
                const tempMod = cur.mods.filter(
                    (modObj) => (modObj.origin === archeEdit && modObj.target === "kpMax" && modObj.archeNum === i)
                )[0];
                return(
                    <div key={reqs}>
                        <img
                            src={tempMod ? checked : unchecked}
                            alt="checkbox"
                            className="clickable"
                            onClick={(ev) => {
                                let tempBlock = {};
                                if (tempMod) {          // Un-checking Archetype
                                    tempBlock = {
                                        ...cur,
                                        mods: [
                                            ...cur.mods.filter(
                                                (modObj) => (modObj.origin !== archeEdit ||
                                                    modObj.target !== "kpMax" ||
                                                    modObj.archeNum !== i)
                                            )
                                        ]
                                    }
                                } else {                // Checking Archetype
                                    tempBlock = {
                                        ...cur,
                                        mods: [
                                            ...cur.mods,
                                            {
                                                choices: {},
                                                level: _.get(cur.kits.filter((obj) => obj.id === archeEdit)[0], "level", -1),
                                                mag: 1,
                                                origin: archeEdit,
                                                overlap: Math.random(),
                                                target: "kpMax",
                                                type: "Untyped",
                                                archeNum: i
                                            }
                                        ]
                                    }
                                }
                                setCur(tempBlock);
                            }}
                        />
                        <span>{reqs}</span>
                    </div>
                );
            })}
        </div>
    );
}

export default ArchetypeChecklist;