import React, { useState } from "react";
import ImageMap from "../components/ImageMap";
import AreaModal from "../components/AreaModal";
import { useWikipediaData } from "../hooks/useWikipediaData"; // hook for regular topics
import { useSwordData } from "../hooks/useSwordData"; // hook for sword topics
// import Pixeltool from "../utils/Pixeltool"; // dev component for displaying mouse coordinates

const ImageWithAreas = () => {
    const [modalData, setModalData] = useState(null);
    const [modalOpen, setModalOpen] = useState(false);
    const [imageSize, setImageSize] = useState({ width: 0, height: 0 });
    // const [toolPosition, setToolPosition] = useState({ x: 0, y: 0 }); // for dev

    const { data: areaData } = useWikipediaData(modalData !== "swordsBelt" ? modalData : null);
    const { swordData } = useSwordData(modalData === "swordsBelt");

    const openModal = (areaKey) => {
        setModalData(areaKey);
        setModalOpen(true);
    };

    const closeModal = () => setModalOpen(false);
    // for dev
    // const handleMouseMove = (e) => {
    //     setToolPosition({ x: e.pageX, y: e.pageY });
    // };

    return (
        <div className="relative" /*onMouseMove={handleMouseMove}*/>
            <ImageMap onAreaClick={openModal} imageSize={imageSize} setImageSize={setImageSize} />
            {modalOpen && (
                <AreaModal
                    modalData={modalData}
                    swordData={swordData}
                    areaData={areaData}
                    onClose={closeModal}
                />
            )}
            {/* for dev */}
            {/* {process.env.NODE_ENV === "development" && (
                <Pixeltool x={toolPosition.x} y={toolPosition.y} />
            )} */}
        </div>
    );
};

export default ImageWithAreas;
