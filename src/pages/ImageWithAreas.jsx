import React, { useState } from "react";
import ImageMap from "../components/ImageMap/ImageMap";
import AreaModal from "../components/AreaModal/AreaModal";
import { useWikipediaData } from "../hooks/useWikipediaData"; //  hook for regular topics
import { useSwordData } from "../hooks/useSwordData"; //  hook for sword topics
import "./ImageWithAreas.css";
import Pixeltool from "../utils/Pixeltool";

const ImageWithAreas = () => {
    const [modalData, setModalData] = useState(null);
    const [modalOpen, setModalOpen] = useState(false);
    const [imageSize, setImageSize] = useState({ width: 0, height: 0 });
    // State to store the Pixeltool position
    const [toolPosition, setToolPosition] = useState({ x: 0, y: 0 });

    // Use `useWikipediaData` for non-sword topics
    const { data: areaData } = useWikipediaData(modalData !== "swordsBelt" ? modalData : null);

    // Use the `useSwordData` hook for sword topics
    const { swordData } = useSwordData(modalData === "swordsBelt");

    const openModal = (areaKey) => {
        setModalData(areaKey);
        setModalOpen(true);
    };

    const closeModal = () => setModalOpen(false);
    // Handle mouse move event to update the Pixeltool position
    const handleMouseMove = (e) => {
        setToolPosition({ x: e.pageX, y: e.pageY });
    };

    return (
        <div className="image-with-areas" onMouseMove={handleMouseMove}>
            <ImageMap onAreaClick={openModal} imageSize={imageSize} setImageSize={setImageSize} />
            {modalOpen && (
                <AreaModal
                    modalData={modalData}
                    swordData={swordData}
                    areaData={areaData}
                    onClose={closeModal}
                />
            )}
            {/* Conditionally render Pixeltool for development */}
            {process.env.NODE_ENV === "development" && (
                <Pixeltool x={toolPosition.x} y={toolPosition.y} />
            )}
        </div>
    );
};

export default ImageWithAreas;