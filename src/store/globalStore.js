import { create } from "zustand";
import axios from "axios";

const useGlobalStore = create((set) => ({
    isLocationPanelOpen: false,
    searchedLocationData: [],
    setIsLocationPanelOpen: (value) => set({ isLocationPanelOpen: value }),
    searchLocation: async (value) => {
        const response = await axios.get(
            `http://api.openweathermap.org/geo/1.0/direct?q=${value}&limit=5&appid=b6ad0562c691c0e527910bd7c8e9508b`
        );
        set({ searchedLocationData: response.data });
    },
}));

export default useGlobalStore;
