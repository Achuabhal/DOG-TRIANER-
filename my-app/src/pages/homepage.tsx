import React from 'react';
import NavBar from '../assets/components/tsx/NavBar';
import HeroSection from '../assets/components/tsx/HeroSection';
import AboutSection from '../assets/components/tsx/AboutSection';
import Footer from '../assets/components/tsx/Footer';
import './home.css';

const App: React.FC = () => {
    return (
        <div className="appcontainer p-0 p-md-5 pt-md-0">
            <NavBar />
            <HeroSection />
            <AboutSection />
            <Footer />
            {/* Additional sections (e.g., services, testimonials, register) can be added here */}
        </div>
    );
};

export default App;
