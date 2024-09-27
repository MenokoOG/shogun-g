import React, { useState } from 'react';
import shogun from '../assets/images/a Japanese shogun-geisha- red cherry blossom.webp';


const ImageCoordinateTracker = () => {
    const [coordinates, setCoordinates] = useState({ x: 0, y: 0 });

    const handleMouseMove = (e) => {
        const rect = e.target.getBoundingClientRect(); // Get the image's position in the document
        const x = e.clientX - rect.left; // Get x position relative to the image
        const y = e.clientY - rect.top;  // Get y position relative to the image
        setCoordinates({ x, y });
    };

    return (
        <div>
            <img
                src={shogun}
                alt="Trackable Image"
                onMouseMove={handleMouseMove}
                style={{ maxWidth: '100%', height: 'auto' }}
            />
            <div>
                <h3>Mouse Coordinates:</h3>
                <p>X: {coordinates.x}, Y: {coordinates.y}</p>
            </div>

        </div>
    );
};

export default ImageCoordinateTracker;