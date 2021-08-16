import React, { useState, useMemo } from 'react';
import { createEditor } from 'slate';
import { Slate, Editable, withReact } from 'slate-react';

const NewFeat = () => {
    const [richText, setRichText] = useState([]);
    const editor = useMemo(() => withReact(createEditor()), []);

    return (
        <Slate
            editor={editor}
            value={richText}
            onChange={(newText) => setRichText(newText)}
        />
    );
}

export default NewFeat;