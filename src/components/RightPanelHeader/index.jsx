// import React from 'react'

import "./style.scss";

export default function RightPanelHeader() {
    return (
        <div className="right-panel-header-wrapper">
            <button className="active temperature-unit-change">°C</button>
            <button className="temperature-unit-change">°F</button>
        </div>
    );
}
