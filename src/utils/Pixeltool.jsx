// Tooltip.js
import React from "react";
import "./Pixeltool.css";

const Tooltip = ({ x, y }) => {
    return (
        <div
            className="pixeltool"
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
