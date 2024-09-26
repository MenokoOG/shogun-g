import React, { useState, useCallback } from 'react';
import Banner from './components/Banner';
import Footer from './components/Footer';
import PageFrame from './components/PageFrame';
import ImageWithAreas from './pages/ImageWithAreas';
import { imagesData } from './data/images'; // Import the images data

const App = () => {
  const [areClickableAreasVisible, setAreClickableAreasVisible] = useState(false);

  const handleToggleClickableAreas = useCallback(() => {
    setAreClickableAreasVisible((prev) => !prev);
  }, []);

  return (
    <PageFrame>
      <Banner onToggleClickableAreas={handleToggleClickableAreas} />
      <main className="flex-grow">
        {/* Pass different image data here */}
        <ImageWithAreas imageData={imagesData.shogunGeisha} showClickableAreas={areClickableAreasVisible} />
      </main>
      <Footer />
    </PageFrame>
  );
};

export default App;