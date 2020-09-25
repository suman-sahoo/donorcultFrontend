import React from 'react';
import HomeBannerSlider from '../../Container/HomeBannerSlider';
import house_icon from '../../images/house_icon.png';
const HomeBanner = (props) =>{
  return (
    <div className="tl-banner-section">
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-6 col-sm-6 col-xs-12 NoPadding">
                    <HomeBannerSlider />
                </div>
                <div className="col-md-5 col-sm-5 col-xs-12 col-md-offset-1 col-sm-offset-1">
                    <div className="banner-text">
                            <h2>Residential safety</h2>
                            <p>Premier electrical contractor, Handymen Electrical Services responds with licensed electricians.</p>
                    </div>
                    <div className="tl-banner-tabs-holder">
                        
                        <ul className="nav nav-tabs">
                            <li className="">
                                <span className="icon-house"><img src={house_icon} alt="" /></span>
                                <h4>Residential</h4>
                            </li>
                            <li className="">
                                <span className="icon-house"><img src={house_icon} alt="" /></span>
                                <h4>Residential</h4>
                            </li>
                            <li className="">
                                <span className="icon-house"><img src={house_icon} alt="" /></span>
                                <h4>Residential</h4>
                            </li>
                        </ul>
                        
                        
                    </div>
                </div>
            </div>
        </div>
    </div>

    );
}
export default HomeBanner;


