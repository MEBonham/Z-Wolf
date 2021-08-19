import create from 'zustand';

const useStyle = create((set) => ({

    flashTrigger: false,
    flash: () => set((state) => ({ flashTrigger: true })),
    stopFlash: () => set((state) => ({ flashTrigger: false }))

}));

export default useStyle;