import React, { useState, useEffect } from 'react';
import project1 from '../image/project1.PNG';
import '../css/Works.css';

function Works() {

  return(
    <div className="WorksContainer">
        <div className="topTitle">
            WORKS
        </div>
        <div className="workWrap">
            <div>
                <img src={project1} className="workImg"/>
            </div>
            <div>
                <img src={project1} className="workImg"/>
            </div>
            <div>
                <img src={project1} className="workImg"/>
            </div>
        </div>   
    </div>
  )
}

export default Works;