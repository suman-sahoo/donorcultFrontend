import React, {useState,useEffect} from 'react';
import { Link,Redirect } from 'react-router-dom';
import FundraiserProfileHeader from '../../Container/FundraiserProfileHeader';
import LeftBar from './LeftBar';
import DonorListing from './DonorListing';
import StoryListing from './StoryListing';
import Templete from './Templete';
import OldPoster from './OldPoster';
import UpdateStory from './UpdateStory';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { connect } from 'react-redux'
import { fundraiserProfileActions } from '../../action/index';
let innitialInfo = {photo:"",name:"",email:"",mobile_no:""};

const ManageFundRaise = (props) =>{
    const [profileData, setProfileData] = useState(innitialInfo);
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
    useEffect(() => {
        if(props.getuser) {
                setProfileData(props.getuser);
                // if(props.getuser.doc_for_pan) pt = pt+1
                // if(props.getuser.doc_for_dob) pt = pt+1
                // if(props.getuser.doc_for_location) pt = pt+1
                // if(props.getuser.photo) pt = pt+1
                // // if(props.getuser.doc_for_dob) pt = pt+1
                // // if(props.getuser.doc_for_dob) pt = pt+1
                // // if(props.getuser.doc_for_dob) pt = pt+1
                // // if(props.getuser.doc_for_dob) pt = pt+1
                // // if(props.getuser.doc_for_dob) pt = pt+1
                // setPercent(Math.round((pt/9)*100))


        }
    },[props.getuser]);
  return (
        <>
            <div className="dprofilebdy">
                <div className="row">
                    <FundraiserProfileHeader ></FundraiserProfileHeader>
                    <div className="container">
                        <div className="row">
                            <div className="col col-lg-8">
                                    <Paper square>
                                        <Tabs
                                            value={value}
                                            indicatorColor="primary"
                                            textColor="primary"
                                            onChange={handleChange}
                                            aria-label="disabled tabs example"
                                        >
                                            <Tab label="View" />
                                            <Tab label="Promote"  />
                                            <Tab label="Withdraw" />
                                            <Tab label="Manage" />

                                        </Tabs>
                                        </Paper>
                                       
                            </div>
                            <div className="col col-lg-6">

                            </div>
                        </div>
                    </div>
                        <div className="mdonationbdy mfpbdytab">
                                    
                            <div className="container">
                                
                                <div className="mdonationptab">
                                    <div className="row">
                                        <div className="col col-lg-4">
                                            <LeftBar />
                                            {value === 1 &&
                                             <div className="DonorsListBdy">
                                                
                                                <DonorListing />
                                            </div>
                                            }
                                           

                                        </div>
                                        <div className="col col-lg-8">
                                            <StoryListing></StoryListing>	
                                            <div className="AccountAuthenTab">
                                                <h3>Chose your template</h3>
                                                <div className="pfpstory">
                                                    <Templete />
                                                </div>
                                            </div>
                                            
											<div className="AccountAuthenTab">
												<h3>Old Posters</h3>
												<div className="pfpstory">
													<OldPoster />
												</div>
											</div>
                                            {value === 3 &&
                                                <div className="AccountAuthenTab">
					
                                                    <h3 className="mfupdate">Want to update?</h3>
                                                    <UpdateStory></UpdateStory>
                                                </div>
                                            }
                                        </div>
                                    </div>
                                </div>
                                {value === 3 &&
                                <div className="mdbpbdy">
									Want to become a donor
									<a href="#" class="btn-r2"> DONATE</a>
								</div>
                                }
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
  export default connect(mapState,actionCreators)(ManageFundRaise);

