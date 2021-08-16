import React from 'react';
import { Editor } from 'slate';
import { useSlate } from 'slate-react';

export const Toolbar = () => {
    const editor = useSlate();
    // console.log(editor);

    const isFormatActive = (editor, format) => {
        const [match] = Editor.nodes(editor, {
            match: n => n[format] === true,
            mode: 'all'
        });
        return !!match;
    }

    return (
        <div className="slateToolbar">
            <button className={isFormatActive(editor, "bold") ? "pushed" : null}><strong>B</strong></button>
            <button className={isFormatActive(editor, "italic") ? "pushed" : null}><em>I</em></button>
        </div>
    );
}