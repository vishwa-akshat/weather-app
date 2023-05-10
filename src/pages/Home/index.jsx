import { useEffect } from "react";

import LeftPanel from "containers/LeftPanel";
import RightPanel from "containers/RightPanel";

import useGlobalStore from "../../store/globalStore";

import "./style.scss";

export default function Home() {
    const weatherApiCall = useGlobalStore((state) => state.weatherApiCall);
    const unit = useGlobalStore((state) => state.unit);
    const lat = useGlobalStore((state) => state.lat);

    useEffect(() => {
        weatherApiCall();
    }, [unit, lat, weatherApiCall]);

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
