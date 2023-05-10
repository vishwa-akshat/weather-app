import { useEffect } from "react";

import useGlobalStore from "./store/globalStore";

import Home from "pages/Home";
import "./App.scss";

function App() {
    const setCurrentLocation = useGlobalStore(
        (state) => state.setCurrentLocation
    );
    const weatherApiCall = useGlobalStore((state) => state.weatherApiCall);

    useEffect(() => {
        setCurrentLocation();
        setTimeout(() => weatherApiCall(), 1000);
    }, []);

    return (
        <div className="App">
            <Home />
        </div>
    );
}

export default App;
