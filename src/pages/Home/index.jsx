// import { useEffect } from "react";

import LeftPanel from "containers/LeftPanel";
import RightPanel from "containers/RightPanel";
import "./style.scss";

export default function Home() {
    // eslint-disable-next-line react-hooks/exhaustive-deps
    // const apiCall = async () => {
    //     const response = await fetch(
    //         `https://api.openweathermap.org/data/2.5/forecast?lat=	77.216721&lon=28.644800&appid=b6ad0562c691c0e527910bd7c8e9508b`
    //     );
    //     response
    //         .then((data) => data.json())
    //         .then((data) => {
    //             console.log(data);
    //         });
    // };
    // useEffect(() => {
    //     apiCall();
    // }, []);

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
