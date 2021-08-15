import React from 'react';

import fb from '../../fbConfig';
import useUser from '../../hooks/UserStore';

const UserSettings = () => {
    const displayName = useUser((state) => state.displayName);

    const logout = async () => {
        await fb.auth.signOut();
    }

    return(
        <div className="sidePane">
            <h2>Settings ({displayName})</h2>
            <button onClick={logout}>Logout</button>
        </div>
    );
}

export default UserSettings;