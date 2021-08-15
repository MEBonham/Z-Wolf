import create from 'zustand';

const useUser = create((set) => ({

    uid: null,
    loginFlag: false,
    setLoginFlag: (newVal) => set((state) => ({ loginFlag: newVal }))

}));

export default useUser;