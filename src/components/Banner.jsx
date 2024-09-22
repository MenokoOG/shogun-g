const Banner = () => {
    return (
        <header className="relative bg-gradient-to-r from-red-700 via-yellow-100 to-red-700 p-6 mb-8 shadow-lg border-t-8 border-b-8 border-yellow-600">
            <div className="text-center">
                <h1 className="text-4xl md:text-6xl font-bold font-serif text-black mb-4 tracking-wider">
                    Shogun-G Project
                </h1>
                <p className="text-lg md:text-xl text-gray-700 font-light italic">
                    A Journey Through the World of the Shogun and Geisha
                </p>
            </div>
        </header>
    );
};

export default Banner;