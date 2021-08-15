import create from 'zustand';

const useChar = create((set) => ({

    cur: null,
    setCur: (charObj) => set((state) => ({ cur: charObj })),
    loadingChar: false,
    setLoadingChar: (loadStatus) => set((state) => ({ loadingChar: loadStatus }))

}));

export default useUser;