// import React from 'react'

import RightPanelHeader from "components/RightPanelHeader";
import FutureWeatherCardsList from "components/FutureWeatherCardsList";

import "./style.scss";

export default function RightPanel() {
    return (
        <div className="right-panel">
            <RightPanelHeader />
            <FutureWeatherCardsList />
        </div>
    );
}
