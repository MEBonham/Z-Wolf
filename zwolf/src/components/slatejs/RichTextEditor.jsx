import React, { useMemo, useCallback } from 'react';
import { createEditor } from 'slate';
import { Slate, Editable, withReact } from 'slate-react';

import { renderElement } from './Elements';
import { Toolbar } from './Toolbars';
import { SlateEditorStyle } from '../../styling/StyleBank';

const RichTextEditor = (props) => {
    const { richText, setRichText } = props;
    const editor = useMemo(() => withReact(createEditor()), []);
    return(
        <SlateEditorStyle>
            <Slate
                editor={editor}
                value={richText}
                onChange={(newText) => setRichText(newText)}
            >
                <Toolbar />
                <Editable
                    renderElement={useCallback(renderElement, [])}
                />
            </Slate>
        </SlateEditorStyle>
    );
}

export default RichTextEditor;