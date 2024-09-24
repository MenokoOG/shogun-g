import React from "react";
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

const ClickableArea = ({ area, imageSize, onClick, isModalOpen }) => {
    const { x1, y1, x2, y2, label } = area;

    const areaStyle = {
        left: `${x1 * imageSize.width}px`,
        top: `${y1 * imageSize.height}px`,
        width: `${(x2 - x1) * imageSize.width}px`,
        height: `${(y2 - y1) * imageSize.height}px`,
    };

    return (
        <div
            className="absolute border-2 border-transparent cursor-pointer hover:border-gray-100/90"
            style={areaStyle}
            onClick={onClick}
        >
            {!isModalOpen && ( // Only show tooltip if the modal is closed
                <Tippy content={label} placement="top" arrow={true}>
                    <span className="block w-full h-full"></span>
                </Tippy>
            )}
        </div>
    );
};

export default ClickableArea;
