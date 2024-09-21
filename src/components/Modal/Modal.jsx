import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import './Modal.css';

const LoadingSpinner = () => (
    <div className="loading-spinner">
        <div className="spinner"></div>
        <p>Loading data, please wait...</p>
    </div>
);

const Modal = ({ title, content, onClose, isLoading }) => {
    const [isClosing, setIsClosing] = useState(false);

    // Handle closing with fade-out animation
    const handleClose = () => {
        setIsClosing(true);
        setTimeout(() => {
            onClose();
        }, 300); // Matches the fade-out duration
    };

    // Close on "Escape" key press
    useEffect(() => {
        const handleKeyPress = (e) => {
            if (e.key === "Escape") {
                handleClose();
            }
        };
        document.addEventListener("keydown", handleKeyPress);

        return () => {
            document.removeEventListener("keydown", handleKeyPress);
        };
    }, []);

    return (
        <div
            className={`modal ${isClosing ? "fade-out" : "fade-in"}`}
            onClick={handleClose}
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
        >
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <button className="close" aria-label="Close modal" onClick={handleClose}>
                    <FontAwesomeIcon icon={faTimes} />
                </button>
                {isLoading ? (
                    <LoadingSpinner />
                ) : (
                    <>
                        <h2 id="modal-title">{title}</h2>
                        <p>{content}</p>
                        <div className="modal-actions">
                            <button className="action-btn" onClick={handleClose}>Close</button>
                            <button className="action-btn primary" onClick={() => alert('More Info!')}>
                                Learn More
                            </button>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};

export default Modal;
