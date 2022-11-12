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
    const education = [{course: 'M.S in Computer Science, San Francisco State University', term: 'August 2022 ~ Present'}, 
                        {course: 'KG ITBANK 자바기반 웹개발자 과정', term: 'March 2019 ~ August 2019'},
                        {course: '서울여자대학교 의류학과', term: 'March 2010 ~ August 2015'}]
    const work = [{course: 'Web Accessibility Evaluator, SF State', detail: [], term: 'November 2022 ~ Present'}, 
                    {course: '놀이의발견 플랫폼실', detail: [], term: 'September 2021 ~ July 2022'},
                    {course: 'Freelance Software Engineer, Daily Field', detail: [], term: 'December 2020 ~ June 2021'}, 
                    {course: '디에스랩 글로벌 개발팀', detail: [], term: 'August 2019 ~ April 2021'}]
    const skills = [{name: 'HTML', src: html}, {name: 'CSS', src: css}, {name: 'Javascript', src: javascript},
    {name : 'Typescript', src: typescript}, {name: 'React /React Native', src: react}, {name: 'Next.js', src: nextjs}, {name: 'Redux/Saga', src: redux},
    {name: 'Firebase', src: firebase}, {name: 'Jest', src: jest}, {name: 'Cypress', src: cypress, isBig: true}, {name: 'Git', src: git}];

    return(
    <div className="ResumeContainer" id="resume">
        <div className="topTitle" id="resumeTitle">
            RESUME
        </div>
        <div className="eduwork">
            <Detail title='professional experience' details={work} />
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
                            <img alt={`skill${i}`} src={skill.src} className={`stack ${skill.isBig && 'bigLogo'}`} key={skill+i} />
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
