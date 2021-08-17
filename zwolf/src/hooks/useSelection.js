import { useState, useCallback } from 'react';
import _ from 'lodash';

const useSelection = (editor) => {
    const [selection, setSelection] = useState(editor.selection);
    const setSelectionOptimized = useCallback((newSelection) => {
            // Don't update the component state if selection hasn't changed.
            if (_.isEqual(selection, newSelection)) {
                return;
            }
            setSelection(newSelection);
    }, [setSelection, selection]);    
    
    return [selection, setSelectionOptimized];
}

export default useSelection;