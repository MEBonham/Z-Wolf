import React, { useState } from 'react';

import RichTextEditor from '../slatejs/RichTextEditor';

const NewKit = () => {
    const [richText, setRichText] = useState([
        {
          type: "heading2",
          children: [{ text: "New Kit Name" }]
        }
    ]);

    return (
        <>
            <h1>Create New Kit</h1>
            <RichTextEditor richText={richText} setRichText={setRichText} />
        </>
    );
}

export default NewKit;