import React, { useState, useCallback } from 'react';
import Banner from './components/Banner';
import Footer from './components/Footer';
import PageFrame from './components/PageFrame';
import ImageWithAreas from './pages/ImageWithAreas';
import { imagesData } from './data/imagesData'; // Import image data
import { layoutData } from './data/layoutData'; // Import layout data

const App = () => {
  const [areClickableAreasVisible, setAreClickableAreasVisible] = useState(false);

  const handleToggleClickableAreas = useCallback(() => {
    setAreClickableAreasVisible((prev) => !prev);
  }, []);

  return (
    <PageFrame pageFrameData={layoutData.shogun.pageFrame}>
      <Banner onToggleClickableAreas={handleToggleClickableAreas} bannerData={layoutData.shogun.banner} />
      <main className="flex-grow">
        <ImageWithAreas imageData={imagesData.shogunGeisha} showClickableAreas={areClickableAreasVisible} />
      </main>
      <Footer footerData={layoutData.shogun.footer} />
    </PageFrame>
  );
};

export default App;