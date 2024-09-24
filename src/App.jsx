import React, { useState } from 'react';
import Banner from './components/Banner';
import Footer from './components/Footer';
import PageFrame from './components/PageFrame';
import ImageWithAreas from './pages/ImageWithAreas';

const App = () => {
  const [showClickableAreas, setShowClickableAreas] = useState(false); // State to manage clickable areas visibility

  const toggleClickableAreas = () => {
    setShowClickableAreas(prev => !prev); // Toggle the visibility of clickable areas
  };

  return (
    <PageFrame>
      <Banner onToggleClickableAreas={toggleClickableAreas} />
      <main className="flex-grow">
        <ImageWithAreas showClickableAreas={showClickableAreas} />
      </main>
      <Footer />
    </PageFrame>
  );
};

export default App;
