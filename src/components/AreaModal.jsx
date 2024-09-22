import React from "react";
import Modal from "./Modal";

const AreaModal = ({ modalData, swordData, areaData, onClose }) => {
    return (
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
            onClose={onClose}
        />
    );
};

export default AreaModal;
