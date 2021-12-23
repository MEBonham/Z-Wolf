import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { useForm } from 'react-hook-form';
import _ from 'lodash';

import fb from '../../fbConfig';
import { itemTags, modTypes, modTargets, verbTypes, armorGirths, weaponGrades, weaponHefts, weaponCategories } from '../../helpers/GameConstants';
import { LibraryAdd } from '../../styling/StyleBank';

const TEMPLATE = "<h2>Item Name</h2><p><strong>Description:</strong> none.</p><h3>Effects:</h3><ul><li>[Basic] </li><li>[Attune-1] </li><li>[Attune-2]</li><li>[Attune-3]</li><li>[Attune-4]</li></ul>"

const NewItem = () => {
    const { register, handleSubmit, watch, reset } = useForm();
    const [numMods, setNumMods] = useState(0);
    const [numVerbs, setNumVerbs] = useState(0);
    const watchModTypes = watch([...Array(numMods).keys()].map((i) => (`modifier.${i}.type`)));

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
        db.collection("items").get()
            .then((querySnapshot) => {
                const slugList = querySnapshot.docs.map((doc) => (doc.id));
                if (!slugList.includes(newSlug)) {
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

    return (
        <LibraryAdd onSubmit={handleSubmit(handleSave)}>
            <h1>Create New Item</h1>
            <ReactQuill
                value={richText}
                onChange={handleChange}
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