import { useState } from "react";

import closeIcon from "assets/close.svg";
import searchIcon from "assets/search.svg";

import SearchedLocationsList from "components/SearchedLocationsList";
import useGlobalStore from "../../store/globalStore";

import "./style.scss";

export default function LocationSearchPanel() {
    const [input, setInput] = useState();

    const searchLocation = useGlobalStore((state) => state.searchLocation);
    const isLocationPanelOpen = useGlobalStore(
        (state) => state.isLocationPanelOpen
    );
    const setIsLocationPanelOpen = useGlobalStore(
        (state) => state.setIsLocationPanelOpen
    );

    const handleInputChange = (event) => {
        const value = event.target.value;
        setInput(value);
    };

    const handleSearch = () => {
        searchLocation(input);
    };

    const handlePanelClose = () => {
        setIsLocationPanelOpen(false);
    };

    return (
        <div
            className={`location-search-panel-wrapper ${
                isLocationPanelOpen ? "location-search-panel-open" : ""
            }`}
        >
            <div onClick={handlePanelClose} className="close-icon-wrapper">
                <img src={closeIcon} className="close-icon" alt="close" />
            </div>
            <div className="search-wrapper">
                <div className="input-wrapper">
                    <img
                        src={searchIcon}
                        className="search-icon"
                        alt="search"
                    />
                    <input
                        type="text"
                        className="search-input"
                        value={input}
                        onChange={handleInputChange}
                        placeholder="search location"
                    />
                </div>
                <button onClick={handleSearch} className="search-btn">
                    Search
                </button>
            </div>
            <SearchedLocationsList />
        </div>
    );
}
