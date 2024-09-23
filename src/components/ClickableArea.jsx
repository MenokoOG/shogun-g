import React from "react";
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css'; // Import default CSS for Tippy.js tooltips

const ClickableArea = ({ area, imageSize, onClick }) => {
    const { x1, y1, x2, y2, label } = area;

    const areaStyle = {
        left: `${x1 * imageSize.width}px`,
        top: `${y1 * imageSize.height}px`,
        width: `${(x2 - x1) * imageSize.width}px`,
        height: `${(y2 - y1) * imageSize.height}px`,
    };

    return (
        <Tippy content={label} placement="top" arrow={true}>
            <div
                className="absolute border-2 border-transparent cursor-pointer hover:border-gray-100/90"
                style={areaStyle}
                onClick={onClick}
            ></div>
        </Tippy>
    );
};

export default ClickableArea;
