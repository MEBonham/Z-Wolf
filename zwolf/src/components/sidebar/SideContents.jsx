import React, { useEffect, useState } from 'react';

import useSidebar from '../../hooks/SidebarStore';

import MainNav from './MainNav';
import AcctMgt from './AcctMgt';
import LibPreview from './LibPreview';
import PlayMode from './PlayMode';

const SideContents = () => {
    const sideMode = useSidebar((state) => state.mode);
    const [modeComp, setModeComp] = useState(null);
    const modeSwap = useSidebar((state) => state.modeSwap);
    const toggleManualSave = useSidebar((state) => state.toggleManualSave);

    const handleMenuBtn = (ev) => {
        modeSwap("mainNavMenu");
    }

    useEffect(() => {
        switch (sideMode) {
            case "acctMgt":
                setModeComp(<AcctMgt />);
                break;
            case "libPreview":
                setModeComp(<LibPreview />);
                break;
            case "play":
                setModeComp(<PlayMode />);
                break;
            default:
                setModeComp(<MainNav />);
        }
    }, [sideMode]);

    return(
        <>
            <header>
                <button onClick={(ev) => { ev.preventDefault(); toggleManualSave(); }}>Save Work</button>
                <span onClick={handleMenuBtn} className="clickable">Main Menu Button</span>
            </header>
            {modeComp}
        </>
    );
}

export default SideContents;