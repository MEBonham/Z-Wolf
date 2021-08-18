import React from 'react';
import isHotkey from 'is-hotkey';

import { toggleStyle } from '../helpers/EditorUtils';

const KeyBindings = {
    onKeyDown: (editor, ev) => {
        if (isHotkey("mod+b", ev)) {
            toggleStyle(editor, "bold");
            return;
        }
        if (isHotkey("mod+i", ev)) {
            toggleStyle(editor, "italic");
            return;
        }
        if (isHotkey("mod+c", ev)) {
            toggleStyle(editor, "code");
            return;
        }
        if (isHotkey("mod+u", ev)) {
            toggleStyle(editor, "underline");
            return;
        }
    }
};

const useEditorConfig = (editor) => {
    return (ev) => KeyBindings.onKeyDown(editor, ev);
}
export default useEditorConfig;