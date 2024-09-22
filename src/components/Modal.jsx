import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

const LoadingSpinner = () => (
    <div className="flex flex-col items-center justify-center text-center p-5">
        <div className="border-4 border-t-blue-500 border-gray-200 rounded-full w-10 h-10 animate-spin"></div>
        <p className="mt-3">Loading data, please wait...</p>
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
            className={`fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 transition-opacity duration-200 ease-out ${isClosing ? "opacity-0" : "opacity-100"}`}
            onClick={handleClose}
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
        >
            <div
                className="bg-white p-6 rounded-lg max-w-lg max-h-[80vh] overflow-y-auto shadow-lg relative transform transition-transform duration-200 scale-100"
                onClick={(e) => e.stopPropagation()}
            >
                <button
                    className="absolute top-2 right-2 text-2xl text-gray-500 hover:text-red-500 focus:outline-none"
                    aria-label="Close modal"
                    onClick={handleClose}
                >
                    <FontAwesomeIcon icon={faTimes} />
                </button>
                {isLoading ? (
                    <LoadingSpinner />
                ) : (
                    <>
                        <h2 id="modal-title" className="text-2xl font-semibold text-gray-800 mb-4">
                            {title}
                        </h2>
                        <p className="text-base text-gray-600 mb-5">
                            {content}
                        </p>
                        <div className="flex justify-between mt-6">
                            <button
                                className="px-4 py-2 bg-gray-300 text-gray-800 rounded-lg hover:bg-gray-400"
                                onClick={handleClose}
                            >
                                Close
                            </button>
                            <button
                                className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
                                onClick={() => alert('More Info!')}
                            >
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
