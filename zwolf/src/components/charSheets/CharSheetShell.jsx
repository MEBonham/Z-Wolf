import React, { useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';

import fb from '../../fbConfig';
import { CharSheetStyling } from '../../styling/StyleBank';
import useChar from '../../hooks/CreatureStore';

import Pool from './Pool';

const CharSheetShell = () => {
    const { slug } = useParams();
    const cur = useChar((state) => state.cur);
    const setCur = useChar((state) => state.setCur);
    const loadingChar = useChar((state) => state.loadingChar);
    const setLoadingChar = useChar((state) => state.setLoadingChar);
    const db = fb.db;
    const onceOnly = useRef(true);
    useEffect(() => {
        if (onceOnly.current) {
            setLoadingChar(true);
            onceOnly.current = false;
        }

        const unsubscribe = db.collection("creatures").doc(slug)
            .onSnapshot((snapshot) => {
                setCur(snapshot.data());
                setLoadingChar(false);
                console.log(cur);
            });
        
        return(() => {
            unsubscribe();
        });
    }, [])

    return (
        <CharSheetStyling>
            {(loadingChar || !cur) ?
                <h1>(Loading ...)</h1> :
                <>
                    <header>
                        <div className="headerStats">
                            <header>
                                <h1>{cur.name}</h1>
                                <h2>Level {cur.level} {cur.epithet}</h2>
                            </header>
                            <div className="pools">
                                <Pool type="vp" color="green" spellOut="Vitality" />
                                <Pool type="sp" color="red" spellOut="Stamina" />
                                <Pool type="kp" color="blue" spellOut="Karma" />
                            </div>
                        </div>
                        <div className="portrait">
                            (for image)
                        </div>
                    </header>
                </>
            }
        </CharSheetStyling>
    );
}

export default CharSheetShell;