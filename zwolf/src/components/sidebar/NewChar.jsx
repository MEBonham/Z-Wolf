import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';

import fb from '../../fbConfig';
import useUser from '../../hooks/UserStore';
import { charFrame } from '../../helpers/GameConstants';
import { calcStats } from '../../helpers/CalcStats';

const NewChar = () => {
    const uid = useUser((state) => state.uid);
    const profileObj = useUser((state) => state.profileObj);
    const [campaignOpts, setCampaignOpts] = useState({});
    const [slugsLib, setSlugsLib] = useState([]);
    const { register, handleSubmit, reset } = useForm();

    const db = fb.db;
    useEffect(() => {
        const unsubscribe = db.collection("campaigns").onSnapshot((querySnapshot) => {
            const tempLib = {};
            querySnapshot.forEach((doc) => {
                if (
                    doc.data().owner === uid ||
                    profileObj.participations.includes(doc.id)
                ) {
                    tempLib[doc.id] = doc.data();
                }
            });
            setCampaignOpts(tempLib);
        });
        return (() => unsubscribe());
    }, [db, profileObj, uid]);
    useEffect(() => {
        const unsubscribe = db.collection("creatures").onSnapshot((querySnapshot) => {
            const tempLib = [];
            querySnapshot.forEach((doc) => {
                tempLib.push(doc.id);
            });
            setSlugsLib(tempLib);
        });
        return (() => unsubscribe());
    }, [db]);

    const saveNewChar = async (formData) => {
        const encodedSlug = encodeURIComponent(formData.slug.split(" ").join("").toLowerCase());
        if (slugsLib.includes(encodedSlug)) {
            if (typeof window !== "undefined") {
                window.alert(`URL-Ending "${encodedSlug}" already in use. Choose another URL-Ending.`);
            }
        } else if (formData.campaign === "null") {
            if (typeof window !== "undefined") {
                window.alert(`The character must be created within a Campaign.`);
            }
        } else if (["null"].includes(encodedSlug)) {
            if (typeof window !== "undefined") {
                window.alert(`URL-Ending "${encodedSlug}" reserved. Choose another URL-Ending.`);
            }
        } else {
            try {
                await db.collection("creatures").doc(encodedSlug).set({
                    ...charFrame,
                    stats: calcStats(charFrame),
                    campaign: formData.campaign,
                    name: formData.name,
                    pc: formData.pc,
                    pcPasscode: formData.pcCode
                });
            } catch (err) {
                console.log("Error:", err);
                db.collection("errors").doc(Date.now()).set({
                    origin: "Create new character",
                    ...err
                });
            }
            reset();
        }
    }

    return(
        <div className="sidePane">
            <h2>Create New Character</h2>
            <form className="newChar" onSubmit={handleSubmit(saveNewChar)}>
                <div>
                    <label>Campaign:</label>
                    <select {...register("campaign")}>
                        <option value="null">(none)</option>
                        {Object.keys(campaignOpts).map((cmpId) => (
                            <option key={cmpId} value={cmpId}>{campaignOpts[cmpId].name}</option>
                        ))}
                    </select>
                </div>
                <p>URL-Ending is the browser's identification for the character. It should be unique, relatively short, and avoid special characters.</p>
                <input type="text" placeholder="URL-Ending" {...register("slug", { required: true })} className="stretch" />
                <input type="text" placeholder="Character Name" {...register("name", { required: true })} className="stretch" />
                <div className="checks">
                    <span>
                        <input type="checkbox" {...register("pc")} />
                        <label>PC?</label>
                    </span>
                    <span>
                        <input type="checkbox" {...register("pcCode")} />
                        <label>PC Passcode Access?</label>
                    </span>
                </div>
                <button type="submit">Create</button>
            </form>
        </div>
    );
}

export default NewChar;