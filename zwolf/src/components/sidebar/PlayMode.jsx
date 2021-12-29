import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import SimpleBarReact from 'simplebar-react';
import { useForm } from 'react-hook-form';

import fb from '../../fbConfig';
import useChar from '../../hooks/CreatureStore';
import useDice from '../../hooks/DiceStore';
import BufferDot from '../ui/BufferDot';

const PlayMode = () => {
    const cur = useChar((state) => state.cur);
    const setCur = useChar((state) => state.setCur);
    const dieMode = useDice((state) => state.mode);
    const setMode = useDice((state) => state.setMode);
    const setCoast = useDice((state) => state.setCoast);
    const toggleCoast = useDice((state) => state.toggleCoast);
    const rollHistory = useDice((state) => state.rollHistory);
    const [charLib, setCharLib] = useState({});
    const selectRef = useRef(null);
    const { register, handleSubmit, reset } = useForm();

    useEffect(() => {
        setCoast(false);
    }, []);
    useEffect(() => {
        selectRef.current.value = dieMode;
    }, [dieMode]);

    const db = fb.db;
    useEffect(() => {
        const unsubscribe = db.collection("creatures").onSnapshot((querySnapshot) => {
            const tempLib = {};
            querySnapshot.forEach((doc) => {
                tempLib[doc.id] = doc.data();
            });
            setCharLib(tempLib);
        });
        return (() => unsubscribe());
    }, [db]);

    const newRelation = (formData) => {
        if (cur) {
            setCur({
                ...cur,
                relatedSlugs: [
                    ...cur.relatedSlugs,
                    formData.character
                ]
            });
        }
        reset();
    }

    return(
        <div className="sidePane playMode">
            <h2>Play Mode for Z-Wolf</h2>
            <div className="otherStuff">
                {cur && <div>
                    <strong>Related characters:</strong>
                    <span> </span>
                    {cur.relatedSlugs.map((otherSlug) => {
                        <span key={otherSlug}>
                            <Link to={`/bestiary/${otherSlug}`}>
                                {charLib && charLib[otherSlug] ? charLib[otherSlug].name : otherSlug}
                            </Link>
                            <BufferDot />
                        </span>
                    })}
                </div>}
                <form onSubmit={handleSubmit(newRelation)}>
                    <select {...register("character")}>
                        <option value="null">(none)</option>
                        {cur && charLib && Object.keys(charLib).filter((otherSlug) => (charLib[otherSlug].campaign === cur.campaign) && (otherSlug !== cur.slug))
                            .map((otherSlug) => (
                                <option key={otherSlug} value={otherSlug}>{charLib[otherSlug].name}</option>
                            ))}
                    </select>
                    <button type="submit">Add</button>
                </form>
            </div>
            <section className="rollsBox">
                <div className="rollOptionsTab">
                    <select onChange={(ev) => setMode(ev.target.value)} ref={selectRef}>
                        <option value="Normal">Normal</option>
                        <option value="Boost">Boosted</option>
                        <option value="Drag">Dragged</option>
                        <option value="BoostAndDrag">Boosted &amp; Dragged</option>
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
                                <span>
                                    {rollObj.sides === "usual" ?
                                        rollObj.natRolls.map((oneRoll, j) => (
                                            <span key={j} className="dodecShadow">{oneRoll}</span>
                                        )) :
                                        <span className="oneDie">{rollObj.keyNat}</span>
                                    }
                                </span>
                                <span className="textExplanation">
                                    {rollObj.character} rolls {rollObj.text}: 
                                </span>
                                <span className="dodecShadow">{rollObj.result}</span>
                            </div>
                        ))}
                    </SimpleBarReact>
                </div>
            </section>
        </div>
    );
}

export default PlayMode;