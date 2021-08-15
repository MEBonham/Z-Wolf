import React, { useEffect } from 'react';
import SimpleBarReact from 'simplebar-react';

import useUser from '../../hooks/UserStore';

import UserSettings from './UserSettings';
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';

const AcctMgt = () => {
    const uid = useUser((state) => state.uid);
    const loadingUser = useUser((state) => state.loadingUser);
    const loginFlag = useUser((state) => state.loginFlag);
    const setLoginFlag = useUser((state) => state.setLoginFlag);

    useEffect(() => {
        if (typeof window !== "undefined") {
            const saved = window.localStorage.getItem("zWolfAlreadyMadeAccount");
            setLoginFlag(saved === "true" ? true : false);
        }
    }, []);

    return(
        <div className="sidePane">
            <h4>Account Management</h4>
            <SimpleBarReact style={{ width: '100%', height: 'calc(100% - 60px)', paddingRight: '20px' }}>
                {loadingUser ?
                    <div className="sidePane">
                        <h2>(Loading ...)</h2>
                    </div> :
                    uid ?
                        <UserSettings /> :
                        loginFlag ?
                            <LoginForm /> :
                            <RegisterForm />
                }
            </SimpleBarReact>
        </div>
    );
}

export default AcctMgt;