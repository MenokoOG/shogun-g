import React from "react";
import Modal from "./Modal";
import './Tooltip.css';  // Import custom tooltip styles

const AreaModal = ({ modalData, swordData, areaData, onClose }) => {
    return (
        <Modal
            title={modalData === "swordsBelt" ? "Samurai Swords" : areaData?.title}
            content={
                modalData === "swordsBelt"
                    ? swordData?.map((sword) => (
                        <div key={sword.title}>
                            <h3 className="tooltip">
                                {/* Custom Tooltip for the Wikipedia page link */}
                                <a
                                    href={`https://en.wikipedia.org/wiki/${sword.title}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-blue-500 hover:underline"
                                >
                                    {sword.title}
                                </a>
                                <span className="tooltiptext">{`https://en.wikipedia.org/wiki/${sword.title}`}</span>
                            </h3>
                            <p>{sword.extract}</p>
                        </div>
                    ))
                    : areaData?.extract
            }
            wikipediaUrl={
                modalData === "swordsBelt"
                    ? null
                    : areaData
                        ? `https://en.wikipedia.org/wiki/${modalData}`
                        : null
            }
            onClose={onClose}
        />
    );
};

export default AreaModal;
