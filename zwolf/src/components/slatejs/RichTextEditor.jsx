import React, { useMemo, useCallback } from 'react';
import { createEditor } from 'slate';
import { Slate, Editable, withReact } from 'slate-react';

import useSelection from '../../hooks/useSelection';
import { renderElement, renderLeaf } from './Elements';
import Toolbar from './Toolbars';
import { SlateEditorStyle } from '../../styling/StyleBank';

const RichTextEditor = (props) => {
    const { richText, setRichText } = props;    
    const editor = useMemo(() => withReact(createEditor()), []);
    const [selection, setSelection] = useSelection(editor);

    const handleChange = useCallback((newText) => {
        setRichText(newText);
        setSelection(editor.selection);
    }, [setRichText, setSelection]);

    return(
        <SlateEditorStyle>
            <Slate
                editor={editor}
                value={richText}
                onChange={handleChange}
            >
                <Toolbar />
                <Editable
                    renderElement={useCallback(renderElement, [])}
                    renderLeaf={useCallback(renderLeaf, [])}
                />
            </Slate>
        </SlateEditorStyle>
    );
}

export default RichTextEditor;