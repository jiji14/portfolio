import React, { useEffect } from 'react';
import Header from './components/Header.js';
import Home from './components/Home.js';
import About from './components/About.js';
import Resume from './components/Resume.js';
import Works from './components/Works.js';
import Footer from './components/Footer.js';
import $ from "jquery";

import './css/App.css';


function App() {

  useEffect(() => {
    $(document).ready(function($) {
    
      $(".scroll").click(function(event){            
              event.preventDefault();
              $('html,body').animate({scrollTop:$(this.hash).offset().top}, 500);
      });
    });
  });

  return(
    <div className="container">
      <Header />
      <section className="homeSection">
        <Home />
      </section>
      <section className="content">
        <Works />
        <About />
        <Resume />
      </section>
      <Footer />
    </div>
  )
}

export default App;
