// import React from 'react';

import LeftPanelHeader from "components/LeftPanelHeader";
import WeatherConditionImg from "components/WeatherConditionImg";
import LocationSearchPanel from "components/LocationSearchPanel";

import locationPinIcon from "assets/location_pin.svg";

import "./style.scss";

export default function LeftPanel() {
    return (
        <div className="left-panel">
            <LeftPanelHeader />
            <WeatherConditionImg />
            <div className="temperature-wrapper">
                15
                <span className="temperature-type">°C</span>
            </div>
            <p className="weather-status">Shower</p>
            <div className="present-day-info-wrapper">
                <span className="today">Today</span>
                <span className="divider">.</span>
                <span className="present-date">Fri, 5 Jun</span>
            </div>
            <div className="location-wrapper">
                <img
                    src={locationPinIcon}
                    alt="location"
                    className="location-icon"
                />
                <p className="location">Helsinki</p>
            </div>
            <LocationSearchPanel />
        </div>
    );
}
