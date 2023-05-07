// import React from 'react'

import nearMe from "assets/nearMe.svg";

import "./style.scss";

export default function WindDirection() {
    return (
        <div className="wind-direction">
            <button className="direction-btn">
                <img className="direction-img" src={nearMe} alt="direction" />
            </button>
            WSW
        </div>
    );
}
