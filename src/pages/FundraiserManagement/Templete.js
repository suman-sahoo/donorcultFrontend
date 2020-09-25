import React from 'react';
import template1 from '../../images/template1.jpg';

const Templete = (props) =>{
  return (
    <div className="templatebdy">
        <div className="row">
            <div className="col col-lg-4 templateTab">
                <input className="pfpscheck" type="checkbox" />
                <img className="template1" src={template1} alt="" />
            </div>
            <div className="col col-lg-4 templateTab">
            <input className="pfpscheck" type="checkbox" />
                <img className="template1" src={template1} alt="" />
            </div>
            <div className="col col-lg-4 templateTab">
            <input className="pfpscheck" type="checkbox" />
                <img className="template1" src={template1} alt="" />
            </div>
        </div>
    </div>
    );
}
export default Templete;