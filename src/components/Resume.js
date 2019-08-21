import React from 'react';
import Detail from './Detail.js';
import '../css/Resume.css';

function Resume() {

    // 이력사항 배열에 저장후 반복문 돌리기 
    const education = [{course: 'KG ITBANK 자바기반 웹개발자 과정', term: '2019.3 ~ 2019.8'}, {course: '서울여자대학교 의류학과 (3.79 / 4.5)', term: '2010.3 ~ 2015.8'}]
    const work = [{course: '서울여자대학교 재무팀 - 출납업무 및 재무관리', term: '2016.11 ~ 2018.11'}, {course: '신한은행 인천공항점 - 환전 및 입출금업무', term: '2015.9 ~ 2016.10'}]
    const skills = ['HTML / CSS', 'JavaScript / JQuery', 'Ajax', 'React.js / React Native', 'Java / Jsp', 'Spring Framework', 'Oracle SQL', 'Git'];

    return(
    <div className="ResumeContainer" id="resume">
        <div className="topTitle" id="resumeTitle">
            RESUME
        </div>
        <div className="eduwork">
            <Detail title='eductaion' details={education}/>
            <Detail title='work' details={work} />
        </div>

        <div className="skills">
            <div className="title">
                SKILLS
            </div>
            <div className="detailBox" id="skillInfo">
                <div className="skillBox">
                    {skills.map((skill, i) => {
                        return <div key={skill+i}>{skill}</div>
                    })}
                </div>
            </div>
        </div>
    </div>
  )
}

export default Resume;