import React from 'react';
import '../css/Home.css';
import down from '../image/doubleDown.png';

function Home() {

  return(
    <div className="home" id="home">
        <div className="mainText">
          Jijeong Lee, Front-End Developer
        </div>
        <div className="goDown" >
            <a href="#footer">
              <img src={down} className="downImg" alt="" />
            </a>
        </div>
    </div>
  )
}

export default Home;