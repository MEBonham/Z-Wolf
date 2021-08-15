import { useEffect } from 'react';

import fb from '../../fbConfig';
import useUser from '../../hooks/UserStore';

const UsersLoader = () => {
    const setUser = useUser((state) => state.setUser);

    // Subscribe to authorization (currently signed-in) changes
    useEffect(() => {
        const authSub = fb.auth.onAuthStateChanged((user) => {
            setUser(user);
        });
        return(() => {
            authSub();
        });
    }, [setUser])

    return null;
}

export default UsersLoader;