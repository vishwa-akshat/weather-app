// import React from 'react'

import RightPanelHeader from "components/RightPanelHeader";
import FutureWeatherCardsList from "components/FutureWeatherCardsList";
import HighlightsCardsList from "components/HighlightsCardsList";

import "./style.scss";

export default function RightPanel() {
    return (
        <div className="right-panel">
            <RightPanelHeader />
            <FutureWeatherCardsList />
            <div className="highlight-heading">Today&apos;s Highlights</div>
            <HighlightsCardsList />
        </div>
    );
}
