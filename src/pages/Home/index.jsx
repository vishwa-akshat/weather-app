import { useEffect } from "react";

import LeftPanel from "containers/LeftPanel";
import RightPanel from "containers/RightPanel";

import useGlobalStore from "../../store/globalStore";

import "./style.scss";

export default function Home() {
    // useEffect(() => {
    //     weatherApiCall();
    // }, [unit]);

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
