import React from 'react';

import { FOOTER_HEIGHT_PX } from '../../helpers/SiteConstants';
import { FooterEnvelope } from '../../styling/StyleBank';

const MainFooter = () => {
    return(
        <FooterEnvelope height={FOOTER_HEIGHT_PX}>
            <p>&copy; {new Date().getFullYear()} M. Everett Bonham</p>
        </FooterEnvelope>
    );
}
export default MainFooter;