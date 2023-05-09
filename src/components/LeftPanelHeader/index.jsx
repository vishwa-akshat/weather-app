// import React from 'react'

import Button from "components/Button";
import locationIcon from "assets/location.svg";

import useGlobalStore from "../../store/globalStore";

import "./style.scss";

export default function LeftPanelHeader() {
    const setIsLocationPanelOpen = useGlobalStore(
        (state) => state.setIsLocationPanelOpen
    );

    const handleOpenLocationPanel = () => {
        setIsLocationPanelOpen(true);
    };

    return (
        <div className="left-panel-header">
            <Button
                onClick={handleOpenLocationPanel}
                label="Search for places"
            />
            <Button iconBtn icon={locationIcon} />
        </div>
    );
}
