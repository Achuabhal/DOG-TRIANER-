import React from 'react';
import NavBar from '../assets/components/tsx/NavBar';

import Footer from '../assets/components/tsx/Footer';
import './css/home.css';

const App: React.FC = () => {
    return (
        <div className="appcontainer p-0 p-md-5 pt-md-0 ">
            <NavBar />
           
            <Footer />
           
        </div>
    );
};

export default App;
