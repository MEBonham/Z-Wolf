import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { useForm } from 'react-hook-form';

import { LibraryAdd } from '../../styling/StyleBank';
import { kitTags } from '../../helpers/GameConstants';

const NewKit = () => {
    const { register, handleSubmit } = useForm();

    const [richText, setRichText] = useState('');
    const [delta, setDelta] = useState(null);
    const handleChange = (content, delta, source, editor) => {
        setRichText(content);
        setDelta(editor.getContents());
    }

    const handleSave = (formData) => {
        console.log(delta);
        console.log(formData);
    }
  
    return (
        <LibraryAdd onSubmit={handleSubmit(handleSave)}>
            <h1>Create New Kit</h1>
            <ReactQuill
                value={richText}
                onChange={handleChange}
            />
            <div className="cols">
                <div>
                    <div className="labelPair">
                        <label>Name:</label>
                        <input type="text" defaultValue="New Kit" {...register("name")} />
                    </div>
                    <div className="labelPair">
                        <label>URL-Ending:</label>
                        <input type="text" defaultValue="newkit" {...register("slug")} className="shortenBit" />
                    </div>
                </div>
                <div className="rows">
                    <label>Tags:</label>
                    <select {...register("tags")} multiple className="fitFive">
                        {kitTags.map((tag) => (
                            <option key={tag} value={tag}>{tag}</option>
                        ))}
                    </select>
                </div>
            </div>
            <div className="bottomRight">
                <button type="submit">Save</button>
            </div>
        </LibraryAdd>
    );
}

export default NewKit;