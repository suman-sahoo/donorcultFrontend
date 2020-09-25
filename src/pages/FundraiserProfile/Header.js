import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import CameraAltOutlinedIcon from '@material-ui/icons/CameraAltOutlined';
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
import { Link } from 'react-router-dom';
const Header = (props) =>{
  return (
      <>
        <div className="dprofile_header">
            <div className="container">
                    <div className="row">
                        <div className="col col-lg-12">
                            <div className="dpimg">
                                <img src="" alt="dpimg" className="" />
                                {/* <input type="file" name="file"  id="file" ref={(ref) => this.file = ref} style={{ display: 'none' }} onChange={this.handleprofileimg} /> */}
                                <div className="cameraiconbdy" onClick={(e) => {} } style={{ cursor: 'pointer' }}><CameraAltOutlinedIcon className="cameraicon" /></div> 
                            </div>
                            <div className="dprofiledetails">
                                <h3> <Link to="/editprofile/" className="editbdy"><EditOutlinedIcon  className="cameraicon"/> </Link></h3>
                                <h4><img src="" /> Suman Sahoo</h4>
                                <h4><FontAwesomeIcon icon="faEnvelope" />sumansahoo@gmail.com</h4>
                                <h4><FontAwesomeIcon icon="faAddressCard" /> 8927976380</h4>
                                <Link className="editbdy2" to="/logout/">Logout</Link>
                            </div>
                        </div>
                    </div>	
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
export  {Header};