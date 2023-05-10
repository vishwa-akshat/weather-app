// import React from 'react'
import PropTypes from "prop-types";

import chevron from "assets/chevron_right.svg";

import "./style.scss";

export default function LocationOption({ locationData }) {
    return (
        <div className="location-option-wrapper">
            <span className="location-name">{locationData.name}</span>
            <img src={chevron} alt="chevron" className="arrow" />
        </div>
    );
}

LocationOption.propTypes = {
    locationData: PropTypes.object,
};
