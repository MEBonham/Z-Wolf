import React, { useEffect, useState } from 'react';

import useSidebar from '../../hooks/SidebarStore';

import MainNav from './MainNav';
import AcctMgt from './AcctMgt';

const SideContents = () => {
    const sideMode = useSidebar((state) => state.mode);
    const [modeComp, setModeComp] = useState(null);
    const modeSwap = useSidebar((state) => state.modeSwap);

    const handleMenuBtn = (ev) => {
        modeSwap("mainNavMenu");
    }

    useEffect(() => {
        switch (sideMode) {
            case "acctMgt":
                setModeComp(<AcctMgt />);
                break;
            default:
                setModeComp(<MainNav />);
        }
    }, [sideMode]);

    return(
        <>
            <header>
                <span>Theme Swap</span>
                <span onClick={handleMenuBtn} className="clickable">Main Menu Button</span>
            </header>
            {modeComp}
        </>
    );
}

export default SideContents;