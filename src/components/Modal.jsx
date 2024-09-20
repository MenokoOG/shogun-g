import React from "react";
import "./Modal.css"; // Assuming global modal styles

const Modal = ({ title, content, onClose }) => {
    return (
        <div className="modal" onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <span className="close" onClick={onClose}>&times;</span>
                <h2>{title}</h2>
                <p>{content}</p>
            </div>
        </div>
    );
};

export default Modal;