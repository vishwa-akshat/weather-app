import { useState } from "react";

import closeIcon from "assets/close.svg";
import searchIcon from "assets/search.svg";

import "./style.scss";

export default function LocationSearchPanel() {
    const [input, setInput] = useState();

    const handleInputChange = (event) => {
        const value = event.target.value;
        setInput(value);
    };
    return (
        <div className="location-search-panel-wrapper">
            <div className="close-icon-wrapper">
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
                <button className="search-btn">Search</button>
            </div>
        </div>
    );
}
