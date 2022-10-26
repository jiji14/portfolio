import React from 'react';
import { useTranslation } from 'react-i18next';
import profile from '../image/profile.jpg';
import '../css/About.css';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import EmailIcon from '@material-ui/icons/Email';

function About() {

  const { t }  = useTranslation(['page']);

  return(
    <div className="homeContainer" id="about">
        <div className="topTitle">
            ABOUT
        </div>
        <div className="infoWrap">
            <div className="profileBox">
              <img src={profile} className="profile" alt=""/>
              <div className="aboutMe">
                  <div className="introduce">
                    {/* <p className="info">ABOUT ME</p> */}
                    <p className="desc">
                      I am a front-end software engineer specialized in Typescript and Javascript.<br />
                      I have professional experiences working with React and Next.js.<br />
                      I am currently studying for my master's degree in computer science.
                    </p>
                  </div>
                  <div className="contactBox">
                    {/* <p className="info">CONTACT INFO</p> */}
                    <p className="desc flex">
                      <EmailIcon className="mail" fontSize="large" />
                      jijeong0114@gmail.com
                      </p>
                    <p className="desc">
                      <GitHubIcon className="icon" onClick={()=>{window.open("https://github.com/jiji14", "_blank");}} />
                      <LinkedInIcon className="icon" onClick={()=>{window.open("https://www.linkedin.com/in/JijeongLee", "_blank");}}/>
                    </p>
                  </div>
              </div>    
            </div>
        </div>   
    </div>
  )
}

export default About;