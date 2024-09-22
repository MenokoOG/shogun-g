import React from 'react';
import Banner from './components/Banner';
import Footer from './components/Footer';
import PageFrame from './components/PageFrame';
import ImageWithAreas from './pages/ImageWithAreas';

const App = () => {
  return (
    <PageFrame>
      <Banner />
      <main className="flex-grow">
        <ImageWithAreas />
      </main>
      <Footer />
    </PageFrame>
  );
};

export default App;