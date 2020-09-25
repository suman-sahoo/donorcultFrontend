import React from 'react';
import ProgressBar from '../../Container/ProgressBar';
const MyDonation = (props) =>{
    return(
        <div className="phbdytab">
        <div className="container">
                <div className="row">
                    <div className="col col-lg-9">
                        <div className="phtabimg">
                            <img src="https://images.milaap.org/milaap/image/upload/v1488174630/production/images/campaign/IMG_20161120_175255_1488172670_1488174623.jpg?crop=faces&format=jpg&height=198&mode=crop&width=264" alt="phimg" className="" />    
                        </div>
                        <div className="phdetails">
                            <h3>Help Shajan to Support Women Acid Attack Survivors</h3>
                            <p className="description">I am very sure I don't want to be defined by the designation on my visiting card. Material goals are easy to achieve...</p>
                            <h4>Rs. <b>5000 /-</b></h4>
                            <div className="ProgressBarbdy">
                               <ProgressBar title = "Amount raised" percent={props.percent}></ProgressBar>

                            </div>
                        </div>
                    </div>
                    <div className="col col-lg-3 phtabr">
                        <div class="bottom-f">
                            <a href="#" class="btn-r"> DONATE</a>
                            <div className="phtabrul">
                                <ul>
                                    <li><a href="">Payment Details</a></li>
                                    <li><a href="">Tax Recipt</a></li>
                                </ul>
                            </div>
                        </div>
                        
                    </div>
                </div>	
        </div>
    </div>
     
    );
    
}
export default MyDonation;