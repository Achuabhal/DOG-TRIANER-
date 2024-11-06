import React from 'react';
import NavBar from '../assets/components/tsx/NavBar';
import HeroSection from '../assets/components/tsx/HeroSection';
import AboutSection from '../assets/components/tsx/AboutSection';
import Footer from '../assets/components/tsx/Footer';

const App: React.FC = () => {
  return (
    <>
      <NavBar />
      <HeroSection />
      <AboutSection />
      <Footer />
      {/* Additional sections (e.g., services, testimonials, register) can be added here */}
    </>
  );
};

export default App;
