// src/components/ImageMap.js

import React, { useEffect } from "react";
import ClickableArea from "./ClickableArea";

const ImageMap = ({ image, imageSize, setImageSize, showClickableAreas, onAreaClick }) => {
    // Auto-adjust image size based on the window's size or image dimensions
    useEffect(() => {
        const updateImageSize = () => {
            const img = document.getElementById("main-image");
            if (img) {
                const { width, height } = img.getBoundingClientRect();
                setImageSize({ width, height });
            }
        };

        // Run on mount and on resize
        updateImageSize();
        window.addEventListener("resize", updateImageSize);

        return () => window.removeEventListener("resize", updateImageSize);
    }, [setImageSize]);

    return (
        <div className="relative mx-auto max-w-full">
            <img
                id="main-image"
                src={image.src} // Dynamically use the image source
                alt={image.alt}
                className="block max-w-full h-auto"
            />
            {/* Render clickable areas */}
            {Object.keys(image.clickableAreas).map((areaKey) => (
                <ClickableArea
                    key={areaKey}
                    area={image.clickableAreas[areaKey]}
                    imageSize={imageSize}
                    onClick={() => onAreaClick(areaKey)}
                    showBorders={showClickableAreas}
                    showTooltip={showClickableAreas}
                />
            ))}
        </div>
    );
};

export default ImageMap;
