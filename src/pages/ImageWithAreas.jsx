import React, { useState } from "react";
import ImageMap from "../components/ImageMap";
import AreaModal from "../components/AreaModal";
import { useWikipediaData } from "../hooks/useWikipediaData"; // hook for regular topics
import { useSwordData } from "../hooks/useSwordData"; // hook for sword topics
// import Pixeltool from "../utils/Pixeltool"; // dev component for displaying mouse coordinates

const ImageWithAreas = ({ showClickableAreas }) => {
    const [modalData, setModalData] = useState(null);
    const [imageSize, setImageSize] = useState({ width: 0, height: 0 });
    // const [toolPosition, setToolPosition] = useState({ x: 0, y: 0 }); // for dev

    // Use correct data hook based on modal content
    const { data: areaData } = useWikipediaData(modalData !== "swordsBelt" ? modalData : null);
    const { swordData } = useSwordData(modalData === "swordsBelt");

    // Modal handlers
    const openModal = (areaKey) => setModalData(areaKey);
    const closeModal = () => setModalData(null);

    // for dev
    // const handleMouseMove = (e) => {
    //     setToolPosition({ x: e.pageX, y: e.pageY });
    // };

    return (
        <div className="relative" /* onMouseMove={handleMouseMove} */>
            <ImageMap
                onAreaClick={openModal}
                imageSize={imageSize}
                setImageSize={setImageSize}
                showClickableAreas={showClickableAreas} // Pass the state to ImageMap
            />

            {modalData && (
                <AreaModal
                    modalData={modalData}
                    swordData={swordData}
                    areaData={areaData}
                    onClose={closeModal}
                    wikipediaUrl={areaData ? `https://en.wikipedia.org/wiki/${modalData}` : null}
                />
            )}

            {/* Dev tool for displaying mouse coordinates */}
            {/* {process.env.NODE_ENV === "development" && (
                <Pixeltool x={toolPosition?.x} y={toolPosition?.y} />
            )} */}
        </div>
    );
};

export default ImageWithAreas;
