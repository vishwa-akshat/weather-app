import useGlobalStore from "../../store/globalStore";

import "./style.scss";
import FutureWeatherCard from "components/FutureWeatherCard";

export default function FutureWeatherCardsList() {
    const weatherData = useGlobalStore((state) => state.weatherData);

    const weatherList = weatherData.slice(1, weatherData.length);

    return (
        <div className="future-weather-card-list">
            {weatherList.map((weather) => (
                <FutureWeatherCard key={weather.dt} weatherData={weather} />
            ))}
        </div>
    );
}
