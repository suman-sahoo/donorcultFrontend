import React from 'react';
import bltbannerc from '../../images/bltbannerc.jpg'; 
import bltbannerright from '../../images/bltbannerright.jpg';
import bltbannerleft from '../../images/bltbannerleft.jpg';
const FundCategory = (props) =>{
  return (
    <div className="TrendingProject FunCategory">
				
    <div className="hp_banner_left_Left">
        <div className="bl_single_news big"> <img src={bltbannerleft} alt="" />
            <div className="bl_single_text"> 
                <h4>20 Myths About Mobile Devices</h4>
            </div>
        </div>
        <div className="bl_single_news"> <img src={bltbannerright} alt="" />
            <div className="bl_single_text">
                <h4>20 Myths About Mobile Devices</h4>
            </div>
        </div>
        <div className="bl_single_news"> <img src={bltbannerright} alt="" />
            <div className="bl_single_text">
                <h4>20 Myths About Mobile Devices</h4>
            </div>
        </div>
    </div>
    <div className="hp_banner_left_middle">
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
        <div className="br_single_news"> <img src={bltbannerright} alt="" />
            <div className="br_single_text"> 
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
<div className="br_single_news"> <img src={bltbannerc} alt="" />
    <div className="br_single_text"> 
        <h4>20 Myths About Mobile Devices</h4>
        
    </div>
</div>

</div>
</div>
    );
}
export default FundCategory;