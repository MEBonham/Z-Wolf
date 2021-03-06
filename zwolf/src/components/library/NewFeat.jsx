import React, { useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { useForm } from 'react-hook-form';
import _ from 'lodash';

import fb from '../../fbConfig';
import { featTags, modTypes, modTargets, seedsList, skillsList, verbTypes } from '../../helpers/GameConstants';
import { LibraryAdd } from '../../styling/StyleBank';

const TEMPLATE = "<h2>Feat Name</h2><p><strong>Prerequisites:</strong> none.</p><h3>Effects:</h3><ul><li>[Basic] </li><li>[Advanced] </li></ul><h3>[Basic] Seed Effects:</h3><ul><li>first</li><li>second</li></ul><h3>[Advanced] Seed Effects:</h3><ul><li>first</li><li>second</li></ul><h3>Benefits:</h3><ul><li>first</li><li>second</li></ul><p>Custom Hazard Menu</p><ul><li><strong>Requirement:</strong> xxx. <strong>Hazard:</strong> yyy.</li><li><strong>Requirement:</strong> xxx. <strong>Hazard:</strong> yyy.</li></ul>"

const NewFeat = ({ editMode }) => {
    const slug = (editMode ? useParams().slug : null);
    const { register, handleSubmit, watch, reset, setValue } = useForm();
    const [lib, setLib] = useState(null);
    const [numMods, setNumMods] = useState(0);
    const [numVerbs, setNumVerbs] = useState(0);
    const watchModTypes = watch([...Array(numMods).keys()].map((i) => (`modifier.${i}.type`)));
    const quill = useRef(null);
    const onlyTwice1 = useRef(2);
    const onlyTwice2 = useRef(2);

    // console.log(slug);

    const [richText, setRichText] = useState(TEMPLATE);
    const [delta, setDelta] = useState(null);
    const handleChange = (content, delta, source, editor) => {
        setRichText(content);
        setDelta(editor.getContents());
    }

    const db = fb.db;
    const handleSave = (formData) => {
        const newSlug = encodeURIComponent(formData.slug.split(" ").join("").toLowerCase().replace(/'/g, ""));
        const formDataFixed = _.cloneDeep(formData);
        (formData.modifier ?? []).forEach((modObj, i) => {
            if (modObj.type === "Synergy") {
                _.set(formDataFixed, `modifier[${i}].mag`, "special");
            } else {
                _.set(formDataFixed, `modifier[${i}].mag`, parseInt(modObj.mag));
            }
        });
        if (!formData.tags) {
            formDataFixed.tags = [];
        }
        db.collection("feats").get()
            .then((querySnapshot) => {
                const slugList = querySnapshot.docs.map((doc) => (doc.id));
                if (!slugList.includes(newSlug) || editMode) {
                    const featObj = {
                        ...formDataFixed,
                        delta: JSON.stringify(delta)
                    };
                    delete featObj.slug;
                    db.collection("feats").doc(newSlug).set(featObj)
                        .then(() => {
                            setNumMods(0);
                            setNumVerbs(0);
                            reset();
                            setRichText(TEMPLATE);
                            setDelta(null);
                        }).catch((err) => {
                            console.error("Error writing new Feat: ", err);
                        });
                }
            })
            .catch((err) => {
                console.log("Error fetching previous Feats: ", err);
            });
    }

    useEffect(() => {
        if (editMode) {
            const unsubscribe = db.collection("feats").doc(slug)
                .onSnapshot((snapshot) => {
                    setLib({
                        ...snapshot.data(),
                        slug
                    });
                });
            return(() => {
                unsubscribe();
            });
        }
    }, [editMode, slug]);
    useEffect(() => {
        if (lib) {
            // console.log(lib);
            setValue("name", lib.name);
            setValue("slug", lib.slug);
            setValue("tags", lib.tags);
            setValue("basicSeeds", lib.basicSeeds);
            setValue("advancedSeeds", lib.advancedSeeds);
            quill.current.getEditor().setContents(JSON.parse(lib.delta).ops);
            setNumMods(lib.modifier ? lib.modifier.length : 0);
            setNumVerbs(lib.verb ? lib.verb.length : 0);
        }
    }, [lib]);
    useEffect(() => {
        if (editMode && lib && onlyTwice1.current) {
            onlyTwice1.current -= 1;
            if (lib.modifier && lib.modifier.length > 0) {
                lib.modifier.forEach((modObj, i) => {
                    setValue(`modifier[${i}].mag`, `${modObj.mag}`);
                    setValue(`modifier[${i}].overlap`, modObj.overlap);
                    setValue(`modifier[${i}].target`, modObj.target);
                    setValue(`modifier[${i}].type`, modObj.type);
                });
            }
        }
    }, [numMods]);
    useEffect(() => {
        if (editMode && lib && onlyTwice2.current) {
            onlyTwice2.current -= 1;
            if (lib.verb && lib.verb.length > 0) {
                lib.verb.forEach((verbObj, i) => {
                    setValue(`verb[${i}].bullet`, verbObj.bullet);
                    setValue(`verb[${i}].activity`, verbObj.activity);
                });
            }
        }
    }, [numVerbs]);

    return (
        <LibraryAdd onSubmit={handleSubmit(handleSave)}>
            <h1>{editMode ? "Edit Feat" : "Create New Feat"}</h1>
            <ReactQuill
                value={richText}
                onChange={handleChange}
                ref={quill}
            />
            <div className="cols">
                <div>
                    <div className="labelPair">
                        <label>Name:</label>
                        <input type="text" defaultValue="New Feat" {...register("name")} />
                    </div>
                    <div className="labelPair">
                        <label>URL-Ending:</label>
                        <input type="text" defaultValue="newfeat" {...register("slug")} className="shortenBit" />
                    </div>
                </div>
                <div className="rows">
                    <label>Tags:</label>
                    <select {...register("tags")} multiple className="fitSix">
                        {featTags.map((tag) => (
                            <option key={tag} value={tag}>{tag}</option>
                        ))}
                    </select>
                </div>
                <div className="rows">
                    <label>[Basic] Applicable Seeds:</label>
                    <select {...register("basicSeeds")} multiple>
                        {seedsList.map((seed) => (
                            <option key={seed} value={seed}>{seed}</option>
                        ))}
                    </select>
                </div>
                <div className="rows">
                    <label>Additional [Advanced] Seeds:</label>
                    <select {...register("advancedSeeds")} multiple>
                        {seedsList.map((seed) => (
                            <option key={seed} value={seed}>{seed}</option>
                        ))}
                    </select>
                </div>
            </div>
            <section className="mods">
                <button onClick={(ev) => { ev.preventDefault(); setNumMods(numMods + 1) }}>Add Modifier</button>
                {[...Array(numMods).keys()].map((i) => (
                    <div key={i}>
                        <input
                            type="number"
                            defaultValue={1}
                            {...register(`modifier.${i}.mag`)}
                            className="short"
                            disabled={watchModTypes[i] === "Synergy"}
                        />
                        <select {...register(`modifier.${i}.type`)} defaultValue="Untyped">
                            <option value="Untyped">Untyped</option>
                            {modTypes.map((type) => (
                                <option key={type} value={type}>{type}</option>
                            ))}
                        </select>
                        <span> bonus/penalty to </span>
                        <select {...register(`modifier.${i}.target`)}>
                            {modTargets.map((stat) => (
                                <option key={stat} value={stat}>{stat}</option>
                            ))}
                        </select>
                        {(watchModTypes[i] === "Synergy") ?
                            <span>
                                <span> </span>(based on {<select {...register(`modifier.${i}.skill`)}>
                                    {skillsList.map((skill) => (
                                        <option key={skill} value={skill}>{skill}</option>
                                    ))}
                                </select>})
                            </span> :
                        null}
                        <span> overlap: </span>
                        <input
                            type="number"
                            defaultValue={i}
                            {...register(`modifier.${i}.overlap`)}
                            className="short"
                        />
                    </div>
                ))}
            </section>
            <section className="mods">
                <button onClick={(ev) => { ev.preventDefault(); setNumVerbs(numVerbs + 1) }}>Add Verb</button>
                {[...Array(numVerbs).keys()].map((i) => (
                    <div key={i}>
                        <span>Bullet Num </span>
                        <input
                            type="number"
                            defaultValue={i + 1}
                            {...register(`verb.${i}.bullet`)}
                            className="short"
                        />
                        <span> - </span>
                        <select {...register(`verb.${i}.activity`)} defaultValue="Passive">
                            {verbTypes.map((type) => (
                                <option key={type} value={type}>{type}</option>
                            ))}
                        </select>
                    </div>
                ))}
            </section>
            <div className="bottomRight">
                <button type="submit">Save</button>
            </div>
        </LibraryAdd>
    );
}

export default NewFeat;