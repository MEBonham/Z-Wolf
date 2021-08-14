import React, { useEffect, useState } from 'react';
import SimpleBarReact from 'simplebar-react';

import useSidebar from '../../hooks/SidebarStore';

import MainNav from './MainNav';

const SideContents = () => {
    const sideMode = useSidebar((state) => state.mode);
    const [modeComp, setModeComp] = useState(null);

    useEffect(() => {
        switch (sideMode) {
            default:
                setModeComp(<MainNav />);
        }
    }, []);

    return(
        <>
            <header>
                <span>Theme Swap</span>
                <span>Main Menu Button</span>
            </header>
            <SimpleBarReact style={{ height: 'calc(100% - 60px)', paddingRight: '20px' }}>
                {modeComp}
            </SimpleBarReact>
        </>
    );
}

export default SideContents;