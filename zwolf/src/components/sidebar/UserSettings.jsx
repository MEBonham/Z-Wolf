import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';

import fb from '../../fbConfig';
import useUser from '../../hooks/UserStore';

const UserSettings = () => {
    const uid = useUser((state) => state.uid);
    const displayName = useUser((state) => state.displayName);
    const profile = useUser((state) => state.profileObj);
    const setProfile = useUser((state) => state.setProfileObj);
    const [cmpLib, setCmpLib] = useState({});
    const { register, handleSubmit, reset } = useForm();

    const logout = async () => {
        await fb.auth.signOut();
    }

    useEffect(() => {
        if (!uid && !window.localStorage.getItem("zwolfGuestCodes")) {
            window.localStorage.setItem("zwolfGuestCodes", JSON.stringify(["examples"]));
        }
    }, []);

    const db = fb.db;
    useEffect(() => {
        if (uid && profile && profile.passcodes) {
            saveProfile(uid);
        }
    }, [profile, uid]);
    const saveProfile = async (uid) => {
        try {
            await db.collection("profiles").doc(uid).set({
                ...profile
            });
        } catch(err) {
            console.log("Error while saving User Profile:", err);
        }
    }

    useEffect(() => {
        const unsubscribe = db.collection("campaigns").onSnapshot((querySnapshot) => {
            const tempLib = {};
            querySnapshot.forEach((doc) => {
                if (doc.data().owner === uid || (profile.passcodes && (profile.passcodes.includes(doc.data().pcCode) ||
                    profile.passcodes.includes(doc.data().npcCode)))) {
                        tempLib[doc.id] = doc.data();
                    }
            });
            setCmpLib(tempLib);
        });
        return (() => unsubscribe());
    }, [db, profile, uid]);

    const addCode = (formData) => {
        if (uid) {
            setProfile({
                ...profile,
                passcodes: [
                    ...profile.passcodes,
                    formData.code
                ]
            });
        } else if (typeof window !== "undefined") {
            const prevCodes = JSON.parse(window.localStorage.getItem("zwolfGuestCodes"));
            window.localStorage.setItem("zwolfGuestCodes", JSON.stringify([
                ...prevCodes,
                formData.code
            ]));
        }
        reset();
    }

    const enable = (id) => {
        setProfile({
            ...profile,
            disabledCampaigns: [
                ...profile.disabledCampaigns.filter((cmpId) => cmpId !== id)
            ]
        });
    }
    const disable = (id) => {
        setProfile({
            ...profile,
            disabledCampaigns: [
                ...profile.disabledCampaigns,
                id
            ]
        });
    }

    return(
        <div className="userSettings">
            <header>
                <h2>Settings ({uid ? displayName : "Guest"})</h2>
                {uid && <button onClick={logout}>Logout</button>}
                {!uid || !profile || (profile.rank === "peasant") ? null : <p>Moderation: {profile.rank}</p>}
            </header>
            <div className="hRule" />
            <section>
                <h3>Passcodes</h3>
                <form onSubmit={handleSubmit(addCode)}>
                    <button type="submit">Add Passcode:</button>
                    <input type="text" {...register("code", { required: true })} />
                </form>
            </section>
            <div className="hRule" />
            {uid && Object.keys(cmpLib).length > 0 && <section>
                <h3>Toggle Campaign Displays</h3>
                <ul>
                    {Object.keys(cmpLib).filter((cmpId) => !profile.disabledCampaigns.includes(cmpId))
                        .map((cmpId) => (
                            <li onClick={() => disable(cmpId)} className="enabled clickable" key={cmpId}>{cmpLib[cmpId].name}</li>
                        ))}
                    {Object.keys(cmpLib).filter((cmpId) => profile.disabledCampaigns.includes(cmpId))
                        .map((cmpId) => (
                            <li onClick={() => enable(cmpId)} className="disabled clickable" key={cmpId}>{cmpLib[cmpId].name}</li>
                        ))}
                </ul>
            </section>}
        </div>
    );
}

export default UserSettings;