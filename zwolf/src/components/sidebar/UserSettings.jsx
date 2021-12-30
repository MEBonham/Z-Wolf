import React from 'react';

import fb from '../../fbConfig';
import useUser from '../../hooks/UserStore';

const UserSettings = () => {
    const displayName = useUser((state) => state.displayName);
    const profile = useUser((state) => state.profileObj);

    // console.log(profile);

    const logout = async () => {
        await fb.auth.signOut();
    }

    return(
        <div className="sidePane">
            <header>
                <h2>Settings ({displayName})</h2>
                <button onClick={logout}>Logout</button>
                {!profile || (profile.rank === "peasant") ? null : <p>Moderation: {profile.rank}</p>}
            </header>
        </div>
    );
}

export default UserSettings;