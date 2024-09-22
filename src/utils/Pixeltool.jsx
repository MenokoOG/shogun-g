import React from "react";

const Pixeltool = ({ x, y }) => {
    return (
        <div className="absolute bg-gray-800 text-white text-sm py-1 px-2 rounded-md pointer-events-none transform -translate-x-1/2 -translate-y-full z-50" style={{
            left: `${x}px`,
            top: `${y}px`,
        }}>

            X: {x}, Y: {y}
        </div>
    );
};

export default Pixeltool;
