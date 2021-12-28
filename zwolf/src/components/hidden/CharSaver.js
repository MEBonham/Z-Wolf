import { useState, useEffect, useRef } from 'react';
import _ from 'lodash';

import fb from '../../fbConfig';
import useChar from '../../hooks/CreatureStore';
import useSidebar from '../../hooks/SidebarStore';
import useStyle from '../../hooks/StyleStore';
import { AUTOSAVE_INTERVAL } from '../../helpers/SiteConstants';

const CharSaver = (props) => {
    const { slug } = props;
    const cur = useChar((state) => state.cur);
    const manualSave = useSidebar((state) => state.manualSave);
    const toggleManualSave = useSidebar((state) => state.toggleManualSave);
    const flash = useStyle((state) => state.flash);
    const [prevCur, setPrevCur] = useState(cur);
    const db = fb.db;
    const lastSave = useRef(Date.now());
    useEffect(() => {
        const saveTime = () => {
            if (!manualSave && (Date.now() - lastSave.current < AUTOSAVE_INTERVAL)) return false;
            return true;
        }
        const saveChar = async (id) => {
            try {
                await db.collection("creatures").doc(id).set(cur);
                setPrevCur(cur);
                console.log("Saved Character:", id);
            } catch(err) {
                console.log("Error while saving Character:", id, err);
            }
        }

        if (saveTime() && !_.isEqual(cur, prevCur)) {
            saveChar(slug);
            lastSave.current = Date.now();
            flash();
        }
        if (manualSave) {
            toggleManualSave();
        }
    }, [cur, manualSave]);

    return (null);
}

export default CharSaver;