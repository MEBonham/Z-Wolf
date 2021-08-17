import { useState, useRef, useCallback } from 'react';
import _ from 'lodash';

const useSelection = (editor) => {
    const [selection, setSelection] = useState(editor.selection);
    const previousSelection = useRef(null);
    const setSelectionOptimized = useCallback((newSelection) => {
        if (_.isEqual(selection, newSelection)) {
            return;
        }
        previousSelection.current = selection;
        setSelection(newSelection);
    }, [setSelection, selection]);
  
    return [previousSelection.current, selection, setSelectionOptimized];
}

export default useSelection;