import React, { useState } from "react";
import ImageMap from "../components/ImageMap/ImageMap";
import AreaModal from "../components/AreaModal/AreaModal";
import { useWikipediaData } from "../hooks/useWikipediaData"; // Keep this hook for regular topics
import { useSwordData } from "../hooks/useSwordData"; // New hook for sword topics
import "./ImageWithAreas.css";

const ImageWithAreas = () => {
    const [modalData, setModalData] = useState(null);
    const [modalOpen, setModalOpen] = useState(false);
    const [imageSize, setImageSize] = useState({ width: 0, height: 0 });

    // Use `useWikipediaData` for non-sword topics
    const { data: areaData } = useWikipediaData(modalData !== "swordsBelt" ? modalData : null);

    // Use the new `useSwordData` hook for sword topics
    const { swordData } = useSwordData(modalData === "swordsBelt");

    const openModal = (areaKey) => {
        setModalData(areaKey);
        setModalOpen(true);
    };

    const closeModal = () => setModalOpen(false);

    return (
        <div className="image-with-areas">
            <ImageMap onAreaClick={openModal} imageSize={imageSize} setImageSize={setImageSize} />
            {modalOpen && (
                <AreaModal
                    modalData={modalData}
                    swordData={swordData}
                    areaData={areaData}
                    onClose={closeModal}
                />
            )}
        </div>
    );
};

export default ImageWithAreas;