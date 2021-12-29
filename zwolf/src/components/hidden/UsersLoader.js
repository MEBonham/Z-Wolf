import { useEffect, useRef } from 'react';

import fb from '../../fbConfig';
import useUser from '../../hooks/UserStore';

const UsersLoader = () => {
    const setUser = useUser((state) => state.setUser);
    const setLoadingUser = useUser((state) => state.setLoadingUser);
    const uid = useUser((state) => state.uid);
    const setProfileObj = useUser((state) => state.setProfileObj);

    // Subscribe to authorization (currently signed-in) changes
    const onceOnly = useRef(true);
    useEffect(() => {
        if (onceOnly.current) {
            setLoadingUser(true);
            onceOnly.current = false;
        }

        const authUnsub = fb.auth.onAuthStateChanged((user) => {
            setUser(user);
            setLoadingUser(false);
        });
        return (() => authUnsub());
    }, [setUser]);

    const db = fb.db;
    useEffect(() => {
        if (uid) {
            const unsubscribe = db.collection("profiles").doc(uid)
                .onSnapshot((doc) => {
                    setProfileObj(doc.data());
                });
            return (() => unsubscribe());
        }
    }, [db, uid]);

    return null;
}

export default UsersLoader;