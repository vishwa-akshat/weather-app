// import React from "react";

import sleet from "assets/sleet.png";

import "./style.scss";
import FutureWeatherCard from "components/FutureWeatherCard";

export default function FutureWeatherCardsList() {
    const weatherList = [
        {
            id: 1,
            day: "Tomorrow",
            img: sleet,
            maxTemp: "16°C",
            minTemp: "11°C",
        },
        {
            id: 2,
            day: "Sun, 7 Jun",
            img: sleet,
            maxTemp: "16°C",
            minTemp: "11°C",
        },
        {
            id: 3,
            day: "Mon, 8 Jun",
            img: sleet,
            maxTemp: "16°C",
            minTemp: "11°C",
        },
        {
            id: 4,
            day: "Tue, 9 Jun",
            img: sleet,
            maxTemp: "16°C",
            minTemp: "11°C",
        },
        {
            id: 5,
            day: "Wed, 10 Jun",
            img: sleet,
            maxTemp: "16°C",
            minTemp: "11°C",
        },
    ];
    return (
        <div className="future-weather-card-list">
            {weatherList.map((weather) => (
                <FutureWeatherCard key={weather.id} weatherData={weather} />
            ))}
        </div>
    );
}
