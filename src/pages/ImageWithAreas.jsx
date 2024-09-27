import React, { useState } from "react";
import ImageMap from "../components/ImageMap";
import AreaModal from "../components/AreaModal";
import { useWikipediaData } from "../hooks/useWikipediaData"; // hook for regular topics
import { useSwordData } from "../hooks/useSwordData"; // hook for sword topics



const ImageWithAreas = ({ imageData, showClickableAreas }) => {
    const [modalData, setModalData] = useState(null);
    const [imageSize, setImageSize] = useState({ width: 0, height: 0 });


    // Use correct data hook based on modal content
    const { data: areaData } = useWikipediaData(modalData !== "swordsBelt" ? modalData : null);
    const { swordData } = useSwordData(modalData === "swordsBelt");

    // Modal handlers
    const openModal = (areaKey) => setModalData(areaKey);
    const closeModal = () => setModalData(null);



    return (
        <div className="relative">
            <ImageMap
                image={imageData} // Pass image data dynamically
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


        </div>
    );
};

export default ImageWithAreas;
