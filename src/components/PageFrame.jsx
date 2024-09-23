const PageFrame = ({ children }) => {
    return (
        <div className="bg-black relative border-8 border-yellow-600 shadow-xl p-4 min-h-screen">
            <div className="border-double border-8 border-red-800 p-4 bg-black shadow-inner">
                {children}
            </div>
        </div>
    );
};

export default PageFrame;
