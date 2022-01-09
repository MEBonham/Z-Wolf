import React, { useState, useEffect, useRef } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import _ from 'lodash';

import fb from '../../fbConfig';
import checked from '../../media/ui/checked-box.png';
import unchecked from '../../media/ui/empty-checkbox.png';
import { SpecialBlock } from '../../styling/StyleBank';
import { featTags } from '../../helpers/GameConstants';

const Feats = () => {
    const [featsLib, setFeatsLib] = useState(null);
    const [allText, setAllText] = useState(null);
    const [coreChecked, setCoreChecked] = useState(true);
    const [monstChecked, setMonstChecked] = useState(false);
    const [tagFilter, setTagFilter] = useState(null);
    const [filteredSlugs, setFilteredSlugs] = useState(null);
    const quill = useRef(null);
    const db = fb.db;
    useEffect(() => {
        const unsubscribe = db.collection("feats").onSnapshot((querySnapshot) => {
            const tempLib = {};
            querySnapshot.forEach((doc) => {
                tempLib[doc.id] = doc.data();
            });
            setFeatsLib(tempLib);
        });
        return (() => unsubscribe());
    }, [db]);

    useEffect(() => {
        if (featsLib) {
            setFilteredSlugs(
                Object.keys(featsLib).filter((slug) => (!coreChecked) || (featsLib[slug].tags.includes("Core")))
                    .filter((slug) => (monstChecked) || (!featsLib[slug].tags.includes("Monster")))
                    .filter((slug) => (!tagFilter) || (tagFilter === "Select Tag") || (featsLib[slug].tags.includes(tagFilter)))
            );
        }
    }, [coreChecked, featsLib, monstChecked, tagFilter]);

    useEffect(() => {
        if (featsLib && filteredSlugs) {
            setAllText(
                _.flatten(filteredSlugs.sort((a, b) => (featsLib[a].name - featsLib[b].name))
                    .map((slug) => {
                        const rawDelta = JSON.parse(featsLib[slug].delta).ops;
                        const tagString = featsLib[slug].tags.length ?
                            `[${featsLib[slug].tags.join("] [")}] Feat` :
                            "Feat";
                        const seedsArr = (featsLib[slug].tags && featsLib[slug].tags.includes("Spell")) ?
                            [
                                {
                                    insert: `Basic: ${JSON.stringify(featsLib[slug].basicSeeds)}; Advanced: ${JSON.stringify(featsLib[slug].advancedSeeds)}`
                                        .replaceAll(`"`, ``).replaceAll(",", ", ")
                                },
                                {
                                    attributes: { header: 4 },
                                    insert: "\n"
                                }
                            ] :
                            [];
                        return([
                            ...rawDelta.slice(0, 2),
                            {
                                insert: tagString
                            },
                            {
                                attributes: { header: 4 },
                                insert: "\n"
                            },
                            ...seedsArr,
                            ...rawDelta.slice(2)
                        ]);
                    })
                )
            );
        } else {
            setAllText(<h1>(Loading ...)</h1>);
        }
    }, [featsLib, filteredSlugs]);

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
                        {featTags.filter((tag) => tag !== "Core" && tag !== "Monster").map((tag) => (
                            <option value={tag} key={tag}>{tag}</option>
                        ))}
                    </select>
                </div>
            </div>
        </SpecialBlock>
    );
}
export default Feats;