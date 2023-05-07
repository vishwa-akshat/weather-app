// import React from 'react';

import cloudBackground from "assets/Cloud-background.png";
import shower from "assets/Shower.png";

import "./style.scss";

export default function WeatherConditionImg() {
    return (
        <div className="weather-condition-wrapper">
            <img
                className="cloud-background"
                src={cloudBackground}
                alt="cloud"
            />
            <img className="weather-condition-img" src={shower} alt="shower" />
        </div>
    );
}
