import React from 'react';

import { FOOTER_HEIGHT_PX } from '../../helpers/SiteConstants';
import { FooterEnvelope } from '../../styling/StyleBank';

const MainFooter = () => {
    return(
        <FooterEnvelope height={FOOTER_HEIGHT_PX}>
            <p>&copy; {new Date().getFullYear()} M. Everett Bonham</p>
            {/* <span>Icons made by <a href="https://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></span> */}
        </FooterEnvelope>
    );
}
export default MainFooter;