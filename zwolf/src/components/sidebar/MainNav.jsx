import React from 'react';
import { Link } from 'react-router-dom';
import useSidebar from '../../hooks/SidebarStore';

import { MainNavStyle } from '../../styling/StyleBank';

const MainNav = () => {
    const modesList = useSidebar((state) => state.modesList);
    const modeSwap = useSidebar((state) => state.modeSwap);

    const handle = (ev) => {
        modeSwap(ev.target.val);
    }

    return(
        <MainNavStyle>
            <h2>Main Navigation</h2>
            {Object.keys(modesList).filter((mode) => modesList[mode].navInclude)
                .sort((a, b) => modesList[a].order - modesList[b].order)
                .map((mode) => {
                    const modeObj = modesList[mode];
                    if (modeObj.link) {
                        return (
                            <p>
                                <Link to={modeObj.link}>{modeObj.spellOut}</Link>
                            </p>
                        );
                    } else {
                        return (
                            <p className="clickable" val={mode} onClick={handle}>{modeObj.spellOut}</p>
                        );
                    }
                })
            }
        </MainNavStyle>
    );
}

export default MainNav;