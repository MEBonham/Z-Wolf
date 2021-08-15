import React from 'react';
import { Link } from 'react-router-dom';
import SimpleBarReact from 'simplebar-react';

import useSidebar from '../../hooks/SidebarStore';

import { MainNavStyle } from '../../styling/StyleBank';

const MainNav = () => {
    const modesList = useSidebar((state) => state.modesList);
    const modeSwap = useSidebar((state) => state.modeSwap);

    return(
        <SimpleBarReact style={{ height: 'calc(100% - 60px)', paddingRight: '20px' }}>
            <MainNavStyle>
                <h2>Main Navigation</h2>
                {Object.keys(modesList).filter((mode) => modesList[mode].navInclude)
                    .sort((a, b) => modesList[a].order - modesList[b].order)
                    .map((mode) => {
                        const modeObj = modesList[mode];
                        if (modeObj.link) {
                            return (
                                <p key={mode}>
                                    <Link to={modeObj.link}>{modeObj.spellOut}</Link>
                                </p>
                            );
                        } else {
                            return (
                                <p className="clickable" val={mode} onClick={(ev) => modeSwap(mode)} key={mode}>{modeObj.spellOut}</p>
                            );
                        }
                    })
                }
            </MainNavStyle>
        </SimpleBarReact>
    );
}

export default MainNav;