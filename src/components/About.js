import React, { useState, useEffect } from 'react';
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
              <img src={profile} className="profile" />
              <div className="aboutMe">
                  <p className="info">WHO ARE YOU?</p>
                  <p className="desc">NAME : 이지정</p>
                  <p className="desc">AGE : 29</p>
                  <p className="desc">배우는 것을 좋아하며 코딩을 사랑하는 열정 가득한 신입 프론트엔드 개발자입니다. </p>
              </div>    
            </div>
        </div>   
    </div>
  )
}

export default About;