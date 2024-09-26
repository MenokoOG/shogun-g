import React from "react";

const Banner = ({ onToggleClickableAreas }) => {
    return (
        <header className="relative bg-gradient-to-r from-red-700 via-yellow-100 to-red-700 p-6 mb-8 shadow-lg border-t-8 border-b-8 border-yellow-600">
            <div className="text-center">
                <h1 className="text-4xl md:text-6xl font-bold font-serif text-black mb-4 tracking-wider">
                    Shogun-G
                </h1>
                <p className="text-lg md:text-xl text-gray-700 font-light italic">
                    A Journey Through the World of the Shogun and Geisha
                </p>
                <button
                    onClick={onToggleClickableAreas}
                    className="mt-4 bg-yellow-500 text-gray-800 px-4 py-2 rounded hover:bg-yellow-400 transition"
                    aria-label="Toggle clickable areas"
                >
                    Toggle Clickable Areas
                </button>
            </div>
        </header>
    );
};

export default Banner;
