import React from 'react';
import '../css/Footer.css';
import up from '../image/up.png';

function Footer() {
  
  return(
    <footer className="footerContainer">   
        <div className="goUp">
            <a href="#home" >
              <img src={up} className="downImg" alt="" />
            </a>
        </div>
        <div className="bottom" id="footer">
            Jijeong Lee <em>08/01/2019</em>
        </div>
    </footer>
  )
}

export default Footer;