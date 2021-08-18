import React, { useState, useEffect, useRef } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import _ from 'lodash';

import fb from '../../fbConfig';
import { SpecialBlock } from '../../styling/StyleBank';

const Kits = () => {
    const [kitsLib, setKitsLib] = useState(null);
    const [allText, setAllText] = useState(null);
    const quill = useRef(null);
    const db = fb.db;
    useEffect(() => {
        const unsubscribe = db.collection("kits").onSnapshot((querySnapshot) => {
            const tempLib = {};
            querySnapshot.forEach((doc) => {
                tempLib[doc.id] = doc.data();
            });
            setKitsLib(tempLib);
        });
        return (() => unsubscribe());
    }, [db]);

    useEffect(() => {
        if (kitsLib) {
            setAllText(
                _.flatten(Object.keys(kitsLib).sort((a, b) => (kitsLib[a].name - kitsLib[b].name))
                    .map((slug) => {
                        return JSON.parse(kitsLib[slug].delta).ops;
                    })
                )
            );
        }
    }, [kitsLib]);

    useEffect(() => {
        // console.log(quill.current.getEditor());
        console.log(allText);
        if (quill.current && allText) {
            quill.current.getEditor().setContents(allText);
        }
    }, [allText]);

    return(
        <SpecialBlock>
            <ReactQuill
                readOnly={true}
                ref={quill}
            />
        </SpecialBlock>
    );
}
export default Kits;