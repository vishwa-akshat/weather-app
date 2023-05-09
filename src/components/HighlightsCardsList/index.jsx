// import React from 'react'

import HighlightCard from "components/HighlightCard";
import WindDirection from "components/WindDirection";
import ProgressBar from "components/ProgressBar";

import useGlobalStore from "../../store/globalStore";

import "./style.scss";

export default function HighlightsCardsList() {
    const weatherData = useGlobalStore((state) => state.weatherData[0]);
    const unit = useGlobalStore((state) => state.unit);

    const cardsDetails = [
        {
            id: 1,
            title: "Wind status",
            largeText: weatherData?.wind?.speed,
            smallText: unit === "imperial" ? "mph" : "kmph",
            extraItem: WindDirection,
        },
        {
            id: 2,
            title: "Humidity",
            largeText: weatherData?.main?.humidity,
            smallText: "%",
            extraItem: ProgressBar,
        },
        {
            id: 3,
            title: "Visibility",
            largeText: (weatherData?.visibility / 1609).toFixed(1),
            smallText: "miles",
            extraItem: null,
        },
        {
            id: 4,
            title: "Air Pressure",
            largeText: weatherData?.main?.pressure,
            smallText: "mb",
            extraItem: null,
        },
    ];

    return (
        <div className="highlights-cards-list-wrapper">
            {cardsDetails.map((cards) => (
                <HighlightCard key={cards.id} cardDetails={cards} />
            ))}
        </div>
    );
}
