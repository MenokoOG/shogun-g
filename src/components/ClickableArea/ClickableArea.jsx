import React from "react";
import "./ClickableArea.css";

const ClickableArea = ({ area, imageSize, onClick }) => {
    const { x1, y1, x2, y2 } = area;

    // Calculate the clickable area position and size based on the current image size
    const areaStyle = {
        left: `${x1 * imageSize.width}px`,
        top: `${y1 * imageSize.height}px`,
        width: `${(x2 - x1) * imageSize.width}px`,
        height: `${(y2 - y1) * imageSize.height}px`,
    };

    return <div className="clickable-area" style={areaStyle} onClick={onClick}></div>;
};

export default ClickableArea;