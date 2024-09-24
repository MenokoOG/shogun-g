import React from "react";
import Modal from "./Modal";
import './Tooltip.css';

const AreaModal = ({ modalData, swordData, areaData, onClose }) => {
    return (
        <>
            <Modal
                title={modalData === "swordsBelt" ? "Samurai Swords" : areaData?.title}
                content={
                    modalData === "swordsBelt"
                        ? swordData?.map((sword, index) => (
                            <div key={`${sword.title}-${index}`}>
                                <h3 className="tooltip">
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
                                <div>{sword.extract}</div>
                            </div>
                        ))
                        : <div>{areaData?.extract}</div>
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
        </>
    );
};

export default AreaModal;
