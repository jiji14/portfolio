import React, { useState, useEffect } from 'react';
import Header from './components/Header.js';
import About from './components/About.js';
import Resume from './components/Resume.js';
import Works from './components/Works.js';
import Contact from './components/Contact.js';

import './css/App.css';

function App() {

  return(
    <div className="container">
      <Header />
      <div className="content">
        <About />
        <Resume />
        <Works />
        <Contact />
      </div>
    </div>
  )
}

export default App;
