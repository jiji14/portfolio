import React, { useState, useEffect } from 'react';
import '../css/Header.css';
import down from '../image/down.png';

function Header() {

  return(
    <header>
      <div className="headerContainer">   
        <div className="headerList">
          <ul>
              <li>HOME</li>
              <li>ABOUT</li>
              <li>RESUME</li>
              <li>WORKS</li>
              <li>CONTACT</li>
          </ul>
        </div>
        
      </div>
      <div className="goDown">
        <img src={down} className="downImg" />
      </div>
    </header>
  )
}

export default Header;