import React from 'react';
import { Link } from 'react-router-dom';
const LoginSignupRightPannel = (props) =>{
  return (
    <div className="col col-lg-7 loginbdyright">
        <div className="row">
        
    <div className="col col-lg-6">
        <div className="ui card">
            <div className="image">
                <img src="https://d2aq6dqxahe4ka.cloudfront.net/assets/uploads/campaigns_gallery/Ashish-fundraiser-1593006878.jpg" width="100%" />
            </div>
            <div className="content">
                <div className="header">Join Us In Fighting The BIG War !</div>
                <div className="description">by AUSHDHI SOCIAL WELFARE</div>
            </div>
            <div className="progress-con">
                <span className="price-b"> ₹ 1,84,216 <small>Raised</small></span> 
                <span className="per-b float-right">37%</span>
                <div className="progressbdy"><div className="bar"></div></div>
            </div>
            
            <div className="bottom-f"><a href="#" className="btn-r"> DONATE</a></div>
        </div>
    </div>
    <div className="col-lg-6">
        <div className="ui card">
            <div className="image">
                <img src="https://d2aq6dqxahe4ka.cloudfront.net/assets/uploads/campaigns_gallery/Rupantaran-fundraiser-1590922748.webp" width="100%" />
            </div>
            <div className="content">
                <div className="header">Amphan Relief - Restore A Family</div>
                <div className="description">by Neeta Maurya</div>
                
            </div>
            <div className="progress-con">
                <span className="price-b"> ₹ 1,84,216 <small>Raised</small></span> 
                <span className="per-b float-right">37%</span>
                <div className="progressbdy"><div className="bar"></div></div>
            </div>
            
            <div className="bottom-f"><a href="#" className="btn-r"> DONATE</a></div>
        </div>
    </div>
    </div>
    </div>
    );
}
export default LoginSignupRightPannel;