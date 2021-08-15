import React, { useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';

import fb from '../../fbConfig';
import { CharSheetStyling } from '../../styling/StyleBank';
import useChar from '../../hooks/CreatureStore';

const CharSheetShell = () => {
    const { slug } = useParams();
    const cur = useChar((state) => state.cur);
    const setCur = useChar((state) => state.setCur);
    const loadingChar = useChar((state) => state.loadingChar);
    const setLoadingChar = useChar((state) => state.setLoadingChar);
    db = fb.db;
    const onceOnly = useRef(true);
    useEffect(() => {
        if (onceOnly.current) {
            setLoadingChar(true);
            onceOnly.current = false;
        }

        const unsubscribe = db.collection("creatures").doc(slug)
            .onSnapshot((doc) => {
                setCur(doc.data());
            }).then(() => {
                setLoadingChar(false);
            }).catch((err) => {
                console.log("Error:", err);
            });
        
        return(() => {
            unsubscribe();
        });
    }, [])

    return (
        <CharSheetStyling>

        </CharSheetStyling>
    );
}

export default CharSheetShell;