import React, { useState, useEffect } from 'react';
import '../css/Home.css';
import down from '../image/down.png';

function Home() {

  return(
    <div className="home" id="home">
        <div className="mainText">
            Hello! Welcome to my world :)
        </div>
        <div className="goDown" >
            <a href="#contact">
            <img src={down} className="downImg" />
            </a>
        </div>
    </div>
  )
}

export default Home;