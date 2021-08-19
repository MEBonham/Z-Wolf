import React, { useState, useEffect, useRef } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import _ from 'lodash';

import fb from '../../fbConfig';
import checked from '../../media/ui/checked-box.png';
import unchecked from '../../media/ui/empty-checkbox.png';
import { SpecialBlock } from '../../styling/StyleBank';
import { kitTags } from '../../helpers/GameConstants';

const Kits = () => {
    const [kitsLib, setKitsLib] = useState(null);
    const [allText, setAllText] = useState(null);
    const [coreChecked, setCoreChecked] = useState(true);
    const [monstChecked, setMonstChecked] = useState(false);
    const [tagFilter, setTagFilter] = useState(null);
    const [filteredSlugs, setFilteredSlugs] = useState(null);
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
            setFilteredSlugs(
                Object.keys(kitsLib).filter((slug) => (!coreChecked) || (kitsLib[slug].tags.includes("Core")))
                    .filter((slug) => (monstChecked) || (!kitsLib[slug].tags.includes("Monster")))
                    .filter((slug) => (!tagFilter) || (tagFilter === "Select Tag") || (kitsLib[slug].tags.includes(tagFilter)))
            );
        }
    }, [coreChecked, kitsLib, monstChecked, tagFilter]);

    useEffect(() => {
        if (kitsLib && filteredSlugs) {
            setAllText(
                _.flatten(filteredSlugs.sort((a, b) => (kitsLib[a].name - kitsLib[b].name))
                    .map((slug) => {
                        const rawDelta = JSON.parse(kitsLib[slug].delta).ops;
                        const tagString = kitsLib[slug].tags.length ?
                            `[${kitsLib[slug].tags.join("] [")}] Kit` :
                            "Kit";
                        return([
                            ...rawDelta.slice(0, 2),
                            {
                                insert: tagString
                            },
                            {
                                attributes: { header: 4 },
                                insert: "\n"
                            },
                            ...rawDelta.slice(2)
                        ]);
                    })
                )
            );
        } else {
            setAllText(<h1>(Loading ...)</h1>);
        }
    }, [kitsLib, filteredSlugs]);

    useEffect(() => {
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
            <div className="filterBox">
                <div>
                    <img
                        src={coreChecked ? checked : unchecked}
                        alt="checkbox"
                        className="clickable"
                        onClick={(ev) => setCoreChecked(!coreChecked)}
                    />
                    <span> </span>
                    Core-only
                </div>
                <div className={coreChecked ? "disabled" : ""}>
                    <img
                        src={monstChecked ? checked : unchecked}
                        alt="checkbox"
                        className="clickable"
                        onClick={(ev) => {
                            if (!coreChecked) {
                                setMonstChecked(!monstChecked)
                            }
                        }}
                    />
                    <span> </span>
                    include [Monster]
                </div>
                <div>
                    <select onChange={(ev) => { ev.preventDefault(); setTagFilter(ev.target.value); }}>
                        <option value={null}>Select Tag</option>
                        {kitTags.filter((tag) => tag !== "Core" && tag !== "Monster").map((tag) => (
                            <option value={tag} key={tag}>{tag}</option>
                        ))}
                    </select>
                </div>
            </div>
        </SpecialBlock>
    );
}
export default Kits;