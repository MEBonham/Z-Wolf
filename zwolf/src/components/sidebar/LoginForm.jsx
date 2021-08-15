import React from 'react';

import fb from '../../fbConfig';
import useUser from '../../hooks/UserStore';

const LoginForm = () => {
    const loginFlag = useUser((state) => state.loginFlag);
    const setLoginFlag = useUser((state) => state.setLoginFlag);
    const handleToggle = (ev) => {
        if (typeof window !== "undefined") {
            window.localStorage.setItem("zWolfAlreadyMadeAccount", JSON.stringify(!loginFlag));
        }
        setLoginFlag(!loginFlag);
    }

    const gProvider = fb.provider;
    const gRegister = (ev) => {
        // ev.preventDefault();
        fb.auth.useDeviceLanguage();
        fb.auth.signInWithRedirect(gProvider);
    }

    return(
        <div className="sidePane">
            <h2>Login</h2>
            <p className="small clickable" onClick={handleToggle}>(Register new account instead)</p>
            <button onClick={gRegister}>Login with Google Account</button>
        </div>
    );
}

export default LoginForm;