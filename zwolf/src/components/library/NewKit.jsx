import React, { useState } from 'react';

import RichTextEditor from '../slate/RichTextEditor';

const NewKit = () => {
    const [richText, setRichText] = useState([
        {
          type: "h2",
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