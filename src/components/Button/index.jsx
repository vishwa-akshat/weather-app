// import React from 'react';
import PropTypes from "prop-types";
import "./style.scss";

export default function Button({ onClick, label = "Button", iconBtn, icon }) {
    if (iconBtn) {
        return (
            <button onClick={onClick} className="icon-btn">
                <img className="icon" src={icon} alt="btn icon" />
            </button>
        );
    }

    return (
        <button onClick={onClick} className="btn">
            {label}
        </button>
    );
}

Button.propTypes = {
    label: PropTypes.string,
    iconBtn: PropTypes.bool,
    icon: PropTypes.node,
    onClick: PropTypes.func,
};
