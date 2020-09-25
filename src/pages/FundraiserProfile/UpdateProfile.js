import React,{useEffect} from 'react';
import editicon from '../../images/editicon.png';
import { useFormik } from 'formik';
import TextField from '@material-ui/core/TextField';
import { connect } from 'react-redux'
import { userActions } from '../../action/index';
const donorData = JSON.parse(localStorage.getItem('donorData'));
let Id = "";
if(donorData && donorData.id)
    Id = donorData.id;
let initialValues= {
    name:"",
    email:"",
    name:"",
    address:"",
    pancard:"",
    adharcard:"",
    password:"",

  }

const UpdateProfile = (props) =>{
    const { userInfo } = props;

    useEffect(() => {
        props.user_info_fatchdata();
    
         },[]);
console.log(userInfo,"userInfouserInfo")
    if(userInfo){
        initialValues.name = userInfo.name
        initialValues.email = userInfo.email
        initialValues.mobile_no = userInfo.mobile_no
        initialValues.address = userInfo.address
        initialValues.pancard = userInfo.pancard
        initialValues.adharcard = userInfo.adharcard

    }
    const validate = values => {
        const errors = {};
        if (!values.name) {
          errors.name = 'Required';
        }
        if (!values.email) {
            errors.email = 'Required';
        } 
        if (!values.mobile_no) {
            errors.mobile_no = 'Required';
        }
        if (!values.adharcard) {
        errors.adharcard = 'Required';
        }
        if (!values.address) {
        errors.address = 'Required';
        }
        if (!values.pancard) {
        errors.pancard = 'Required';
        }
        // if (!values.password) {
        // errors.password = 'Required';
        // }
        return errors;
    }
    const formik = useFormik({
        enableReinitialize:true,
        initialValues,
        validate,
        onSubmit: values => {
          console.log("values",values);
          values.id = Id;
         props.user_info_update(JSON.stringify(values));
        },
      });

  return (
 
    <div className="row">
        <div className="dprofile_header dpeheaderbdy">
            <div className="container">
                <div className="row dpeheader">
                <img className="editicon" src={editicon} alt="Logo" />
                Edit Profile
                </div>
            </div>
        </div>
        <div className="editprofile">
            <div className="loginbdyleft">
                <form onSubmit={formik.handleSubmit}>
                    <h6 className="heading-small text-muted mb-4">User information</h6>
                    <div className="row">
                        <div className="col col-lg-12">
                            <div className="form-group">
                                <div className="form-control-label"></div> 
                                <TextField id="standard-basic"
                                    label="Full Name"  
                                    type="text" 
                                    name="name"  
                                    variant="outlined" 
                                    className="form-control" 
                                    onChange={formik.handleChange}
                                    value={formik.values.name}
                                    error = {formik.errors.name?true:false}
                                    />
                                </div>
                        </div>
                    </div>
                    <div className="clearfix"></div>
                    <div className="row">
                            <div className="col-lg-6">
                                <div className="form-group">
                                    <div className="form-control-label" ></div> 
                                    <TextField id="standard-basic"
                                    label="Email address" 
                                    type="email"  
                                    name="email"
                                    variant="outlined" 
                                    className="form-control"
                                    onChange={formik.handleChange}
                                    value={formik.values.email}
                                    error = {formik.errors.email?true:false}
                                     />
                                    </div>
                            </div>
                        <div className="col col-lg-6">
                            <div className="form-group">
                                <div className="form-control-label"></div> 
                                
                                 <TextField id="standard-basic"
                                 label="Mobile No" 
                                 type="number" 
                                 name="mobile_no"
                                 variant="outlined"
                                 onChange={formik.handleChange}
                                 value={formik.values.mobile_no}
                                 error = {formik.errors.mobile_no?true:false}
                                 className="form-control"/>
                            </div>
                        </div>
                    </div>
                    <hr className="my-4"></hr>

                    <h6 className="heading-small text-muted mb-4">Contact information</h6>
                    <div className="clearfix"></div>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="form-group">
                                <div className="form-control-label" htmlFor="input-address"></div> 
                                <TextField id="standard-basic"
                                label="Address"
                                type="text"
                                className="form-control"
                                name="address"  
                                variant="outlined"
                                onChange={formik.handleChange}
                                value={formik.values.address}
                                error = {formik.errors.address?true:false}
                                    />
                            </div>
                        </div>
                    </div>
                    <div className="clearfix"></div>
                    <div className="row">
                        <div className="col-lg-4">
                            <div className="form-group">
                                <div className="form-control-label"></div> 
                                <TextField id="standard-basic"
                                type="text" 
                                label="Aadharcard No"
                                className="form-control"  
                                name="adharcard" 
                                variant="outlined"
                                onChange={formik.handleChange}
                                value={formik.values.adharcard}
                                error = {formik.errors.adharcard?true:false}
                                />
                            </div>
                        </div>
                    <div className="col-lg-4">
                        <div className="form-group">
                            <div className="form-control-label"></div> 
                            <TextField id="standard-basic"
                            type="text"
                            label="Pancard No"
                            className="form-control" 
                            name="pancard" 
                            variant="outlined"
                            onChange={formik.handleChange}
                            value={formik.values.pancard}
                            error = {formik.errors.pancard?true:false}
                            
                            />
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="form-group">
                            <div className="form-control-label"></div> 
                            <TextField id="standard-basic"
                            label="Password"
                            type="password" 
                            className="form-control"
                            name="password" 
                            variant="outlined"
                            disabled
                            onChange={formik.handleChange}
                            value={formik.values.password}
                            error = {formik.errors.password?true:false}

                                />
                        </div>
                    </div>
                </div>
                    <div check>
                    <input className="form-control2" type="checkbox" />
                    <div className="form-control-label">Check me out</div>
                    </div>
                    <input type="submit" className="submitbtn" value="Save"  />
                </form>
            </div>
        </div>
    </div>
    );
}
function mapState(state){
	return{
        userInfo:state.user_info_fatchdata.getuser
	}
  }
  const actionCreators = {
    user_info_update: userActions.user_info_update,
    user_info_fatchdata: userActions.user_info_fatchdata,

  }
  export default connect(mapState,actionCreators)(UpdateProfile);