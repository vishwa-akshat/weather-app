import { create } from "zustand";

const useGlobalStore = create((set) => ({
    isLocationPanelOpen: false,
    setIsLocationPanelOpen: (value) => set({ isLocationPanelOpen: value }),
}));

export default useGlobalStore;
