import React from "react";
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

const ClickableArea = ({ area, imageSize, onClick, showBorders, showTooltip }) => {
    const { x1, y1, x2, y2, label } = area;

    // Calculate the position and size of the clickable area
    const areaStyle = {
        left: `${x1 * imageSize.width}px`,
        top: `${y1 * imageSize.height}px`,
        width: `${(x2 - x1) * imageSize.width}px`,
        height: `${(y2 - y1) * imageSize.height}px`,
        border: showBorders ? '2px solid rgba(255, 255, 255, 0.7)' : 'transparent', // Show border if toggled
    };

    return (
        <div
            className="absolute cursor-pointer hover:border-gray-100/90"
            style={areaStyle}
            onClick={onClick}
        >
            {showTooltip && ( // Show tooltip if toggled on
                <Tippy content={label} placement="top" arrow={true}>
                    <span className="block w-full h-full"></span>
                </Tippy>
            )}
        </div>
    );
};

export default ClickableArea;
