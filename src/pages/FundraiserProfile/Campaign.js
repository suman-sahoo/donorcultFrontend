import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import facebookicon from '../../images/facebook_icon.png';
import googleicon from '../../images/google_icon.png';
import { Link } from 'react-router-dom';
import template1 from '../../images/template1.jpg';

const Campaign = (props) =>{
  return (
    <div>	
    <div className="Ctbar">
        <ul>
            <li className="Cheading">Campaign 1</li>
            <li className="sicon"><a href="#"><img src={facebookicon} alt="" /></a></li>
            <li className="sicon"><a href="#"><img src={googleicon} alt="" /></a></li>
        </ul>
    </div>
    <div className="row">
        
        <div className="col col-lg-9">
            <div className="camimg">
                <img src={template1} alt="phimg" style={{width : 240}}/>    
                <Link className="cviewbtn" to="/">View</Link>
            </div>
            <div className="phdetails campdetails">
                <h3>Title</h3>
                <h5>Start Date : 22.12.2200</h5>
                <h5>End Date : 22.12.2200</h5>
                <div className="gbdtbdy">
                    <div className="gbdtbdyleft">
                        <b>80</b><br/>Views
                    </div>
                    <div className="gbdtbdyright">
                        <b>25 days</b><br/>to go
                    </div>
                    <div className="ProgressBarbdy">  <div class="progress-con">
				<div class="progressbdy">
					<div class="bar" style={{width:`12%`}}></div>
				</div>
				<span class="price-b fleft">Total Raised</span>
				<div className="pbcenter">
					<span className="pbround">12%</span>
					<span class="per-b ">2 Lacs</span>
				</div>
				<span class="per-b float-right">20000</span>
			</div></div>
                </div>
                
            </div>
        </div>
        <div className="col col-lg-3">
            <div class="bottom-f">
                <Link to='/' className="btn-r"> Manage</Link>
                <a href="#" className="btn-r2"> Promote</a>
            </div>
            
        </div>
    </div>	

</div>

)

}
export  {Campaign};