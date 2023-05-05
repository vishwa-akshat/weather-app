// import React from "react";

import LeftPanel from "containers/LeftPanel";
import RightPanel from "containers/RightPanel";
import "./style.scss";

export default function Home() {
    return (
        <div className="container">
            <div className="left-panel-wrapper">
                <LeftPanel />
            </div>
            <div className="right-panel-wrapper">
                <RightPanel />
            </div>
        </div>
    );
}
