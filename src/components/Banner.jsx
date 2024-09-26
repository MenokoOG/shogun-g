import React from "react";

const Banner = ({ onToggleClickableAreas, bannerData }) => {
    return (
        <header className={`relative ${bannerData.bgGradient} p-6 mb-8 shadow-lg ${bannerData.borderColors.top} ${bannerData.borderColors.bottom}`}>
            <div className="text-center">
                <h1 className={`text-4xl md:text-6xl font-bold font-serif ${bannerData.textColor} mb-4 tracking-wider`}>
                    {bannerData.title}
                </h1>
                <p className="text-lg md:text-xl text-gray-700 font-light italic">
                    {bannerData.subtitle}
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