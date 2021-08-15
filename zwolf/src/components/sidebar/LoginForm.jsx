import React from 'react';

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

    return(
        <div className="sidePane">
            <h2>Login</h2>
            <p className="small clickable" onClick={handleToggle}>(Register new account instead)</p>
        </div>
    );
}

export default LoginForm;