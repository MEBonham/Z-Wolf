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
    setProfileObj: (newObj) => {
        set((state) => {
            if (state.uid === newObj.uid) {
                return({ profileObj: newObj });
            } else if (!state.uid) {
                return({ profileObj: {} });
            } else {
                return(state);
            }
        });
    },

    charAccessLevel: null,
    setCharAccessLevel: (charBlock, cmpObj) => set((state) => {
        if (state.profileObj.rank === "Admin") {
            return({ charAccessLevel: "edit" });
        } else if (charBlock.creator === state.uid) {
            return({ charAccessLevel: "edit" });
        } else if (cmpObj.owner === state.uid) {
            return({ charAccessLevel: "edit" });
        } else if (state.profileObj.passcodes.includes(cmpObj.npcCode)) {
            return({ charAccessLevel: "view" });
        } else if (state.profileObj.passcodes.includes(cmpObj.pcCode) && charBlock.pcPasscode) {
            return({ charAccessLevel: "view" });
        } else {
            return({ charAccessLevel: false });
        }
    })

}));

export default useUser;