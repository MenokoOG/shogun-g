
import React from "react";
import "./Pixeltool.css";

const Pixeltool = ({ x, y }) => {
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

export default Pixeltool;
