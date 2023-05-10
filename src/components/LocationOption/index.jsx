// import React from 'react'
import PropTypes from "prop-types";

import chevron from "assets/chevron_right.svg";

import useGlobalStore from "../../store/globalStore";

import "./style.scss";

export default function LocationOption({ locationData }) {
    const setLat = useGlobalStore((state) => state.setLat);
    const setLong = useGlobalStore((state) => state.setLong);
    const setIsLocationPanelOpen = useGlobalStore(
        (state) => state.setIsLocationPanelOpen
    );

    const handleOptionClick = () => {
        setLat(locationData.lat);
        setLong(locationData.lon);
        setIsLocationPanelOpen(false);
    };

    return (
        <div onClick={handleOptionClick} className="location-option-wrapper">
            <span className="location-name">{locationData.name}</span>
            <img src={chevron} alt="chevron" className="arrow" />
        </div>
    );
}

LocationOption.propTypes = {
    locationData: PropTypes.object,
};
