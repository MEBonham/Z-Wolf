import React from 'react';

import fb from '../../fbConfig';

const UserSettings = () => {
    const logout = async () => {
        await fb.auth.signOut();
    }

    return(
        <div className="sidePane">
            <h2>Settings ()</h2>
            <button onClick={logout}>Logout</button>
        </div>
    );
}

export default UserSettings;