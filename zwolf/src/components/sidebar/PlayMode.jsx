import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import SimpleBarReact from 'simplebar-react';
import { useForm } from 'react-hook-form';
import ReactTooltip from 'react-tooltip';

import fb from '../../fbConfig';
import useChar from '../../hooks/CreatureStore';
import useDice from '../../hooks/DiceStore';
import BufferDot from '../ui/BufferDot';
import RollsLoader from '../hidden/RollsLoader';

const PlayMode = () => {
    const cur = useChar((state) => state.cur);
    const setCur = useChar((state) => state.setCur);
    const dieMode = useDice((state) => state.mode);
    const setMode = useDice((state) => state.setMode);
    const coasting = useDice((state) => state.coasting);
    // const setCoast = useDice((state) => state.setCoast);
    const toggleCoast = useDice((state) => state.toggleCoast);
    const rollHistory = useDice((state) => state.rollHistory);
    const [charLib, setCharLib] = useState({});
    const selectRef = useRef(null);
    const checkRef = useRef(null);
    const { register, handleSubmit, reset } = useForm();

    useEffect(() => {
        checkRef.current.checked = coasting;
    }, [rollHistory]);
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
        if (cur && formData.character !== "null") {
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
            <RollsLoader />
            <div>
                <h2>Play Mode for Z-Wolf</h2>
                {cur && <h4>{cur.name}</h4>}
            </div>
            <div className="otherStuff">
                {cur && <div>
                    <strong>Related characters:</strong>
                    <span> </span>
                    {cur.relatedSlugs.map((otherSlug) => (
                        <span key={otherSlug}>
                            <Link to={`/bestiary/${otherSlug}`}>
                                {charLib && charLib[otherSlug] ? charLib[otherSlug].name : otherSlug}
                            </Link>
                            <BufferDot />
                        </span>
                    ))}
                </div>}
                <form onSubmit={handleSubmit(newRelation)}>
                    <select {...register("character")}>
                        <option value="null">(none)</option>
                        {cur && charLib && Object.keys(charLib).filter((otherSlug) => (charLib[otherSlug].campaign === cur.campaign) &&
                            (otherSlug !== cur.slug) && (!cur.relatedSlugs.includes(otherSlug))).map((otherSlug) => (
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
                        <input type="checkbox" onChange={() => toggleCoast()} ref={checkRef} />
                        <label>Coasting?</label>
                    </div>
                </div>
                <div className="rollsBoxInner">
                    <h3>Dice Rolls and Such</h3>
                    <SimpleBarReact style={{ width: '100%', height: 'calc(100% - 20px - 2rem)', paddingRight: '30px' }}>
                        {rollHistory.map((rollObj, i) => (
                            <div key={i} className="oneRoll">
                                <span>
                                    {rollObj.sides === "usual" ?
                                        rollObj.natRolls.map((oneRoll, j) => (
                                            <span key={j}
                                                className={`dodecShadow
                                                    ${(oneRoll === rollObj.keyNat) && (!rollObj.coast || rollObj.keyNat >= rollObj.coast) ?
                                                "glow" : ""}`}
                                            >
                                                {oneRoll}
                                            </span>
                                        )) :
                                        <span className="oneDie">{rollObj.keyNat}</span>
                                    }
                                </span>
                                <span className="textExplanation">
                                    {rollObj.character} {rollObj.coast ? "coasts" : "rolls"} {rollObj.text}: {
                                        rollObj.extraInfo ? `(${rollObj.extraInfo})` : ""
                                    }
                                </span>
                                <>
                                    <span className="dodecShadow" data-tip data-for={`rollExplanation_${i}`}>{rollObj.result}</span>
                                    {rollObj.tooltips.length > 0 && <ReactTooltip id={`rollExplanation_${i}`} place="left">
                                        {rollObj.tooltips.map((tip, j) => (
                                            <p key={j}>{tip}</p>
                                        ))}
                                    </ReactTooltip>}
                                </>
                            </div>
                        ))}
                    </SimpleBarReact>
                </div>
            </section>
        </div>
    );
}

export default PlayMode;