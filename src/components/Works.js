import React, {useState} from 'react';
import Modal from 'react-awesome-modal';
import project1 from '../image/pms1.PNG';
import airApp1 from '../image/airApp1.JPG';
import getAQI1 from '../image/getAQI1.jpg';
import getAQI2 from '../image/getAQI2.JPG';
import closeBtn from '../image/clsBtn.png'
import '../css/Works.css';


function Works() {

    const [visible, setVisible] = useState(false);

    function openModal(){
        setVisible(true);
    }

    function closeModal(){
        setVisible(false);
    }

  return(
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
            <Modal visible={visible} width="50%" effect="fadeInUp" onClickAway={() => this.closeModal()}>
                <div className="modalBox">
                    <div className="topLine">
                        <h1 className="modalTitle">Search Air Quality</h1>
                        <img src={closeBtn} className="closeBtn" onClick={closeModal} />
                    </div>
                    <img src={getAQI2} className="popImg" />
                    <div className="modalInfo">
                        <p>도시이름을 검색하면 미세먼지 수치를 알려주는 웹사이트 입니다.</p>
                        <div className="btnBox">
                            <div className="view">View Site</div>
                            <div className="view">View Code</div>
                        </div>
                    </div>
                </div>
            </Modal>
        </div>  
    </div>
  )
}

export default Works;