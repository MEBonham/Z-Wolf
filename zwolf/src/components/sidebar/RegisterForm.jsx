import React from 'react';

import fb from '../../fbConfig';
import useUser from '../../hooks/UserStore';

const RegisterForm = () => {
    const setLoadingUser = useUser((state) => state.setLoadingUser);
    const loginFlag = useUser((state) => state.loginFlag);
    const setLoginFlag = useUser((state) => state.setLoginFlag);
    const handleToggle = () => {
        if (typeof window !== "undefined") {
            window.localStorage.setItem("zWolfAlreadyMadeAccount", JSON.stringify(!loginFlag));
        }
        setLoginFlag(!loginFlag);
    }

    const gProvider = fb.provider;
    const gRegister = (ev) => {
        // ev.preventDefault();
        setLoadingUser(true);
        fb.auth.useDeviceLanguage();
        fb.auth.signInWithRedirect(gProvider);
        handleToggle();
    }

    return(
        <div className="sidePane">
            <h2>Register</h2>
            <p className="small clickable" onClick={handleToggle}>(Already have an account?)</p>
            <button onClick={gRegister}>Use Google Account to Register</button>
        </div>
    );
}

export default RegisterForm;