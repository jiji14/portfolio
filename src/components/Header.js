import React, { useState, useEffect } from 'react';
import '../css/Header.css';


function Header() {

  return(
    <header>
      <div className="headerContainer" >   
        <div className="headerList">
          <ul>
              <li><a href="#home">HOME</a></li>
              <li><a href="#about">ABOUT</a></li>
              <li><a href="#resume">RESUME</a></li>
              <li><a href="#works">WORKS</a></li>
              <li><a href="#contact">CONTACT</a></li>
          </ul>
        </div>
      </div>  
    </header>
  )
}

export default Header;