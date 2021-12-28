import React, { useEffect, useRef } from 'react';
import SimpleBarReact from 'simplebar-react';

import useDice from '../../hooks/DiceStore';

const PlayMode = () => {
    const dieMode = useDice((state) => state.mode);
    const setMode = useDice((state) => state.setMode);
    const setCoast = useDice((state) => state.setCoast);
    const toggleCoast = useDice((state) => state.toggleCoast);
    const rollHistory = useDice((state) => state.rollHistory);
    const selectRef = useRef(null);

    useEffect(() => {
        setCoast(false);
    }, []);
    useEffect(() => {
        selectRef.current.value = dieMode;
    }, [dieMode]);

    return(
        <div className="sidePane playMode">
            <h2>Play Mode for Z-Wolf</h2>
            <div className="otherStuff">

            </div>
            <section className="rollsBox">
                <div className="rollOptionsTab">
                    <select onChange={(ev) => setMode(ev.target.value)} ref={selectRef}>
                        <option value="Normal">Normal</option>
                        <option value="Boost">Boosted</option>
                        <option value="Drag">Dragged</option>
                        <option value="BoostAndDrag">Boosted & Dragged</option>
                    </select>
                    <div>
                        <input type="checkbox" onChange={() => toggleCoast()} />
                        <label>Coasting?</label>
                    </div>
                </div>
                <div className="rollsBoxInner">
                    <h3>Dice Rolls</h3>
                    <SimpleBarReact style={{ width: '100%', height: 'calc(100% - 20px - 2rem)', paddingRight: '30px' }}>
                        {rollHistory.map((rollObj, i) => (
                            <div key={i} className="oneRoll">
                                {rollObj.sides === "usual" ?
                                    rollObj.natRolls.map((oneRoll, j) => (
                                        <span key={j} className="dodecShadow">{oneRoll}</span>
                                    )) :
                                    <span className="oneDie">{rollObj.keyNat}</span>
                                }
                            </div>
                        ))}
                    </SimpleBarReact>
                </div>
            </section>
        </div>
    );
}

export default PlayMode;