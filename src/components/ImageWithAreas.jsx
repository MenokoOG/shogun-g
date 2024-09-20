import React, { useState, useEffect } from "react";
import Modal from "./Modal";
import ClickableArea from "./ClickableArea";
import Tooltip from "./Tooltip";
import { fetchWikipediaData } from "../utils/fetchWikipediaData";

import shogunImage from "../assets/images/a Japanese shogun and a geisha standing in front of a red cherry blossom forest..png";

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

const ImageWithAreas = () => {
    const [modalData, setModalData] = useState(null);
    const [modalOpen, setModalOpen] = useState(false);
    const [imageSize, setImageSize] = useState({ width: 0, height: 0 });
    const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 });

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
        updateImageSize();
        window.addEventListener("resize", updateImageSize);
        return () => {
            window.removeEventListener("resize", updateImageSize);
        };
    }, []);

    const handleMouseMove = (e) => {
        setTooltipPosition({ x: e.pageX, y: e.pageY });
    };

    // Function to open the modal for both swords and other clickable areas
    const openModal = async (areaKey) => {
        let data;

        if (areaKey === "swordsBelt") {
            // Fetch Wikipedia data related to samurai swords
            const swordTopics = ["Katana", "Tachi", "Chokuto", "Wakizashi", "Nodachi", "Kodachi", "Tanto", "Uchigatana", "Ninjato", "Bokken"];
            let combinedData = [];

            // Fetch Wikipedia data for all sword topics
            for (const topic of swordTopics) {
                const swordData = await fetchWikipediaData(topic);
                combinedData.push({
                    title: topic,
                    extract: swordData.extract,
                });
            }

            data = combinedData; // Set sword data for the modal
        } else {
            // Fetch Wikipedia data for other areas (e.g., shogun, geisha, cherry_blossom)
            data = await fetchWikipediaData(areaKey);
        }

        setModalData(data);
        setModalOpen(true);
    };

    const closeModal = () => setModalOpen(false);

    return (
        <div className="image-container" onMouseMove={handleMouseMove}>
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
            {modalOpen && modalData && (
                <Modal
                    title={Array.isArray(modalData) ? "Samurai Swords" : modalData.title}
                    content={Array.isArray(modalData)
                        ? modalData.map((sword) => (
                            <div key={sword.title}>
                                <h3>{sword.title}</h3>
                                <p>{sword.extract}</p>
                            </div>
                        ))
                        : modalData.extract}
                    onClose={closeModal}
                />
            )}
            {/* Conditionally render Tooltip for development */}
            {process.env.NODE_ENV === "development" && (
                <Tooltip x={tooltipPosition.x} y={tooltipPosition.y} />
            )}
        </div>
    );
};

export default ImageWithAreas;
