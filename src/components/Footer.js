import React from 'react';
import '../css/Footer.css';

function Footer() {

  return(
    <footer className="footerContainer">   
        <div className="goUp">
            <a href="#home" >
              <i class="fas fa-chevron-circle-up"></i>
            </a>
        </div>
        <div className="bottom" id="footer">
            Jijeong Lee <em>08/01/2019</em>
        </div>
    </footer>
  )
}

export default Footer;