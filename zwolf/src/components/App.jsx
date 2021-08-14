import React, { useState, useEffect } from 'react';

import { FOOTER_HEIGHT_PX } from '../helpers/SiteConstants';
import { MainEnvelope } from '../styling/StyleBank';
import MainHeader from './headerfooter/MainHeader';
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
                <MainRouting />
            </MainEnvelope>
            <MainFooter />
        </div>
    );
}
export default App;