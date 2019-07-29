import React, { useState, useEffect } from 'react';
import project1 from '../image/pms1.PNG';
import airApp1 from '../image/airApp1.JPG';
import getAQI1 from '../image/getAQI1.jpg';
import '../css/Works.css';

function Works() {

  return(
    <div className="WorksContainer" id="works">
        <div className="topTitle">
            WORKS
        </div>
        <div className="workWrap">
            <div className="items">
                <img src={getAQI1} className="workImg"/>
            </div>
            <div className="items">
                <img src={airApp1} className="workImg"/>
            </div>
            <div className="items">
                <img src={project1} className="workImg"/>
            </div>
        </div>   
    </div>
  )
}

export default Works;