// import React from 'react';
import PropTypes from "prop-types";
import "./style.scss";

export default function Button({ label = "Button", iconBtn, icon }) {
    if (iconBtn) {
        return (
            <button className="icon-btn">
                <img className="icon" src={icon} alt="btn icon" />
            </button>
        );
    }

    return <button className="btn">{label}</button>;
}

Button.propTypes = {
    label: PropTypes.string,
    iconBtn: PropTypes.bool,
    icon: PropTypes.node,
};
