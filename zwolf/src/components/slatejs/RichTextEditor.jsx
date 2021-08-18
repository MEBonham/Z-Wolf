import React, { useMemo, useCallback } from 'react';
import { createEditor } from 'slate';
import { Slate, Editable, withReact } from 'slate-react';

import useSelection from '../../hooks/useSelection';
import useEditorConfig from '../../hooks/useEditorConfig';
import { renderElement, renderLeaf } from './Elements';
import Toolbar from './Toolbars';
import { SlateEditorStyle } from '../../styling/StyleBank';

const RichTextEditor = (props) => {
    const { richText, setRichText } = props;    
    const editor = useMemo(() => withReact(createEditor()), []);
    const [previousSelection, selection, setSelection] = useSelection(editor);

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
                    onKeyDown={useEditorConfig(editor)}
                />
                <footer>
                    <p>Icons by <a href='https://icons8.com'>icons8.com</a></p>
                </footer>
            </Slate>
        </SlateEditorStyle>
    );
}

export default RichTextEditor;