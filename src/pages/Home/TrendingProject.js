import React from 'react';
import bltbanner from '../../images/bltbanner.jpg';
import bltbannerright from '../../images/bltbannerright.jpg';
const TrendingProject = (props) =>{
  return (
    <div className="TrendingProject">
    <div className="hp_banner_left">
        <div className="bl_single_news"> <img src={bltbanner} alt="" />
            <div className="bl_single_text"> 
                <h4>20 Myths About Mobile Devices</h4>
            </div>
        </div>
        <div className="bl_single_news"> <img src={bltbanner} alt="" />
            <div className="bl_single_text">
                <h4>20 Myths About Mobile Devices</h4>
            </div>
        </div>
        <div className="bl_single_news"> <img src={bltbanner} alt="" />
            <div className="bl_single_text">
                <h4>20 Myths About Mobile Devices</h4>
            
            </div>
        </div>
    </div>
      <div className="hp_banner_right">
        <div className="br_single_news"> <img src={bltbannerright} alt="" />
            <div className="br_single_text"> 
                <h4>20 Myths About Mobile Devices</h4>
                
            </div>
        
        </div>
        <div className="br_single_news"> <img src={bltbannerright} alt="" />
            <div className="br_single_text"> 
                <h4>20 Myths About Mobile Devices</h4>
                
            </div>
        </div>
    </div>
    </div>
    );
}
export default TrendingProject;