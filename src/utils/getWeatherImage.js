import clear from "assets/Clear.png";
import hail from "assets/Hail.png";
import heavyCloud from "assets/HeavyCloud.png";
import heavyRain from "assets/HeavyRain.png";
import lightCloud from "assets/LightCloud.png";
import lightRain from "assets/LightRain.png";
import shower from "assets/Shower.png";
import sleet from "assets/Sleet.png";
import snow from "assets/Snow.png";
import thunderstorm from "assets/Thunderstorm.png";

export function getWeatherImage(weather) {
    switch (weather) {
        case "clear sky":
            return clear;
        case "hail":
            return hail;
        case "overcast clouds":
            return heavyCloud;
        case "heavy rain":
            return heavyRain;
        case "scattered clouds":
            return lightCloud;
        case "broken clouds":
            return lightCloud;
        case "light rain":
            return lightRain;
        case "shower":
            return shower;
        case "sleet":
            return sleet;
        case "snow":
            return snow;
        case "thunderstorm":
            return thunderstorm;
        default:
            return clear;
    }
}
