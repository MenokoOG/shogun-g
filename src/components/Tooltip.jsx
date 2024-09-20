// Tooltip.js
import React from "react";
import "./Tooltip.css";

const Tooltip = ({ x, y }) => {
    return (
        <div
            className="tooltip"
            style={{
                left: `${x}px`,
                top: `${y}px`,
            }}
        >
            X: {x}, Y: {y}
        </div>
    );
};

export default Tooltip;
