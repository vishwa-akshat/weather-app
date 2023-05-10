import PropTypes from "prop-types";

import cloudBackground from "assets/Cloud-background.png";

import { getWeatherImage } from "../../utils/getWeatherImage";

import "./style.scss";

export default function WeatherConditionImg({ weatherCondition }) {
    return (
        <div className="weather-condition-wrapper">
            <img
                className="cloud-background"
                src={cloudBackground}
                alt="cloud"
            />
            <img
                className="weather-condition-img"
                src={getWeatherImage(weatherCondition)}
                alt="shower"
            />
        </div>
    );
}

WeatherConditionImg.propTypes = {
    weatherCondition: PropTypes.string,
};
