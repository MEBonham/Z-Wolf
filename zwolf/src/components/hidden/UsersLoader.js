import { useEffect, useRef } from 'react';

import fb from '../../fbConfig';
import useUser from '../../hooks/UserStore';

const UsersLoader = () => {
    const setUser = useUser((state) => state.setUser);
    const setLoadingUser = useUser((state) => state.setLoadingUser);

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
    }, [setUser])

    return null;
}

export default UsersLoader;