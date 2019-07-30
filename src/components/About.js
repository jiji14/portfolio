import React from 'react';
import profile from '../image/profile.jpg';
import '../css/About.css';

function About() {

  return(
    <div className="homeContainer" id="about">
        <div className="topTitle">
            ABOUT
        </div>
        <div className="infoWrap">
            <div className="characters">
              <div>Positive</div>
              <div>HardWorking</div>
              <div>FastLearning</div>
              <div>Passionate</div>
            </div>
            <div className="profileBox">
              <img src={profile} className="profile" alt=""/>
              <div className="aboutMe">
                  <div className="introduce">
                    <p className="info">WHO ARE YOU?</p>
                    <p className="desc">배우는 것을 좋아하며 코딩을 사랑하는 열정 가득한 신입 프론트엔드 개발자 이지정입니다. </p>
                  </div>
                  <div className="contactBox">
                    <p className="info">CONTACT INFO</p>
                    <p className="desc">Email : jijeong0114@gmail.com</p>
                    <p className="desc">Github : <a href="https://github.com/jiji14">https://github.com/jiji14</a></p>
                    <p className="desc">LinkedIn : <a href="https://www.linkedin.com/in/JijeongLee">https://www.linkedin.com/in/JijeongLee</a></p>
                  </div>
              </div>    
            </div>
        </div>   
    </div>
  )
}

export default About;