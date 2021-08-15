import create from 'zustand';

const useUser = create((set) => ({

    uid: null,
    rank: "peasant",
    setUser: (userObj) => {
        if (userObj) {
            set((state) => ({
                uid: userObj.uid,
                rank: userObj.rank
            }));
        } else {
            set((state) => ({
                uid: null,
                rank: null
            }));
        }
    },
    loadingUser: false,
    setLoadingUser: (loadStatus) => set((state) => ({ loadingUser: loadStatus })),
    loginFlag: false,
    setLoginFlag: (newVal) => set((state) => ({ loginFlag: newVal }))

}));

export default useUser;