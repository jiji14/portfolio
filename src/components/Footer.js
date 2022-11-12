import React from 'react';
import '../css/Footer.css';
import up from '../image/doubleUp.png';

function Footer() {
  
  return(
    <footer className="footerContainer">   
        <div className="goUp">
            <a href="#home" >
              <img src={up} className="downImg" alt="" />
            </a>
        </div>
        <div className="bottom" id="footer">
            Jijeong Lee <span className="smallText">updated at</span> <em>11/11/2022</em>
        </div>
    </footer>
  )
}

export default Footer;