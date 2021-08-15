import React from 'react';

import fb from '../../fbConfig';
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

    const db = fb.db;

    const gProvider = fb.provider;
    const gRegister = (ev) => {
        // ev.preventDefault();
        fb.auth.useDeviceLanguage();
        fb.auth.signInWithRedirect(gProvider);
    }
    fb.auth.getRedirectResult()
        .then((res) => {
            if (res.user) {
                try {
                    db.collection("profiles").doc(res.user.uid).set({
                        defaultData: {
                            displayName: res.user.displayName,
                            emailVerified: res.user.emailVerified,
                            isAnonymous: res.user.isAnonymous,
                            phoneNumber: res.user.phoneNumber,
                            photoURL: res.user.photoURL,
                            refreshToken: res.user.refreshToken
                        },
                        email: res.user.email,
                        rank: "peasant",
                        passcodes: []
                    }).then(() => {
                        handleToggle();
                    }).catch((err) => {
                        console.log("Error:", err);
                    });
                } catch(err) {
                    console.log("Error:", err);
                }
            }
        }).catch((error) => {
            console.log(err);
        });

    return(
        <div className="sidePane">
            <h2>Register</h2>
            <p className="small clickable" onClick={handleToggle}>(Already have an account?)</p>
            <button onClick={gRegister}>Use Google Account to Register</button>
        </div>
    );
}

export default RegisterForm;