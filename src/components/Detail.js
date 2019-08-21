import React from 'react';

function Detail({title, details}){

    const _title = title.toUpperCase();

    return(
        <div className={title}>
            <div className="title">
                {_title}
            </div>

            <div className="details">
                {details.map((detail, i) => {
                    return(
                        <div className="detailBox" key={detail+i}>
                            <p >{detail.course}</p>
                            <p className="term">{detail.term}</p>
                        </div>
                    )
                })}
            </div>
        </div> 
    )
}

export default Detail;