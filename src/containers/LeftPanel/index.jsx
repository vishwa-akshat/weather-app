// import React from 'react';

import LeftPanelHeader from "components/LeftPanelHeader";

import "./style.scss";

export default function LeftPanel() {
    return (
        <div className="left-panel">
            <LeftPanelHeader />
            <div className="temperature-wrapper">
                <span className="temperature-part-one">1</span>
                <span className="temperature-part-one">5</span>
                <span className="temperature-type">°C</span>
            </div>
        </div>
    );
}
