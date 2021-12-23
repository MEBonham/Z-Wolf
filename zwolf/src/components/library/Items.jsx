import React, { useState, useEffect, useRef } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import _ from 'lodash';

import fb from '../../fbConfig';
import checked from '../../media/ui/checked-box.png';
import unchecked from '../../media/ui/empty-checkbox.png';
import { SpecialBlock } from '../../styling/StyleBank';
import { itemTags } from '../../helpers/GameConstants';

const Items = () => {
    const [itemsLib, setItemsLib] = useState(null);
    const [allText, setAllText] = useState(null);
    const [magicChecked, setMagicChecked] = useState(false);
    const [tagFilter, setTagFilter] = useState(null);
    const [filteredSlugs, setFilteredSlugs] = useState(null);
    const quill = useRef(null);
    const db = fb.db;
    useEffect(() => {
        const unsubscribe = db.collection("items").onSnapshot((querySnapshot) => {
            const tempLib = {};
            querySnapshot.forEach((doc) => {
                tempLib[doc.id] = doc.data();
            });
            setItemsLib(tempLib);
        });
        return (() => unsubscribe());
    }, [db]);

    useEffect(() => {
        if (itemsLib) {
            setFilteredSlugs(
                Object.keys(itemsLib).filter((slug) => (magicChecked) || (!itemsLib[slug].tags.includes("Magic")))
                    .filter((slug) => (!tagFilter) || (tagFilter === "Select Tag") || (itemsLib[slug].tags.includes(tagFilter)))
            );
        }
    }, [itemsLib, magicChecked, tagFilter]);

    useEffect(() => {
        if (itemsLib && filteredSlugs) {
            setAllText(
                _.flatten(filteredSlugs.sort((a, b) => (itemsLib[a].name - itemsLib[b].name))
                    .map((slug) => {
                        const rawDelta = JSON.parse(itemsLib[slug].delta).ops;
                        const tagString = itemsLib[slug].tags.length ?
                            `[${itemsLib[slug].tags.join("] [")}] Item` :
                            "Item";
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
    }, [itemsLib, filteredSlugs]);

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
                        src={magicChecked ? checked : unchecked}
                        alt="checkbox"
                        className="clickable"
                        onClick={(ev) => {
                            setMagicChecked(!magicChecked)
                        }}
                    />
                    <span> </span>
                    include [Magic] Items
                </div>
                <div>
                    <select onChange={(ev) => { ev.preventDefault(); setTagFilter(ev.target.value); }}>
                        <option value={null}>Select Tag</option>
                        {itemTags.filter((tag) => tag !== "Magic").map((tag) => (
                            <option value={tag} key={tag}>{tag}</option>
                        ))}
                    </select>
                </div>
            </div>
        </SpecialBlock>
    );
}
export default Items;