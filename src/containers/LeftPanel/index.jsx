// import React from 'react';

import LeftPanelHeader from "components/LeftPanelHeader";
import WeatherConditionImg from "components/WeatherConditionImg";
import LocationSearchPanel from "components/LocationSearchPanel";

import useGlobalStore from "../../store/globalStore";
import { formattedDate } from "../../utils/dateConverter";

import locationPinIcon from "assets/location_pin.svg";

import "./style.scss";

export default function LeftPanel() {
    const weatherData = useGlobalStore((state) => state.weatherData[0]);
    const currentCity = useGlobalStore((state) => state.currentCity);
    const unit = useGlobalStore((state) => state.unit);

    return (
        <div className="left-panel">
            <LeftPanelHeader />
            <WeatherConditionImg />
            <div className="temperature-wrapper">
                {weatherData?.main?.temp?.toFixed(0)}
                <span className="temperature-type">
                    °{unit === "imperial" ? "F" : "C"}
                </span>
            </div>
            <p className="weather-status">{weatherData?.weather[0]?.main}</p>
            <div className="present-day-info-wrapper">
                <span className="today">Today</span>
                <span className="divider">.</span>
                <span className="present-date">
                    {formattedDate(weatherData?.dt_txt.split(" ")[0])}
                </span>
            </div>
            <div className="location-wrapper">
                <img
                    src={locationPinIcon}
                    alt="location"
                    className="location-icon"
                />
                <p className="location">{currentCity}</p>
            </div>
            <LocationSearchPanel />
        </div>
    );
}
