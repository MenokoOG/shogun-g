import React, { useEffect, useState } from "react";
import ClickableArea from "../ClickableArea/ClickableArea";
import "../../page/ImageWithAreas.css";
import shogunGeishaImage from "../../assets/images/a Japanese shogun and a geisha standing in front of a red cherry blossom forest..png";

const originalImageDimensions = {
    width: 888,
    height: 507.43,
};

const clickableAreas = {
    shogun: {
        x1: 355 / originalImageDimensions.width,
        y1: 260 / originalImageDimensions.height,
        x2: 430 / originalImageDimensions.width,
        y2: 350 / originalImageDimensions.height,
        label: "Shogun",
    },
    geisha: {
        x1: 503 / originalImageDimensions.width,
        y1: 350 / originalImageDimensions.height,
        x2: 573 / originalImageDimensions.width,
        y2: 408 / originalImageDimensions.height,
        label: "Geisha",
    },
    cherry_blossom: {
        x1: 27 / originalImageDimensions.width,
        y1: 112 / originalImageDimensions.height,
        x2: 152 / originalImageDimensions.width,
        y2: 250 / originalImageDimensions.height,
        label: "Cherry Blossom",
    },
    swordsBelt: {
        x1: 268 / originalImageDimensions.width,
        y1: 308 / originalImageDimensions.height,
        x2: 389 / originalImageDimensions.width,
        y2: 452 / originalImageDimensions.height,
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
        <div className="image-container" >
            <img
                id="main-image"
                src={shogunGeishaImage}
                alt="Shogun and Geisha Image"
                className="main-image"
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