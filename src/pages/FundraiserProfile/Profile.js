import React, {useEffect,useState} from 'react';
import {LeftSide, RightSide} from './index';
import FundraiserProfileHeader from '../../Container/FundraiserProfileHeader';
import ProgressBar from '../../Container/ProgressBar';
import { connect } from 'react-redux'
import { fundraiserProfileActions } from '../../action/index';
let innitialInfo = {photo:"",name:"",email:"",mobile_no:""};
let pt = 0;
const Profile = (props) =>{
    const [profileData, setProfileData] = useState(innitialInfo);
    const [update, setUpdate] = useState(false);
    const [percent, setPercent] = useState(0);

    const stateUpdate = ()=>{
        setUpdate(!update);
        console.log("===========================",update)

    }
    useEffect(() => {
       props.get_authenticate_document(1);
   
        },[update]);
    useEffect(() => {
        if(props.getuser) {
                setProfileData(props.getuser);
                if(props.getuser.doc_for_pan) pt = pt+1
                if(props.getuser.doc_for_dob) pt = pt+1
                if(props.getuser.doc_for_location) pt = pt+1
                if(props.getuser.photo) pt = pt+1
                // if(props.getuser.doc_for_dob) pt = pt+1
                // if(props.getuser.doc_for_dob) pt = pt+1
                // if(props.getuser.doc_for_dob) pt = pt+1
                // if(props.getuser.doc_for_dob) pt = pt+1
                // if(props.getuser.doc_for_dob) pt = pt+1
                setPercent(Math.round((pt/9)*100))


        }
    },[props.getuser]);
        console.log(profileData,"profileData",pt);
  return (
   <>
    <div className="dprofilebdy">
        <div className="row">
             <FundraiserProfileHeader profileData= {profileData}></FundraiserProfileHeader>
             <div className="mdonationbdy">
                <div className="container">
                    <div className="row">
                    <div className="col col-lg-6">
                    <h3>Fundraiser</h3>
                    </div>
                    <div className="col col-lg-6">
                        <ProgressBar title = "Profile Strength" percent={percent} profileData= {profileData}></ProgressBar>
                    </div>
                </div>
                    <div className="mdonationptab">
                         <div className="row">
                            <LeftSide></LeftSide>
                            <div className="col col-lg-4">
                                <RightSide profileData= {profileData} stateUpdate = {stateUpdate}></RightSide>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  
   </>
    );
}

function mapState(state){
	return{
        getuser:state.fundRaiserProfile.getuser
	}
  }
  const actionCreators = {
	get_authenticate_document: fundraiserProfileActions.get_authenticate_document,
  }
  export default connect(mapState,actionCreators)(Profile);
