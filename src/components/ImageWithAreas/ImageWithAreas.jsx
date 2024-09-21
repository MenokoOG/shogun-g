import React, { useState, useEffect } from "react";
import Modal from "../Modal/Modal";
import ClickableArea from "../ClickableArea/ClickableArea";
import Pixeltool from "../../utils/Pixeltool";
import { useWikipediaData } from "../../hooks/useWikipediaData";
import "./ImageWithAreas.css";

import shogunImage from "../../assets/images/a Japanese shogun and a geisha standing in front of a red cherry blossom forest..png";

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

const swordTopics = [
    "Katana", "Tachi", "Chokuto", "Wakizashi",
    "Nodachi", "Kodachi", "Tanto", "Uchigatana",
    "Ninjato", "Bokken"
];

const ImageWithAreas = () => {
    const [modalData, setModalData] = useState(null);
    const [modalOpen, setModalOpen] = useState(false);
    const [imageSize, setImageSize] = useState({ width: 0, height: 0 });
    const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 });
    const [swordData, setSwordData] = useState(null);

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

    // Fetch Wikipedia data for sword topics
    useEffect(() => {
        const fetchSwordData = async () => {
            let combinedData = [];
            for (const topic of swordTopics) {
                const response = await fetch(`https://en.wikipedia.org/api/rest_v1/page/summary/${topic}`);
                const swordData = await response.json();
                combinedData.push({
                    title: swordData.title,
                    extract: swordData.extract,
                });
            }
            setSwordData(combinedData);
        };

        if (modalData === "swordsBelt") {
            fetchSwordData();
        }
    }, [modalData]);

    const { data: areaData } = useWikipediaData(modalData !== "swordsBelt" ? modalData : null);

    const openModal = (areaKey) => {
        setModalData(areaKey);
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
            {modalOpen && (
                <Modal
                    title={modalData === "swordsBelt" ? "Samurai Swords" : areaData?.title}
                    content={
                        modalData === "swordsBelt"
                            ? swordData?.map((sword) => (
                                <div key={sword.title}>
                                    <h3>{sword.title}</h3>
                                    <p>{sword.extract}</p>
                                </div>
                            ))
                            : areaData?.extract
                    }
                    onClose={closeModal}
                />
            )}
            {process.env.NODE_ENV === "development" && (
                <Pixeltool x={tooltipPosition.x} y={tooltipPosition.y} />
            )}
        </div>
    );
};

export default ImageWithAreas;
