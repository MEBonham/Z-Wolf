import React, { useEffect } from 'react';

import { FOOTER_HEIGHT_PX } from '../../helpers/SiteConstants';
import { FooterEnvelope } from '../../styling/StyleBank';
import useStyle from '../../hooks/StyleStore';
import { addClassName, deleteLastClassName } from '../../helpers/utilityFct';
import { FLASH_DURATION } from '../../helpers/SiteConstants';

const MainFooter = () => {
    const flashTrigger = useStyle((state) => state.flashTrigger);
    useEffect(() => {
        if (flashTrigger) {
            const el = document.querySelector(".App > footer");
            addClassName(el, "flashing");
            setTimeout(() => {
                deleteLastClassName(el);
            }, (FLASH_DURATION / 2));
        }
    }, [flashTrigger]);
    return(
        <FooterEnvelope height={FOOTER_HEIGHT_PX}>
            <p>&copy; {new Date().getFullYear()} M. Everett Bonham</p>
            {/* <span>Icons made by <a href="https://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></span> */}
        </FooterEnvelope>
    );
}
export default MainFooter;