import React from 'react';
import './App.css';
import Header from "./shared/components/Header";
import AboutMe from "./modules/about-me";

function App() {
    return (
        <div className='wrapper'>
            <Header/>
            <AboutMe/>
        </div>
    );
}

export default App;
