import React, { useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { useForm } from 'react-hook-form';
import _ from 'lodash';

import fb from '../../fbConfig';
import { itemTags, modTypes, modTargets, verbTypes, armorGirths, weaponGrades, weaponHefts, weaponCategories } from '../../helpers/GameConstants';
import { LibraryAdd } from '../../styling/StyleBank';

const TEMPLATE = "<h2>Item Name</h2><p><strong>Description:</strong> none.</p><h3>Effects:</h3><ul><li>[Basic] </li><li>[Attune-1] </li><li>[Attune-2]</li><li>[Attune-3]</li><li>[Attune-4]</li></ul>"

const NewItem = ({ editMode }) => {
    const slug = (editMode ? useParams().slug : null);
    const { register, handleSubmit, watch, reset, setValue } = useForm();
    const [lib, setLib] = useState(null);
    const [numMods, setNumMods] = useState(0);
    const [numVerbs, setNumVerbs] = useState(0);
    const watchModTypes = watch([...Array(numMods).keys()].map((i) => (`modifier.${i}.type`)));
    const quill = useRef(null);
    const onlyTwice1 = useRef(2);
    const onlyTwice2 = useRef(2);

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
        db.collection("items").get()
            .then((querySnapshot) => {
                const slugList = querySnapshot.docs.map((doc) => (doc.id));
                if (!slugList.includes(newSlug) || editMode) {
                    const itemObj = {
                        ...formDataFixed,
                        delta: JSON.stringify(delta)
                    };
                    delete itemObj.slug;
                    if (!itemObj.tags.includes("Armor")) {
                        delete itemObj.girth;
                    }
                    if (!itemObj.tags.includes("Weapon")) {
                        delete itemObj.grade;
                        delete itemObj.heft;
                        delete itemObj.category;
                    }
                    db.collection("items").doc(newSlug).set(itemObj)
                        .then(() => {
                            setNumMods(0);
                            setNumVerbs(0);
                            reset();
                            setRichText(TEMPLATE);
                            setDelta(null);
                        }).catch((err) => {
                            console.error("Error writing new Item: ", err);
                        });
                }
            })
            .catch((err) => {
                console.log("Error fetching previous Items: ", err);
            });
    }

    useEffect(() => {
        if (editMode) {
            const unsubscribe = db.collection("items").doc(slug)
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
            setValue("price", parseInt(lib.price));
            setValue("bulk", parseInt(lib.bulk));
            setValue("hardness", parseInt(lib.hardness));
            setValue("strucSave", parseInt(lib.strucSave));
            setValue("tags", lib.tags);
            if (lib.girth) {
                setValue("girth", lib.girth);
            }
            if (lib.grade) {
                setValue("grade", lib.grade);
            }
            if (lib.heft) {
                setValue("heft", lib.heft);
            }
            if (lib.categories) {
                setValue("categories", lib.categories);
            }
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
            <h1>Create New Item</h1>
            <ReactQuill
                value={richText}
                onChange={handleChange}
                ref={quill}
            />
            <div className="cols">
                <div>
                    <div className="labelPair">
                        <label>Name:</label>
                        <input type="text" defaultValue="New Item" {...register("name")} />
                    </div>
                    <div className="labelPair">
                        <label>URL-Ending:</label>
                        <input type="text" defaultValue="newitem" {...register("slug")} className="shortenBit" />
                    </div>
                    <div className="labelPair">
                        <label>Price:</label>
                        <input type="number" defaultValue={2} {...register("price")} className="shortenBit" />
                    </div>
                    <div className="labelPair">
                        <label>Bulk:</label>
                        <input type="number" defaultValue={1} {...register("bulk")} className="shortenBit" />
                    </div>
                    <div className="labelPair">
                        <label>Hardness:</label>
                        <input type="number" defaultValue={3} {...register("hardness")} className="shortenBit" />
                    </div>
                    <div className="labelPair">
                        <label>Structural Save:</label>
                        <input type="number" defaultValue={6} {...register("strucSave")} className="shortenBit" />
                    </div>
                </div>
                <div className="rows">
                    <label>Tags:</label>
                    <select {...register("tags")} multiple className="fitSix">
                        {itemTags.map((tag) => (
                            <option key={tag} value={tag}>{tag}</option>
                        ))}
                    </select>
                </div>
                <div>
                    <div className="rows">
                        <label>Armor Girth:</label>
                        <select {...register("girth")}>
                            {armorGirths.map((girth) => (
                                <option key={girth} value={girth}>{girth}</option>
                            ))}
                        </select>
                    </div>
                    <div className="rows">
                        <label>Weapon Grade:</label>
                        <select {...register("grade")}>
                            {weaponGrades.map((grade) => (
                                <option key={grade} value={grade}>{grade}</option>
                            ))}
                        </select>
                    </div>
                    <div className="rows">
                        <label>Weapon Heft:</label>
                        <select {...register("heft")}>
                            {weaponHefts.map((heft) => (
                                <option key={heft} value={heft}>{heft}</option>
                            ))}
                        </select>
                    </div>
                </div>
                <div className="rows">
                    <label>Weapon Categories:</label>
                    <select {...register("categories")} multiple className="fitSix">
                        {weaponCategories.map((category) => (
                            <option key={category} value={category}>{category}</option>
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

export default NewItem;