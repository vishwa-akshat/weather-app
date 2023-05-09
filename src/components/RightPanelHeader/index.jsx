import useGlobalStore from "../../store/globalStore";

import "./style.scss";

export default function RightPanelHeader() {
    const { unit, setUnit } = useGlobalStore((state) => state);

    const handleUnitChange = (event) => {
        setUnit(event.target.name);
    };

    return (
        <div className="right-panel-header-wrapper">
            <button
                onClick={handleUnitChange}
                className={`${
                    unit === "metric" ? "active" : ""
                } temperature-unit-change`}
                name="metric"
            >
                °C
            </button>
            <button
                onClick={handleUnitChange}
                className={`${
                    unit === "imperial" ? "active" : ""
                } temperature-unit-change`}
                name="imperial"
            >
                °F
            </button>
        </div>
    );
}
