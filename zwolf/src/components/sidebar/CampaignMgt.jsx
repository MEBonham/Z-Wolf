import React, { useState, useEffect, useRef } from 'react';
import { useForm } from 'react-hook-form';
import { nanoid } from 'nanoid'

import fb from '../../fbConfig';
import useUser from '../../hooks/UserStore';
import useSidebar from '../../hooks/SidebarStore';

const CampaignMgt = () => {
    const uid = useUser((state) => state.uid);
    const sideModeSwap = useSidebar((state) => state.modeSwap);
    const [cmpLib, setCmpLib] = useState({});
    const [tip, setTip] = useState(
        <p>To create a Character, first create a Campaign. (Or apply to create a character in your GM's campaign.)</p>
    );
    const [selection, setSelection] = useState("null");
    const { register, handleSubmit, reset } = useForm();
    const onlyOnce = useRef(true);

    const db = fb.db;
    useEffect(() => {
        const unsubscribe = db.collection("campaigns").onSnapshot((querySnapshot) => {
            const tempLib = {};
            querySnapshot.forEach((doc) => {
                tempLib[doc.id] = doc.data();
            });
            setCmpLib(tempLib);
        });
        return (() => unsubscribe());
    }, [db, uid]);

    useEffect(() => {
        if (Object.keys(cmpLib).length && onlyOnce.current) {
            onlyOnce.current = false;
            setTip(<p>To temporarily disable (or re-enable) access to Campaigns, go to
                <span> </span>
                <span onClick={() => sideModeSwap("acctMgt")} className="clickable">Manage User Account</span>.
            </p>);
        }
    }, [cmpLib]);

    const saveCmp = async (formData) => {
        if (uid && selection !== "null") {
            const cmpId = selection === "new" ? nanoid() : selection;
            try {
                await db.collection("campaigns").doc(cmpId).set({
                    name: formData.name,
                    pcCode: formData.pcCode,
                    npcCode: formData.npcCode,
                    owner: uid
                });
            } catch(err) {
                console.log("Error while saving Campaign:", cmpId, err);
            }
        }
        reset();
    }

    return(
        <div className="sidePane cmpMgt">
            <h2>Campaign Management</h2>
            {tip}
            <select onChange={(ev) => setSelection(ev.target.value)}>
                <option value="null">(Select Campaign)</option>
                {Object.keys(cmpLib).filter((cmpId) => cmpLib[cmpId].owner === uid)
                    .map((cmpId) => (
                        <option key={cmpId} value={cmpId}>{cmpLib[cmpId].name}</option>
                    ))}
                <option value="new">New Campaign</option>
            </select>
            <form
                onSubmit={handleSubmit(saveCmp)}
                style={{ display: selection === "null" ? "none" : "block" }}
            >
                <input type="text" placeholder="Campaign Name" {...register("name", { required: true })} />
                <input type="text" placeholder="PC Passcode" {...register("pcCode", { required: true })} />
                <input type="text" placeholder="PC &amp; NPC Passcode" {...register("npcCode", { required: true })} />
                <button type="submit">{selection === "new" ? "Create" : "Update"}</button>
            </form>
        </div>
    );
}

export default CampaignMgt;