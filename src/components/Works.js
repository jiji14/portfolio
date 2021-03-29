import React, {useState, useEffect} from 'react';
import Modal from 'react-awesome-modal';
import '../css/Works.css';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import dailyfield1 from '../image/work/dailyfield/1_로그인.png';
import dailyfield2 from '../image/work/dailyfield/2_매치목록.png';
import dailyfield3 from '../image/work/dailyfield/4_매치디테일.png';
import dailyfield4 from '../image/work/dailyfield/3_매치신청.png';
import dailyfield5 from '../image/work/dailyfield/5_매치등록.png';
import dailyfield6 from '../image/work/dailyfield/6_선수확인.png';
import clickai1 from '../image/work/clickai/1_로그인.png';
import clickai2 from '../image/work/clickai/2_메인.png';
import clickai3 from '../image/work/clickai/3_인공지능리스트.png';
import clickai4 from '../image/work/clickai/4_인공지능디테일.png';
import clickai5 from '../image/work/clickai/5_인공지능상세.png';
import clickai6 from '../image/work/clickai/6_인공지능예측.png';
import clickai7 from '../image/work/clickai/7_라벨리스트.png';
import clickai8 from '../image/work/clickai/8_라벨미리보기.png';
import clickai9 from '../image/work/clickai/9_라벨링툴.png';
import clickai10 from '../image/work/clickai/10_세팅.png';
import airapp1 from '../image/work/airApp/airApp1.png';
import airapp2 from '../image/work/airApp/airWeb1.png';
import airapp3 from '../image/work/airApp/airWeb2.png';
import ZoomInIcon from '@material-ui/icons/ZoomIn';

function Works() {
    const works = [
        {
            title : "풋살 매치 예약시스템",
            with : "Daily Field",
            language : ["React", "Typescript", "Firebase", "Jest"],
            imgSrc : dailyfield2,
            subImgSrc: [dailyfield1, dailyfield2, dailyfield3, dailyfield4, dailyfield5, dailyfield6],
            detail : "풋살 매치를 예약할 수 있는 사이트입니다. 회원들은 매치를 확인하여 예약 및 취소, 관리자는 매치 및 회원을 관리할 수 있습니다.",
            viewSite : ["https://dailyfield.info"],
        },
        {
            title : "CLICK AI 인공지능 자동개발 솔루션",
            with : "Dslab Global",
            language : ["React", "Javascript", "Redux/Saga", "Cypress"],
            imgSrc : clickai2,
            subImgSrc: [clickai1, clickai2, clickai3, clickai4, clickai5, clickai6, clickai7, clickai8, clickai9, clickai10],
            detail : "CLICK AI는 데이터를 입력하면 인공지능 모델을 자동으로 개발해주는 솔루션입니다. 딥러닝 모델의 상세 지표를 확인할 수 있으며 결과를 간편하게 예측할 수 있습니다. 또한, 물체인식 관련 라벨링 툴을 제공합니다.",
            viewSite : ["https://app.clickai.ai/"],
        },
        {
            title : "Air Quality Web/App",
            language : ["React Native", "React", "Javascript"],
            imgSrc : airapp1,
            subImgSrc: [airapp1, airapp2, airapp3],
            detail : "미세먼지 수치를 측정할 수 있는 서비스입니다. 앱은 위치를 기반으로 미세먼지 수치를 알려주며, 웹은 원하는 도시를 입력하면 미세먼지 수치를 확인할 수 있습니다.",
            viewSite : ["https://play.google.com/store/apps/details?id=com.jiji.getAirApp",
                        "https://jiji14.github.io/getAQI/"]
        }
    ]
    const [visible, setVisible] = useState(false);
    const [workNum, setWorkNum] = useState(0);
    const [imgIndex, setImgIndex] = useState(0);

    useEffect(()=> {
        preloading([dailyfield1, clickai1, airapp1]);
    }, [])

    function openModal(e){
        setWorkNum(e.target.id);
        preloading(works[e.target.id].subImgSrc);
        setVisible(true);
    }

    function closeModal(){
        setVisible(false);
        setImgIndex(0);
    }

    const setPreviousImage = () => {
        if(imgIndex === 0){
            setImgIndex(works[workNum].subImgSrc.length - 1);
        }else{
            setImgIndex(imgIndex - 1);
        }
    }

    const setNextImage = () => {
        if(imgIndex === works[workNum].subImgSrc.length - 1){
            setImgIndex(0);
        }else{
            setImgIndex(imgIndex + 1);
        }
    }

    const preloading = (imageArray) => { 
        let n = imageArray.length; 
        for (let i = 0; i < n; i++) { 
            let img = new Image(); 
            img.src = imageArray[i]; 
        } 
    } 


    return (
        <div className="WorksContainer" id="works">
            <div className="topTitle">
                WORKS
            </div>
            <div className="workWrap" >
                {
                works.map((work, idx)=>{
                    return (
                        <div className="items">
                        <div className="workImgContainer">
                            <img onClick={openModal} src={work.imgSrc} className="workImg" id={idx} alt=""/>
                            <ZoomInIcon fontSize="large" className="zoomInIcon" />
                        </div>
                        <div className="modalInfo">
                            <div className="workTitleText">{work.title}</div>
                                <div className="workWithText">
                                    {work.with ? "With " + work.with : "Personal project"}
                                </div>
                            </div>
                            <div className="btnBox">
                                {work.viewSite.map((site,idx)=>{
                                    return (
                                        <div className="view">
                                            {
                                            site.includes("play.google.com") ? 
                                            <a href={site} target="_blank" >View App</a>
                                            :
                                            <a href={site} target="_blank" >View Site</a>
                                            }
                                        </div>
                                    )
                                })}
                            </div>
                            <div className="skillContainer">
                                {work.language.map((language,idx)=>{
                                    return (
                                        <>
                                        <span className="languageText">{language}
                                        </span>
                                        {idx !== work.language.length -1 &&
                                        <span className="languageText">
                                            /
                                        </span>
                                        }
                                        </>
                                    )
                                })}
                            <div className="workDetail">{work.detail}</div>
                        </div>
                    </div>
                    )
               
                })
                }
                </div>
                <Modal visible={visible} works={works} workNum={workNum} width="50%" effect="fadeInUp" onClickAway={closeModal}>
                        <div className="modalBox">
                            <img src={works[workNum].subImgSrc[imgIndex]} className="popImg" alt="" />
                            <div className="imageNavigator" >
                                <NavigateBeforeIcon onClick={setPreviousImage}  id ="navigator" />
                                <NavigateNextIcon onClick={setNextImage} id="navigator" />
                            </div>
                        </div>
                </Modal>
        </div>
    )
}

export default Works;