import React from 'react';

import useUser from '../../hooks/UserStore';

const RegisterForm = () => {
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
            <h2>Register</h2>
            <p className="small clickable" onClick={handleToggle}>(Already have an account?)</p>
        </div>
    );
}

export default RegisterForm;