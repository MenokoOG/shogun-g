import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import './Modal.css';

const Modal = ({ title, content, onClose, isLoading, wikipediaUrl }) => {
    const [isClosing, setIsClosing] = useState(false);
    const [isDragging, setIsDragging] = useState(false);
    const [offset, setOffset] = useState({ x: 0, y: 0 });
    const [position, setPosition] = useState({ top: '50%', left: '50%' });

    // Set initial position in the center of the screen
    useEffect(() => {
        const modalWidth = 400; // Adjust for mobile
        const modalHeight = 300; // Adjust for mobile
        setPosition({
            top: `${Math.max(0, (window.innerHeight - modalHeight) / 2)}px`,
            left: `${Math.max(0, (window.innerWidth - modalWidth) / 2)}px`,
        });
    }, []);

    const handleMouseDown = (e) => {
        setIsDragging(true);
        setOffset({ x: e.clientX - e.target.getBoundingClientRect().left, y: e.clientY - e.target.getBoundingClientRect().top });
    };

    const handleMouseMove = (e) => {
        if (isDragging) {
            setPosition({
                top: `${e.clientY - offset.y}px`,
                left: `${e.clientX - offset.x}px`,
            });
        }
    };

    const handleMouseUp = () => {
        setIsDragging(false);
    };

    const handleClose = () => {
        setIsClosing(true);
        setTimeout(() => {
            onClose();
        }, 300);
    };

    useEffect(() => {
        const handleKeyPress = (e) => {
            if (e.key === "Escape") {
                handleClose();
            }
        };
        document.addEventListener("keydown", handleKeyPress);
        window.addEventListener("mousemove", handleMouseMove);
        window.addEventListener("mouseup", handleMouseUp);

        return () => {
            document.removeEventListener("keydown", handleKeyPress);
            window.removeEventListener("mousemove", handleMouseMove);
            window.removeEventListener("mouseup", handleMouseUp);
        };
    }, [isDragging, offset]);

    return (
        <div
            className={`fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60 transition-opacity duration-300 ease-out ${isClosing ? "opacity-0" : "opacity-100"}`}
            onClick={handleClose}
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
        >
            <div
                className="bg-white p-4 rounded-xl w-full max-w-xs sm:max-w-lg max-h-[80vh] overflow-y-auto shadow-2xl relative transform transition-transform duration-300 scale-100 font-poppins"
                style={{ top: position.top, left: position.left, position: 'absolute' }}
                onMouseDown={handleMouseDown}
                onClick={(e) => e.stopPropagation()}
            >
                <button
                    className="absolute top-3 right-3 text-2xl text-gray-400 hover:text-red-500 focus:outline-none"
                    aria-label="Close modal"
                    onClick={handleClose}
                >
                    <FontAwesomeIcon icon={faTimes} />
                </button>
                {isLoading ? (
                    <div className="text-center p-5 text-gray-600 font-medium">Loading...</div>
                ) : (
                    <>
                        <h2 id="modal-title" className="text-xl md:text-2xl font-semibold text-gray-800 mb-4 leading-tight font-poppins">
                            {title}
                        </h2>
                        <div className="text-base text-gray-700 mb-4 leading-relaxed font-poppins">
                            {content}
                        </div>
                        <div className="flex flex-col sm:flex-row justify-between mt-4">
                            <button
                                className="flex items-center px-4 py-2 bg-gray-300 text-gray-800 rounded-lg hover:bg-gray-400 transition-colors duration-200 font-poppins"
                                onClick={handleClose}
                            >
                                <FontAwesomeIcon icon={faTimes} className="mr-2" />
                                Close
                            </button>
                            {wikipediaUrl && (
                                <button
                                    className="flex items-center px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors duration-200 font-poppins mt-2 sm:mt-0"
                                    onClick={() => window.open(wikipediaUrl, '_blank')}
                                >
                                    <span className="mr-2">Learn More</span>
                                    <FontAwesomeIcon icon={faExternalLinkAlt} />
                                </button>
                            )}
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};

export default Modal;
