import React, {useEffect, useState} from 'react';
import '../css/Home.css';
import down from '../image/doubleDown.png';

function Home() {

  const [index, setIndex] = useState(0);
  const [isTextChanged, setIsTextChanged] = useState(true);
  const texts = ["Jijeong Lee, Front-End Engineer", "Webapps, Mobile apps", "React Javascript Typescript Firebase"];
  
  useEffect(()=>{
    setTimeout(()=>{
      setIndex((index+1) % 3);
      setIsTextChanged(false);
    }, [4000])
  }, [index])

  useEffect(()=>{
    if(!isTextChanged) setIsTextChanged(true);
  }, [isTextChanged])

  return(
    <div className="home" id="home">
        {
        isTextChanged &&
        <div className="mainText">
          {texts[index]}
        </div>
        }
        <div className="goDown" >
            <a href="#footer">
              <img src={down} className="downImg" alt="" />
            </a>
        </div>
    </div>
  )
}

export default Home;