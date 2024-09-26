import React from "react";

const PageFrame = ({ children, pageFrameData }) => {
    return (
        <main className={`${pageFrameData.bgColor} relative ${pageFrameData.borderColors} shadow-xl p-4 min-h-screen`}>
            <div className={`${pageFrameData.contentBorderColors} p-4 shadow-inner`}>
                {children}
            </div>
        </main>
    );
};

export default PageFrame;