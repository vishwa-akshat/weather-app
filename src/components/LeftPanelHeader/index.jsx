// import React from 'react'

import Button from "components/Button";
import locationIcon from "assets/location.svg";

import useGlobalStore from "../../store/globalStore";

import "./style.scss";

export default function LeftPanelHeader() {
    const setIsLocationPanelOpen = useGlobalStore(
        (state) => state.setIsLocationPanelOpen
    );
    const setCurrentLocation = useGlobalStore(
        (state) => state.setCurrentLocation
    );

    const handleOpenLocationPanel = () => {
        setIsLocationPanelOpen(true);
    };

    const handleSetCurrentLocation = () => {
        setCurrentLocation();
    };

    return (
        <div className="left-panel-header">
            <Button
                onClick={handleOpenLocationPanel}
                label="Search for places"
            />
            <Button
                onClick={handleSetCurrentLocation}
                iconBtn
                icon={locationIcon}
            />
        </div>
    );
}
