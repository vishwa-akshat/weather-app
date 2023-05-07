// import React from 'react'

import HighlightCard from "components/HighlightCard";
import WindDirection from "components/WindDirection";
import ProgressBar from "components/ProgressBar";

import "./style.scss";

export default function HighlightsCardsList() {
    const cardsDetails = [
        {
            id: 1,
            title: "Wind status",
            largeText: "7",
            smallText: "mph",
            extraItem: WindDirection,
        },
        {
            id: 2,
            title: "Humidity",
            largeText: "84",
            smallText: "%",
            extraItem: ProgressBar,
        },
        {
            id: 3,
            title: "Visibility",
            largeText: "6,4",
            smallText: "miles",
            extraItem: null,
        },
        {
            id: 4,
            title: "Air Pressure",
            largeText: "998",
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
