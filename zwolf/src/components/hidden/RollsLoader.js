import { useState, useEffect } from 'react';

import fb from '../../fbConfig';
import useDice from '../../hooks/DiceStore';
import useUser from '../../hooks/UserStore';

const RollsLoader = () => {
    const uid = useUser((state) => state.uid);
    const profile = useUser((state) => state.profileObj);
    const setProfile = useUser((state) => state.setProfileObj);
    const addRemoteRoll = useDice((state) => state.addRemoteRoll);
    const [relevantCampaigns, setRelevantCampaigns] = useState({});

    const db = fb.db;
    const saveShownTo = async (rollId, data, uid) => {
        try {
            await db.collection("rolls").doc(rollId).set({
                ...data,
                shownTo: [
                    ...data.shownTo,
                    uid
                ]
            });
        } catch(err) {
            console.log("Error while saving new ShownTo to roll:", rollId, err);
        }
    }
    useEffect(() => {
        if (uid) {
            const unsubscribe = db.collection("campaigns").onSnapshot((querySnapshot) => {
                const tempLib = {};
                querySnapshot.forEach((doc) => {
                    if (doc.data().owner === uid ||
                        (profile.passcodes &&
                            (profile.passcodes.includes(doc.data().pcCode) || profile.passcodes.includes(doc.data().npcCode))
                        )) {
                            tempLib[doc.id] = doc.data();
                        }
                });
                setRelevantCampaigns(tempLib);
            });
            return (() => unsubscribe());
        } else if (typeof window !== "undefined") {
            const passcodes = JSON.parse(window.localStorage.getItem("zwolfGuestCodes"));
            const unsubscribe = db.collection("campaigns").onSnapshot((querySnapshot) => {
                const tempLib = {};
                querySnapshot.forEach((doc) => {
                    if (passcodes && (passcodes.includes(doc.data().pcCode) ||
                        passcodes.includes(doc.data().npcCode))) {
                            tempLib[doc.id] = doc.data();
                        }
                });
                setRelevantCampaigns(tempLib);
            });
            return (() => unsubscribe());
        }
    }, [db, profile, uid]);
    useEffect(() => {
        const unsubscribe = db.collection("rolls").onSnapshot((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                const d = doc.data();
                if (
                    d.time > profile.lastRollView &&
                    Object.keys(relevantCampaigns).includes(d.campaign) &&
                    !d.shownTo.includes(uid)
                ) {
                    if (uid) {
                        saveShownTo(doc.id, d, uid);
                    }
                    addRemoteRoll(d);
                }
            });
            setProfile({
                ...profile,
                lastRollView: Date.now()
            });
        });
        return (() => unsubscribe());
    }, [db, relevantCampaigns, uid]);

    return null;
}

export default RollsLoader;