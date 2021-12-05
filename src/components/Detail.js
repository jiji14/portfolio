import React from 'react';
import { useTranslation } from 'react-i18next';
import '../css/Detail.css';

function Detail({title, details}){

    const _title = title.toUpperCase();
    const { t }  = useTranslation(['page']);

    return(
        <div className={title}>
            <div className="title">
                {_title}
            </div>

            <div className="details">
                {details.map((detail, i) => {
                    return(
                        <div className="detailBox" key={detail+i}>
                            <p >{t(detail.course)}</p>
                            <ul>{detail.detail && detail.detail.map((item)=>{
                                return <li className="item">{t(item)}</li>
                            })}</ul>
                            <p className="term">{t(detail.term)}</p>
                        </div>
                    )
                })}
            </div>
        </div> 
    )
}

export default Detail;