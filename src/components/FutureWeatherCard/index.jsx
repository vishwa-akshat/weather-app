// import React from 'react'
import PropTypes from "prop-types";

import "./style.scss";

export default function FutureWeatherCard({ weatherData }) {
    return (
        <div className="weather-card">
            <p className="day-info">{weatherData.day}</p>
            <img src={weatherData.img} alt="weather" className="weather-img" />
            <div className="temperature-wrapper">
                <span className="max-temp">{weatherData.maxTemp}</span>
                <span className="min-temp">{weatherData.minTemp}</span>
            </div>
        </div>
    );
}

FutureWeatherCard.propTypes = {
    weatherData: PropTypes.object,
};
