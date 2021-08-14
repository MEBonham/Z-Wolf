import React from 'react';
import { Link } from 'react-router-dom';

import { HeaderEnvelope } from '../../styling/StyleBank';

const MainHeader = () => {
    return(
        <HeaderEnvelope>
            <h1>
                <Link to="/">Z-Wolf RPG</Link>
            </h1>
        </HeaderEnvelope>
    );
}
export default MainHeader;