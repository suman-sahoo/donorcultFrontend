import React from 'react';
import FundraiserProfileHeader from '../../Container/FundraiserProfileHeader';
import MyDonation from './MyDonation';
const Profile = (props) =>{
  return (
    <div className="dprofilebdy">
            <div className="row">
                 <FundraiserProfileHeader></FundraiserProfileHeader>
                 <div className="mdonationbdy">
                    <div className="container">
                        <h3>My Donations</h3>
                        <div className="mdonationptab">
                            <MyDonation  percent ={70}/>
                        </div>
                        <div className="mdonationptab">
                            <MyDonation percent ={50}/>
                        </div>
                        <div className="mdonationptab">
                            <MyDonation percent ={80}/>
                        </div>
                    </div>
                </div>
                <div className="mdbpbdy gcbg">
                    <div className="container">
                        <span className="mdbdyspan">Monthly Donor</span> Become our Partner 
                        <a className="anbtn" >Apply <span className="roundt">+</span></a>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Profile;