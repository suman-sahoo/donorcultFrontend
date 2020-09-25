import React, {useState} from 'react';
import { PhoneOutlined} from '@material-ui/icons';
import FacebookIcon from '@material-ui/icons/Facebook';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import AddDocument from './AddDocument';

const RightSide = (props) =>{
  const [modalOpen, setOpen] = useState(false);
  const [uploadFileType, setUploadFileType] = useState(false);
  const { profileData } = props;
  console.log(profileData,"profileDataprofileDataprofileData");

  const handleClickOpen = (type) => {
    setUploadFileType(type);
      setOpen(!modalOpen);
    };
  const handleClose = () => {
    props.stateUpdate();
      setOpen(!modalOpen);
    };
    
  return (
    
    <div className="AccountAuthenTab">
    <h3>Authenticate your account</h3>
    <div className="AAtab">
      <ul>
        <li>
          <div className="VlinkTabbdy">
            <div  className={profileData.phoneVarify==="N"?"VlinkTab":"VlinkTab active"}><PhoneOutlined /></div>
            <div className="VlinkTabline">{profileData.phoneVarify==="N"?"Verify":"Verifyed"}</div>
          </div>
        </li>
        <li>
          <div className="VlinkTabbdy">
            <div  className={profileData.emailVarify==="N"?"VlinkTab":"VlinkTab active"}><MailOutlineIcon /></div>
            <div className="VlinkTabline">{profileData.emailVarify==="N"?"Verify":"Verifyed"}</div>
          </div>
        </li>
        <li>
          <div className="VlinkTabbdy">
            <div  className={profileData.facebook==="N"?"VlinkTab":"VlinkTab active"}><FacebookIcon /></div>
            <div className="VlinkTabline">{profileData.facebook==="N"?"Verify":"Verifyed"}</div>
          </div>
        </li>
        <li>
          <div className="VlinkTabbdy">
            <div className={profileData.linkdin==="N"?"VlinkTab":"VlinkTab active"}><LinkedInIcon /></div>
            <div className="VlinkTabline">{profileData.linkdin==="N"?"Verify":"Verifyed"}</div>
          </div>
        </li>
        <li>
          <div className="VlinkTabbdy">
            <div className={profileData.doc_for_pan?"VlinkTab active":"VlinkTab"}>PAN</div>
            <div className="VlinkTabline" onClick={()=>handleClickOpen("PAN")}>{profileData.doc_for_pan?"Update":"Add"}</div>
          </div>
        </li>
        <li>
          <div className="VlinkTabbdy">
            <div className={profileData.doc_for_aadhar?"VlinkTab active":"VlinkTab"}>Aadh</div>
            <div className="VlinkTabline" onClick={()=>handleClickOpen("Aadhar")}>{profileData.doc_for_aadhar?"Update":"Add"}</div>
          </div>
        </li>
        <li>
          <div className="VlinkTabbdy">
            <div className={profileData.photo?"VlinkTab active":"VlinkTab"}>Photo</div>
            <div className="VlinkTabline" onClick={()=>handleClickOpen("Photo")}>{profileData.photo?"Update":"Add"}</div>
          </div>
        </li>
        <li>
          <div className="VlinkTabbdy">
            <div className={profileData.doc_for_dob?"VlinkTab active":"VlinkTab"}>DOB</div>
            <div className="VlinkTabline" onClick={()=>handleClickOpen("DOB")}>{profileData.doc_for_dob?"Update":"Add"}</div>
          </div>
        </li>
        <li>
          <div className="VlinkTabbdy">
            <div className={profileData.doc_for_location?"VlinkTab active":"VlinkTab"}>Location</div>
            <div className="VlinkTabline" onClick={()=>handleClickOpen("Location")}>{profileData.doc_for_location?"Update":"Add"}</div>
          </div>
        </li>
      </ul>
    </div>
    <AddDocument open = {modalOpen} uploadFileType = {uploadFileType} handleClose = {handleClose}></AddDocument>
  </div>

    );
}
export  {RightSide};