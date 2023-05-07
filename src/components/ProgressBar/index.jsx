// import React from 'react';

import PropTypes from "prop-types";

import "./style.scss";

export default function ProgressBar({ progress = 80 }) {
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
                    style={{ width: progress + "%" }}
                >
                    0
                </div>
            </div>
            <div className="percentage">%</div>
        </div>
    );
}

ProgressBar.propTypes = {
    progress: PropTypes.number,
};
