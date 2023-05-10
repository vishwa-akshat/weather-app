import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import axios from "axios";

const useGlobalStore = create(
    immer((set, get) => ({
        lat: null,
        long: null,
        isLocationPanelOpen: false,
        searchedLocationData: [],
        weatherData: [],
        currentCity: null,
        unit: "imperial",
        isLoading: false,
        setUnit: (value) => set({ unit: value }),
        setLat: (value) => set({ lat: value }),
        setLong: (value) => set({ long: value }),
        setIsLocationPanelOpen: (value) => set({ isLocationPanelOpen: value }),
        searchLocation: async (value) => {
            const apiKey = import.meta.env.VITE_API_KEY;
            const response = await axios.get(
                `http://api.openweathermap.org/geo/1.0/direct?q=${value}&limit=5&appid=${apiKey}`
            );
            set({ searchedLocationData: response.data });
        },
        weatherApiCall: async () => {
            set({ isLoading: true });
            const lat = get().lat;
            const long = get().long;
            const unit = get().unit;
            if (lat && long) {
                set({
                    weatherData: [],
                });
                const apiKey = import.meta.env.VITE_API_KEY;
                const response = await axios.get(
                    `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${long}&appid=${apiKey}&units=${unit}`
                );
                const dates = response.data.list.map(
                    (item) => item.dt_txt.split(" ")[0]
                );
                const uniqueDates = [...new Set(dates)];
                for (let i = 0; i < uniqueDates.length; i++) {
                    const weather = response.data.list.filter(
                        (item) => item.dt_txt.split(" ")[0] === uniqueDates[i]
                    );
                    set((state) => ({
                        weatherData: [...state.weatherData, weather[0]],
                    }));
                }
                set({ currentCity: response.data.city.name });
                set({ isLoading: false });
            }
        },
        setCurrentLocation: () => {
            navigator.geolocation.getCurrentPosition(function (position) {
                get().setLat(position.coords.latitude);
                get().setLong(position.coords.longitude);
            });
        },
    }))
);

export default useGlobalStore;
