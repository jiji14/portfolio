import React, { useState, useEffect } from 'react';
import '../css/Contact.css';

function Contact() {

  return(
    <div className="ResumeContainer">
        <div className="topTitle">
            CONTACT
        </div>
        <div className="ContactWrap">
            <div className="contactInfo">
                <p>Email : jijeong0114@gmail.com</p>
                <p>Github : <a href="https://github.com/jiji14">https://github.com/jiji14</a></p>
                <p>LinkedIn : <a href="https://www.linkedin.com/in/JijeongLee">https://www.linkedin.com/in/JijeongLee</a></p>
            </div>
        </div>   
    </div>
  )
}

export default Contact;