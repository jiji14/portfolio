import React from 'react';
import '../css/Resume.css';

function Resume() {

  return(
    <div className="ResumeContainer" id="resume">
        <div className="topTitle" id="resumeTitle">
            RESUME
        </div>
        
        <div className="eduwork">
            <div className="education">
                <div className="title">
                    EDUCATION
                </div>
                <div className="details">
                    <div className="detailBox">
                        <p >KG ITBANK 자바기반 웹개발자 과정</p>
                        <p className="term">2019.3 ~ 2019.8</p>
                    </div>
                    <div className="detailBox">
                        <p>서울여자대학교 의류학과 (3.79 / 4.5)</p>
                        <p className="term">2010.3 ~ 2015.8</p>
                    </div>
                </div>
            </div> 

            <div className="work">
                <div className="title">
                    WORK
                </div>
                <div className="details">
                    <div className="detailBox">
                        <p >서울여자대학교 재무팀 - 출납업무 및 재무관리</p>
                        <p className="term">2016.11 ~ 2018.11</p>
                    </div>
                    <div className="detailBox">
                        <p>신한은행 인천공항점 - 환전 및 입출금업무</p>
                        <p className="term">2015.9 ~ 2016.10</p>
                    </div>
                </div>
            </div>  
        </div>
        <div className="skills">
            <div className="title">
                SKILLS
            </div>
            <div className="details">
                <div className="detailBox">
                    <div className="html">HTML / CSS</div>
                    <div className="javascript">JavaScript / JQuery</div>
                    <div className="react">React.js / React Native</div>
                    <div className="java">Java / Jsp</div>
                    <div className="spring">Spring Framework</div>
                    <div className="sql">Oracle SQL</div>
                </div>
            </div>
        </div>  
    </div>
  )
}

export default Resume;