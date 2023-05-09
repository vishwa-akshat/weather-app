import useGlobalStore from "../../store/globalStore";

import "./style.scss";

export default function ProgressBar() {
    const weatherData = useGlobalStore((state) => state.weatherData[0]);

    return (
        <div className="progress-bar-wrapper">
            <div className="percentage-wrapper">
                <span className="percent">0</span>
                <span className="percent">50</span>
                <span className="percent">100</span>
            </div>
            <div className="progress-bar-outer">
                <div
                    className="progress-bar-inner"
                    style={{ width: weatherData?.main?.humidity + "%" }}
                >
                    0
                </div>
            </div>
            <div className="percentage">%</div>
        </div>
    );
}
