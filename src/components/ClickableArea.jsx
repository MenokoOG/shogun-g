import React from "react";

const ClickableArea = ({ area, imageSize, onClick }) => {
    const { x1, y1, x2, y2 } = area;

    const areaStyle = {
        left: `${x1 * imageSize.width}px`,
        top: `${y1 * imageSize.height}px`,
        width: `${(x2 - x1) * imageSize.width}px`,
        height: `${(y2 - y1) * imageSize.height}px`,
    };

    return (
        <div
            className="absolute border-2 border-red-500/50 bg-red-500/10 cursor-pointer hover:bg-gray-700/50 hover:border-gray-100/90"
            style={areaStyle}
            onClick={onClick}
        ></div>
    );
};

export default ClickableArea;
