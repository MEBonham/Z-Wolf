import create from 'zustand';

import { calcStats } from '../helpers/CalcStats';

const useChar = create((set) => ({

    cur: null,
    setCur: (charObj) => set((state) => ({
        cur: {
            ...charObj,
            stats: calcStats(charObj)
        }
    })),
    loadingChar: false,
    setLoadingChar: (loadStatus) => set((state) => ({ loadingChar: loadStatus })),
    archeEdit: null,
    setArcheEdit: (kitId) => set((state) => ({ archeEdit: kitId }))

}));

export default useChar;