import create from 'zustand';

const useUser = create((set) => ({

    uid: null,
    displayName: null,
    setUser: (userObj) => {
        if (userObj) {
            set((state) => ({
                uid: userObj.uid,
                displayName: userObj.displayName ? userObj.displayName : userObj.uid
            }));
        } else {
            set((state) => ({
                uid: null,
                displayName: null
            }));
        }
    },
    loadingUser: false,
    setLoadingUser: (loadStatus) => set((state) => ({ loadingUser: loadStatus })),
    loginFlag: false,
    setLoginFlag: (newVal) => set((state) => ({ loginFlag: newVal })),
    profileObj: {},
    setProfileObj: (newObj) => set((state) => ({ profileObj: newObj }))

}));

export default useUser;