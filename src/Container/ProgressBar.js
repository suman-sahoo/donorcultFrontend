import React from 'react';


const ProgressBar = (props) =>{

  return (
    <div className="ProgressBarbdy fright">  
        <div className="progress-con">
            <span className="price-b">{props.title}</span>
            <span className="per-b float-right">{props.percent}%</span>
            <div className="progressbdy">
                <div className="bar" style={{width:props.percent}}>
                </div>
            </div>
        </div>
    </div>
    );
}
export default ProgressBar;