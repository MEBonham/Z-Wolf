import create from 'zustand';

const useUser = create((set) => ({

    uid: null,
    displayName: null,
    rank: "peasant",
    setUser: (userObj) => {
        if (userObj) {
            set((state) => ({
                uid: userObj.uid,
                displayName: userObj.displayName ? userObj.displayName : userObj.uid,
                rank: userObj.rank
            }));
        } else {
            set((state) => ({
                uid: null,
                displayName: null,
                rank: null
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