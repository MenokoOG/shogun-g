import React, { useState, useEffect } from "react";
import Modal from "./Modal";
import ClickableArea from "./ClickableArea";
import { fetchWikipediaData } from "../utils/fetchWikipediaData";

import shogunImage from "../assets/images/a Japanese shogun and a geisha standing in front of a red cherry blossom forest..png";

const originalImageDimensions = {
    width: 888,  // Original image width
    height: 507.43,  // Original image height
};

const clickableAreas = {
    shogun: {
        x1: 340 / originalImageDimensions.width,   // These are percentage-based
        y1: 260 / originalImageDimensions.height,
        x2: 430 / originalImageDimensions.width,
        y2: 360 / originalImageDimensions.height,
        label: "Shogun",
    },
    geisha: {
        x1: 503 / originalImageDimensions.width,
        y1: 350 / originalImageDimensions.height,
        x2: 573 / originalImageDimensions.width,
        y2: 450 / originalImageDimensions.height,
        label: "Geisha",
    },
    cherry_blossom: {
        x1: 27 / originalImageDimensions.width,
        y1: 112 / originalImageDimensions.height,
        x2: 152 / originalImageDimensions.width,
        y2: 250 / originalImageDimensions.height,
        label: "Cherry Blossom",
    },
};

const ImageWithAreas = () => {
    const [modalData, setModalData] = useState(null);
    const [modalOpen, setModalOpen] = useState(false);
    const [imageSize, setImageSize] = useState({ width: 0, height: 0 });

    // Function to update the image dimensions
    const updateImageSize = () => {
        const image = document.getElementById("main-image");
        if (image) {
            setImageSize({
                width: image.clientWidth,
                height: image.clientHeight,
            });
        }
    };

    useEffect(() => {
        // Update image size on load and when window is resized
        updateImageSize();
        window.addEventListener("resize", updateImageSize);

        // Cleanup listener when the component unmounts
        return () => {
            window.removeEventListener("resize", updateImageSize);
        };
    }, []);

    const openModal = async (topic) => {
        const data = await fetchWikipediaData(topic);
        setModalData(data);
        setModalOpen(true);
    };

    const closeModal = () => setModalOpen(false);

    return (
        <div className="image-container">
            <img
                id="main-image"
                src={shogunImage}
                alt="Shogun and Geisha Image"
                className="main-image"
            />
            {Object.keys(clickableAreas).map((areaKey) => (
                <ClickableArea
                    key={areaKey}
                    area={clickableAreas[areaKey]}
                    imageSize={imageSize}
                    onClick={() => openModal(areaKey)}
                />
            ))}
            {modalOpen && (
                <Modal
                    title={modalData.title}
                    content={modalData.extract}
                    onClose={closeModal}
                />
            )}
        </div>
    );
};

export default ImageWithAreas;