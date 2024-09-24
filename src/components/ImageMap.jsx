import React, { useEffect } from "react";
import ClickableArea from "./ClickableArea";
import shogunGeishaImage from "../../src/assets/images/a Japanese shogun-geisha- red cherry blossom.webp";

const originalImageDimensions = {
    width: 1792,
    height: 1024,
};

const clickableAreas = {
    shogun: {
        x1: 700 / originalImageDimensions.width,
        y1: 450 / originalImageDimensions.height,
        x2: 920 / originalImageDimensions.width,
        y2: 650 / originalImageDimensions.height,
        label: "Shogun",
    },
    geisha: {
        x1: 1000 / originalImageDimensions.width,
        y1: 650 / originalImageDimensions.height,
        x2: 1200 / originalImageDimensions.width,
        y2: 750 / originalImageDimensions.height,
        label: "Geisha",
    },
    cherry_blossom: {
        x1: 57 / originalImageDimensions.width,
        y1: 100 / originalImageDimensions.height,
        x2: 357 / originalImageDimensions.width,
        y2: 400 / originalImageDimensions.height,
        label: "Cherry Blossom",
    },
    swordsBelt: {
        x1: 580 / originalImageDimensions.width,
        y1: 600 / originalImageDimensions.height,
        x2: 780 / originalImageDimensions.width,
        y2: 800 / originalImageDimensions.height,
        label: "swordsBelt",
    },
    kabuto: {
        x1: 626 / originalImageDimensions.width,
        y1: 150 / originalImageDimensions.height,
        x2: 940 / originalImageDimensions.width,
        y2: 340 / originalImageDimensions.height,
        label: "kabuto",
    },

    kanzashi: {
        x1: 1005 / originalImageDimensions.width,
        y1: 250 / originalImageDimensions.height,
        x2: 1200 / originalImageDimensions.width,
        y2: 400 / originalImageDimensions.height,
        label: "kanzashi",
    },

    oshiroi: {
        x1: 1000 / originalImageDimensions.width,
        y1: 400 / originalImageDimensions.height,
        x2: 1200 / originalImageDimensions.width,
        y2: 600 / originalImageDimensions.height,
        label: "oshiroi",
    },

    kimono: {
        x1: 1000 / originalImageDimensions.width,
        y1: 750 / originalImageDimensions.height,
        x2: 1200 / originalImageDimensions.width,
        y2: 830 / originalImageDimensions.height,
        label: "kimono",
    },



};

const ImageMap = ({ onAreaClick, imageSize, setImageSize, showClickableAreas, modalOpen }) => {
    useEffect(() => {
        const updateImageSize = () => {
            const image = document.getElementById("main-image");
            if (image) {
                const { width, height } = image.getBoundingClientRect();
                setImageSize({ width, height });
            }
        };

        window.addEventListener("load", updateImageSize);
        window.addEventListener("resize", updateImageSize);

        return () => {
            window.removeEventListener("load", updateImageSize);
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
                    showBorders={showClickableAreas} // Show borders based on the toggle
                    showTooltip={showClickableAreas} // Show tooltips based on the toggle
                    isModalOpen={modalOpen} // Pass the modalOpen prop
                />
            ))}
        </div>
    );
};

export default ImageMap;
