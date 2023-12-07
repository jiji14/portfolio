import React from "react";
import { useTranslation } from "react-i18next";
import profile from "../image/profile.jpg";
import "../css/About.css";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";

function About() {
  return (
    <div className="homeContainer" id="about">
      <div className="topTitle">ABOUT</div>
      <div className="infoWrap">
        <div className="profileBox">
          <img src={profile} className="profile" alt="" />
          <div className="aboutMe">
            <div className="introduce">
              {/* <p className="info">ABOUT ME</p> */}
              <p className="desc">
                I am a Master’s student (MS in Computer Science) with over 2
                years of working experience, <br />
                possessing end-to-end development skills, including overall
                product strategy, front-end development, and data architecture
              </p>
            </div>
            <div className="contactBox">
              {/* <p className="info">CONTACT INFO</p> */}
              <a
                href="mailto:jijeong0114@gmail.com"
                className="desc flex pointer"
              >
                <EmailIcon className="mail" fontSize="large" />
                jijeong0114@gmail.com
              </a>
              <p className="desc">
                <GitHubIcon
                  className="icon pointer"
                  onClick={() => {
                    window.open("https://github.com/jiji14", "_blank");
                  }}
                />
                <LinkedInIcon
                  className="icon pointer"
                  onClick={() => {
                    window.open(
                      "https://www.linkedin.com/in/JijeongLee",
                      "_blank"
                    );
                  }}
                />
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
