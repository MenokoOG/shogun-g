import React, { useState, useCallback } from 'react';
import Banner from './components/Banner';
import Footer from './components/Footer';
import PageFrame from './components/PageFrame';
import ImageWithAreas from './pages/ImageWithAreas';

const App = () => {
  const [areClickableAreasVisible, setAreClickableAreasVisible] = useState(false); // State to manage clickable areas visibility

  // Toggle the visibility of clickable areas
  const handleToggleClickableAreas = useCallback(() => {
    setAreClickableAreasVisible(prevVisible => !prevVisible);
  }, []);

  return (
    <PageFrame>
      <Banner onToggleClickableAreas={handleToggleClickableAreas} />
      <main className="flex-grow">
        <ImageWithAreas showClickableAreas={areClickableAreasVisible} />
      </main>
      <Footer />
    </PageFrame>
  );
};

export default App;
