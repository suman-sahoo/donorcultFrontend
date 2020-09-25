import React,{useEffect} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import CameraAltOutlinedIcon from '@material-ui/icons/CameraAltOutlined';
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
import { Link, useHistory } from 'react-router-dom';
import template1 from '../images/template1.jpg';
import { connect } from 'react-redux'
import { userActions } from '../action/user.actions';
const FundraiserProfileHeader = (props) =>{
    const { profileData,userInfo } = props;
    console.log(props.photo,"props.photoprops.photo");
    let history = useHistory();
    useEffect(() => {
        props.user_info_fatchdata();
    
         },[]);
    const logout = () =>{
        localStorage.removeItem("donorData");
        
        history.push("/login");
    }
    //console.log(props.userInfo,"userInfouserInfouserInfouserInfouserInfo")
  return (
      <>
        <div className="dprofile_header">
            <div className="container">
                {props.userInfo && 
                    <div className="row">
                        <div className="col col-lg-12">
                            <div className="dpimg">
                                <img src={userInfo.photo?userInfo.photo:""} alt="dpimg" className="" />
                                <input type="file" name="file"  id="file" ref={(ref) => {}} style={{ display: 'none' }} onChange={()=>{}}/>
                                <div className="cameraiconbdy" onClick={(e) => {} } style={{ cursor: 'pointer' }}><CameraAltOutlinedIcon className="cameraicon" /></div> 
                            </div>
                            <div className="dprofiledetails">
                                <h3> <Link to="/update-profile" className="editbdy"><EditOutlinedIcon  className="cameraicon"/> </Link></h3>
                                <h4><img src="" /> {userInfo.name?userInfo.name:""}</h4>
                                <h4><FontAwesomeIcon icon="faEnvelope" />{userInfo?.email?userInfo.email:""}</h4>
                                <h4><FontAwesomeIcon icon="faAddressCard" /> {userInfo.mobile_no?userInfo.mobile_no:""}</h4>
                                <div onClick={()=>{logout()}}>Logout</div>
                            </div>
                        </div>
                    </div>	
                    }
            </div>
        </div>
        <div className="dnowbdy">
            <h4>100,000 Fund Raise</h4>
            <div className="roundbdy">
                <div className="round"><a href="">+</a></div>
                
            </div>
            <h5>232 donors</h5>
        </div>
    </>
    );
}

function mapState(state){
	return{
        userInfo:state.user_info_fatchdata.getuser
	}
  }
  const actionCreators = {
	user_info_fatchdata: userActions.user_info_fatchdata,
  }
  export default connect(mapState,actionCreators)( FundraiserProfileHeader);
