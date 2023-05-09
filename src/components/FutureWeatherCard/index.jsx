// import React from 'react'
import PropTypes from "prop-types";

import { formattedDate } from "../../utils/dateConverter";

import sleet from "assets/sleet.png";

import "./style.scss";

export default function FutureWeatherCard({ weatherData }) {
    return (
        <div className="weather-card">
            <p className="day-info">
                {formattedDate(weatherData?.dt_txt.split(" ")[0])}
            </p>
            <img src={sleet} alt="weather" className="weather-img" />
            <div className="temperature-wrapper">
                <span className="max-temp">{weatherData?.main?.temp_max}</span>
                <span className="min-temp">{weatherData?.main?.temp_min}</span>
            </div>
        </div>
    );
}

FutureWeatherCard.propTypes = {
    weatherData: PropTypes.object,
};
