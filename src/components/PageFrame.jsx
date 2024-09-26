import React from "react";

const PageFrame = ({ children }) => {
    return (
        <main className="bg-black relative border-8 border-yellow-600 shadow-xl p-4 min-h-screen">
            <div className="border-double border-8 border-red-800 p-4 bg-black shadow-inner">
                {children}
            </div>
        </main>
    );
};

export default PageFrame;
