import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

import { HeaderEnvelope } from '../../styling/StyleBank';
import useStyle from '../../hooks/StyleStore';
import { addClassName, deleteLastClassName } from '../../helpers/utilityFct';
import { FLASH_DURATION } from '../../helpers/SiteConstants';

const MainHeader = () => {
    const flashTrigger = useStyle((state) => state.flashTrigger);
    const stopFlash = useStyle((state) => state.stopFlash);
    useEffect(() => {
        if (flashTrigger) {
            const el = document.querySelector(".App > header");
            addClassName(el, "flashing");
            setTimeout(() => {
                deleteLastClassName(el);
                stopFlash();
            }, (FLASH_DURATION / 2));
        }
    }, [flashTrigger]);

    return(
        <HeaderEnvelope>
            <h1>
                <Link to="/">Z-Wolf RPG</Link>
            </h1>
        </HeaderEnvelope>
    );
}
export default MainHeader;