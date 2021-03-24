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
import Tooltip from '@material-ui/core/Tooltip';

function Resume() {

    // 이력사항 배열에 저장후 반복문 돌리기 
    const education = [{course: 'KG ITBANK 자바기반 웹개발자 과정', term: '2019.3 ~ 2019.8'}, {course: '서울여자대학교 의류학과', term: '2010.3 ~ 2015.8'}]
    const work = [{course: '디에스랩 글로벌 개발팀', detail: ['- 웹서비스 프론트엔트 개발 (React/Redux)', '- 서비스 기획 및 UI/UX 개선'], term: '2019.8 ~ 재직중'}]
    const skills = [{name: 'HTML', src: html}, {name: 'CSS', src: css}, {name: 'Javascript', src: javascript}, 
    {name : 'Typescript', src: typescript}, {name: 'React/React Native', src: react}, {name: 'Redux/Saga', src: redux},
    {name: 'Firebase', src: firebase}, {name: 'Git', src: git},
    {name: 'Jest', src: jest}, {name: 'Cypress', src: cypress, isBig: true}];

    return(
    <div className="ResumeContainer" id="resume">
        <div className="topTitle" id="resumeTitle">
            RESUME
        </div>
        <div className="eduwork">
            <Detail title='work' details={work} />
            <Detail title='eductaion' details={education}/>
        </div>
        <div className="skills">
            <div className="title">
                SKILLS
            </div>
            <div className="detailBox" id="skillInfo">
                {skills.map((skill, i) => {
                    return (
                        <Tooltip title={skill.name} arrow>
                            <img src={skill.src} className={`stack ${skill.isBig && 'bigLogo'}`} key={skill+i} />
                        </Tooltip>
                    )
                })}
            </div>
        </div>
    </div>
  )
}

export default Resume;