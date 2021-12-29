import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';

import fb from '../../fbConfig';
import useUser from '../../hooks/UserStore';

const NewChar = () => {
    const uid = useUser((state) => state.uid);
    const profileObj = useUser((state) => state.profileObj);
    const [campaignOpts, setCampaignOpts] = useState({});
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

    return(
        <form className="newChar">
            <div>
                <label>Campaign:</label>
                <select {...register("campaign")}>
                    <option value="null">(none)</option>
                    {Object.keys(campaignOpts).map((cmpId) => (
                        <option key={cmpId} value={cmpId}>{campaignOpts[cmpId].name}</option>
                    ))}
                </select>
            </div>
        </form>
    );
}

export default NewChar;