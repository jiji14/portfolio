import React, {useState} from 'react';
import Modal from 'react-awesome-modal';
import project1 from '../image/pms1.PNG';
import airApp1 from '../image/airApp1.JPG';
import getAQI1 from '../image/getAQI1.jpg';
import closeBtn from '../image/clsBtn.png';
import '../css/Works.css';



function Works() {

    const works = [
        {
            title : "Search Air Quality",
            imgSrc : require('../image/getAQI2.JPG'),
            detail : "React.js로 구현한 도시이름을 검색하면 미세먼지 수치를 알려주는 웹사이트 입니다.",
            viewSite :"https://jiji14.github.io/getAQI/",
            viewCode :"https://github.com/jiji14/getAQI"
        },
        {
            title : "Air Quality App",
            imgSrc : require('../image/airApp2.png'),
            detail : "React Native로 구현한 위치기반 미세먼지 수치를 알려주는 앱입니다.",
            viewSite :"",
            viewCode :"https://github.com/jiji14/getAQIApp"
        },
        {
            title : "Project Management System",
            imgSrc : require('../image/pms1.PNG'),
            detail : "Spring MVC 패턴을 기반으로 제작한 프로젝트 관리 시스템입니다.",
            viewSite :"https://docs.google.com/presentation/d/12SFFQUR6XlnXqxQuX8Lz432ShZSS_3WmFsONl52OoeA/edit?usp=sharing",
            viewCode :""
        }
    ]
    const [visible, setVisible] = useState(false);
    const [workNum, setWorkNum] = useState(0);


    function openModal(e){
        setWorkNum(e.target.id);
        setVisible(true);
    }

    function closeModal(){
        setVisible(false);
    }

  return (
    <div className="WorksContainer" id="works">
        <div className="topTitle">
            WORKS
        </div>
        <div className="workWrap" >
            <div className="items">
                <img onClick={openModal} src={getAQI1} className="workImg" id="0" alt=""/>
            </div>
            <div className="items">
                <img onClick={openModal} src={airApp1} className="workImg" id="1" alt=""/>
            </div>
            <div className="items">
                <img onClick={openModal} src={project1} className="workImg" id="2" alt=""/>
            </div>
            <Modal visible={visible} works={works} workNum={workNum} width="50%" effect="fadeInUp" onClickAway={() => this.closeModal()}>
                    <div className="modalBox">
                        <div className="topLine">
                            <h1 className="modalTitle">{works[workNum].title}</h1>
                            <img src={closeBtn} className="closeBtn" onClick={closeModal} alt="" />
                        </div>
                        <img src={works[workNum].imgSrc} className="popImg" alt="" />
                        <div className="modalInfo">
                            <div>{works[workNum].detail}</div>
                            <div className="btnBox">
                                <div className="view"><a href={works[workNum].viewSite } >View Site</a></div>
                                <div className="view"><a href={works[workNum].viewCode } >View Code</a></div>
                            </div>
                        </div>
                    </div>
            </Modal>
        </div>  
    </div>
  )
}

export default Works;