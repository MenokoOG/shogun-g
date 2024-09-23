 {/* Conditionally render Pixeltool for development */}
            {process.env.NODE_ENV === "development" && (
                <Pixeltool x={toolPosition.x} y={toolPosition.y} />
            )}


 const [toolPosition, setToolPosition] = useState({ x: 0, y: 0 });

const handleMouseMove = (e) => {
        setToolPosition({ x: e.pageX, y: e.pageY });
    };


<div className="image-container" onMouseMove={handleMouseMove}>



{/* border-red-500/50 bg-red-500/10 */}