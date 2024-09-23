import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';  // Importing necessary icons
import './Modal.css';

const Modal = ({ title, content, onClose, isLoading, wikipediaUrl }) => {
    const [isClosing, setIsClosing] = useState(false);

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

        return () => {
            document.removeEventListener("keydown", handleKeyPress);
        };
    }, []);

    return (
        <div
            className={`fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60 transition-opacity duration-300 ease-out ${isClosing ? "opacity-0" : "opacity-100"}`}
            onClick={handleClose}
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
        >
            <div
                className="bg-white p-8 rounded-xl max-w-lg max-h-[80vh] overflow-y-auto shadow-2xl relative transform transition-transform duration-300 scale-100 font-poppins"
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
                        <h2 id="modal-title" className="text-3xl font-semibold text-gray-800 mb-6 leading-tight font-poppins">
                            {title}
                        </h2>
                        <p className="text-base text-gray-700 mb-6 leading-relaxed font-poppins">
                            {content}
                        </p>
                        <div className="flex justify-between mt-6">
                            <button
                                className="flex items-center px-5 py-3 bg-gray-300 text-gray-800 rounded-lg hover:bg-gray-400 transition-colors duration-200 font-poppins"
                                onClick={handleClose}
                            >
                                <FontAwesomeIcon icon={faTimes} className="mr-2" />  {/* Added icon with spacing */}
                                Close
                            </button>
                            {wikipediaUrl && (
                                <button
                                    className="flex items-center px-5 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors duration-200 font-poppins"
                                    onClick={() => window.open(wikipediaUrl, '_blank')}
                                >
                                    <span className="mr-2">Learn More</span>  {/* Added text with spacing */}
                                    <FontAwesomeIcon icon={faExternalLinkAlt} />  {/* External link icon */}
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
