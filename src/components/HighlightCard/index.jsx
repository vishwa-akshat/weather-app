// import React from 'react'
import PropTypes from "prop-types";

import "./style.scss";

export default function HighlightCard({
    cardDetails: { extraItem: ExtraItem, title, largeText, smallText },
}) {
    return (
        <div className="highlight-card">
            <p className="heading">{title}</p>
            <p className="main-text">
                {largeText}
                <span className="small-text">{smallText}</span>
            </p>
            {ExtraItem && <ExtraItem />}
        </div>
    );
}

HighlightCard.propTypes = {
    cardDetails: PropTypes.object,
};
