import React from 'react';
import Detail from './Detail.js';
import '../css/Resume.css';
import html from '../image/stack/html.png';
import css from '../image/stack/css.png';
import javascript from '../image/stack/javascript.png';
import typescript from '../image/stack/typescript.png';
import react from '../image/stack/react.png';
import redux from '../image/stack/redux.png';
import firebase from '../image/stack/firebase.png';
import git from '../image/stack/git.png';
import jest from '../image/stack/jest.png';
import cypress from '../image/stack/cypress.png';
import nextjs from '../image/stack/nextjs.png';

function Resume() {

    // 이력사항 배열에 저장후 반복문
    const education = [{course: 'M.S in Computer Science, San Francisco State University', term: '2022.08 ~ Present'}, {course: 'KG ITBANK 자바기반 웹개발자 과정', term: '2019.3 ~ 2019.8'}, {course: '서울여자대학교 의류학과', term: '2010.3 ~ 2015.8'}]
    const work = [{course: '놀이의발견 플랫폼실', detail: ['- 놀이의발견 웹서비스 프론트엔트 개발'], term: '2021.09 ~ 2022.07'}, {course: '디에스랩 글로벌 개발팀', detail: ['- CLICK AI 웹서비스 프론트엔트 개발'], term: '2019.8 ~ 2021.4'}]
    const skills = [{name: 'HTML', src: html}, {name: 'CSS', src: css}, {name: 'Javascript', src: javascript},
    {name : 'Typescript', src: typescript}, {name: 'React /React Native', src: react}, {name: 'Next.js', src: nextjs}, {name: 'Redux/Saga', src: redux},
    {name: 'Firebase', src: firebase}, {name: 'Jest', src: jest}, {name: 'Cypress', src: cypress, isBig: true}, {name: 'Git', src: git}];

    return(
    <div className="ResumeContainer" id="resume">
        <div className="topTitle" id="resumeTitle">
            RESUME
        </div>
        <div className="eduwork">
            <Detail title='work' details={work} />
            <Detail title='education' details={education}/>
        </div>
        <div className="skills">
            <div className="title">
                SKILLS
            </div>
            <div className="detailBox" id="skillInfo">
                {skills.map((skill, i) => {
                    return (
                        <div className="skillsContainer">
                            <img src={skill.src} className={`stack ${skill.isBig && 'bigLogo'}`} key={skill+i} />
                            <div className="skillText">{skill.name}</div>
                        </div>
                    )
                })}
            </div>
        </div>
    </div>
  )
}

export default Resume;
