import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import fb from '../../fbConfig';
import useUser from '../../hooks/UserStore';
import BufferDot from '../ui/BufferDot';

const BestiaryMenu = () => {
    const uid = useUser((state) => state.uid);
    const profile = useUser((state) => state.profileObj);
    const [relevantCampaigns, setRelevantCampaigns] = useState({});
    const [relevantCreatures, setRelevantCreatures] = useState([]);

    const db = fb.db;
    useEffect(() => {
        if (uid) {
            const unsubscribe = db.collection("campaigns").onSnapshot((querySnapshot) => {
                const tempLib = {};
                querySnapshot.forEach((doc) => {
                    if (!profile.disabledCampaigns.includes(doc.id) && (doc.data().owner === uid ||
                        (profile.passcodes &&
                            (profile.passcodes.includes(doc.data().pcCode) || profile.passcodes.includes(doc.data().npcCode))
                        ))) {
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
        const unsubscribe = db.collection("creatures").onSnapshot((querySnapshot) => {
            const tempLib = [];
            querySnapshot.forEach((doc) => {
                if (Object.keys(relevantCampaigns).includes(doc.data().campaign)) {
                    tempLib.push({
                        ...doc.data(),
                        id: doc.id
                    });
                }
            });
            setRelevantCreatures(tempLib);
        });
        return (() => unsubscribe());
    }, [db, profile, relevantCampaigns, uid]);

    return(
        <>
            <h1>Bestiary/Character Menu</h1>
            <nav className="bestiary">
                {Object.keys(relevantCampaigns).map((cmpId) => {
                    const creatures = relevantCreatures.filter((charObj) => charObj.campaign === cmpId &&
                        (charObj.pcPasscode || cmpId === uid || profile.passcodes.includes(doc.data().npcCode))
                    );
                    if (creatures.length > 0) {
                        creatures.sort((a, b) => a.name - b.name);
                        return(
                            <section key={cmpId}>
                                <h2>{relevantCampaigns[cmpId].name}</h2>
                                <BufferDot />
                                {creatures.map((charObj) => (
                                    <span key={charObj.id}>
                                        <Link to={`/bestiary/${charObj.id}`}>{charObj.name}</Link> <BufferDot />
                                    </span>
                                ))}
                            </section>
                        );
                    } else {
                        return null;
                    }
                })}
            </nav>
        </>
    );
}

export default BestiaryMenu;