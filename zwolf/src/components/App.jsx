import React, { useState, useEffect } from 'react';
import SimpleBarReact from 'simplebar-react';

import 'simplebar/dist/simplebar.min.css';
import { FOOTER_HEIGHT_PX } from '../helpers/SiteConstants';
import { MainEnvelope, PrimaryBar, Sidebar } from '../styling/StyleBank';
import MainHeader from './headerfooter/MainHeader';
import MainFooter from './headerfooter/MainFooter';
import SideContents from './sidebar/SideContents';
import MainRouting from './MainRouting';

const App = () => {
    const [headerFooterHeight, setHeaderFooterHeight] = useState(80);

    useEffect(() => {
        setHeaderFooterHeight(document.querySelector(".App > header").offsetHeight + FOOTER_HEIGHT_PX);
    }, []);

    return(
        <div className="App">
            <MainHeader />
            <MainEnvelope headerFooterHeight={headerFooterHeight}>
                <PrimaryBar>
                    <SimpleBarReact style={{ height: '100%', paddingRight: '30px' }}>
                        <MainRouting />
                    </SimpleBarReact>
                </PrimaryBar>
                <Sidebar>
                    <SideContents />
                </Sidebar>
            </MainEnvelope>
            <MainFooter />
        </div>
    );
}
export default App;