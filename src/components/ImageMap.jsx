import React, { useEffect } from "react";
import ClickableArea from "./ClickableArea";
import shogunGeishaImage from "../../src/assets/images/a Japanese shogun and a geisha standing in front of a red cherry blossom forest..png";

const originalImageDimensions = {
    width: 1792,
    height: 1024,
};

const clickableAreas = {
    shogun: {
        x1: 750 / originalImageDimensions.width,
        y1: 580 / originalImageDimensions.height,
        x2: 920 / originalImageDimensions.width,
        y2: 708 / originalImageDimensions.height,
        label: "Shogun",
    },
    geisha: {
        x1: 1070 / originalImageDimensions.width,
        y1: 750 / originalImageDimensions.height,
        x2: 1200 / originalImageDimensions.width,
        y2: 830 / originalImageDimensions.height,
        label: "Geisha",
    },
    cherry_blossom: {
        x1: 39 / originalImageDimensions.width,
        y1: 193 / originalImageDimensions.height,
        x2: 287 / originalImageDimensions.width,
        y2: 308 / originalImageDimensions.height,
        label: "Cherry Blossom",
    },
    swordsBelt: {
        x1: 640 / originalImageDimensions.width,
        y1: 680 / originalImageDimensions.height,
        x2: 780 / originalImageDimensions.width,
        y2: 760 / originalImageDimensions.height,
        label: "swordsBelt",
    },
};

const ImageMap = ({ onAreaClick, imageSize, setImageSize }) => {
    useEffect(() => {
        const updateImageSize = () => {
            const image = document.getElementById("main-image");
            if (image) {
                setImageSize({
                    width: image.clientWidth,
                    height: image.clientHeight,
                });
            }
        };

        updateImageSize();
        window.addEventListener("resize", updateImageSize);
        return () => {
            window.removeEventListener("resize", updateImageSize);
        };
    }, [setImageSize]);

    return (
        <div className="relative mx-auto max-w-full">
            <img
                id="main-image"
                src={shogunGeishaImage}
                alt="Shogun and Geisha Image"
                className="block max-w-full h-auto"
            />
            {Object.keys(clickableAreas).map((areaKey) => (
                <ClickableArea
                    key={areaKey}
                    area={clickableAreas[areaKey]}
                    imageSize={imageSize}
                    onClick={() => onAreaClick(areaKey)}
                />
            ))}
        </div>
    );
};

export default ImageMap;
