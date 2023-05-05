// import React from 'react'

import Button from "components/Button";
import locationIcon from "assets/location.svg";

import "./style.scss";

export default function LeftPanelHeader() {
    return (
        <div className="left-panel-header">
            <Button label="Search for places" />
            <Button iconBtn icon={locationIcon} />
        </div>
    );
}
