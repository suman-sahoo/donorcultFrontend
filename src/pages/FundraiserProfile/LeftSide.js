import React, {useState} from 'react';
import WithdrawlRequestModal from './WithdrawlRequestModal';
import {Campaign} from './Campaign';
const LeftSide = (props) =>{
  const [modalOpen, setOpen] = useState(false);
  const handleClick = (type) => {
    console.log(modalOpen);
      setOpen(!modalOpen);
    };
  return (
  

    // <div className="mdonationbdy">
    // <div className="container">
    //   <div className="row">
    //     <div className="col col-lg-6">
    //       <h3>Fundraiser</h3>
    //     </div>
    //     <div className="col col-lg-6">
    //       <div className="ProgressBarbdy fright">  
    //         <div className="progress-con">
    //             <span className="price-b">Profile Strength </span>
    //             <span class="per-b float-right">70%</span>
    //             <div className="progressbdy">
    //                 <div className="bar" style={{width:`70%`}}>
    //                 </div>
    //             </div>
    //         </div>
    //     </div>
    //     </div>
    //   </div>
    //   <div className="mdonationptab">
    //     <div className="row">


          <div className="col col-lg-8">
            <Campaign />
            <div className="dseebdy">
              <h4>23 donors</h4>
              <ul>
                <li><div className="sround"></div></li>
                <li><div className="sround"></div></li>
                <li><div className="sround"></div></li>
              </ul>
              <a href="#">See List</a> 
              <a  className="wdbtn" >Withdraw</a>
            </div>
            <div className="WNBox">
              <div className="gbdtbdy gbdtbdym">
                <div className="gbdtbdyright">
                  <b>Raisal in USD</b><br/> 50
                </div>
                <div className="gbdtbdyleft">
                  <b>Raisal in INR</b><br/> 200000
                </div>
                
                
              </div>
              <div className="row withfbdy">
                <div className="col col-lg-6 withfbdyL">
                  <div className="fld">Platform fee</div>
                </div>
                <div className="col col-lg-6 withfbdyR">
                  <div className="fld">Rs. 6000</div>
                </div>
              </div>
              <div className="row withfbdy">
                <div className="col col-lg-6 withfbdyL">
                  <div className="fld">Payment Gateway</div>
                </div>
                <div className="col col-lg-6 withfbdyR">
                  <div className="fld">Rs. 4000</div>
                </div>
              </div>
              <div className="row withfbdy">
                <div className="col col-lg-6 withfbdyL">
                  <div className="fld">Already withdrawn</div>
                </div>
                <div className="col col-lg-6 withfbdyR">
                  <div className="fld">Rs. 6000</div>
                </div>
              </div>
              <div className="row withfbdy">
                <div className="col col-lg-6 withfbdyL">
                  <div className="fld">GST<small>(12%)</small></div>
                </div>
                <div className="col col-lg-6 withfbdyR">
                  <div className="fld">Rs. 6000</div>
                </div>
              </div>
              <div className="row withfbdy">
                <div className="col col-lg-6 withfbdyL">
                  <div className="fld">Available for withdrawal</div>
                </div>
                <div className="col col-lg-6 withfbdyR">
                  <div className="fld">Rs. 6000</div>
                </div>
              </div>
            </div>
            <a onClick={()=>handleClick()} className="btn-r3"> Withdraw now</a>
            <WithdrawlRequestModal open = {modalOpen} handleClick = {handleClick}></WithdrawlRequestModal>
          </div>

    );
}
export  {LeftSide};