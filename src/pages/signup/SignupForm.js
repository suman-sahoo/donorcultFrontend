import React, {useEffect} from 'react';
import { Link, useHistory } from 'react-router-dom';
import LoginSignupRightPannel from '../../Container/LoginSignupRightPannel';
import { makeStyles } from '@material-ui/core/styles';
import { useFormik } from 'formik';
import TextField from '@material-ui/core/TextField';
import { connect } from 'react-redux'
import { userActions } from '../../action/index';
let initialValues= {
    name:"",
    email:"",
    mobile_no:"",
    password:"",

  }


const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));
const SignupForm = (props) =>{
  let history = useHistory();

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
        if (!values.password) {
        errors.password = 'Required';
        }
        if (!values.password1) {
        errors.password1 = 'Required';
        }
        return errors;
    }
    const formik = useFormik({
        initialValues,
        validate,
        onSubmit: values => {
          console.log("values",values);
          props.user_signup(JSON.stringify(values))
         // props.handleNext();
        },
      });

    const classes = useStyles();
    useEffect(() => {
      // Update the document title using the browser API
      if(props.logedUesr) history.push("/fund-raiser-profile");
      },[props.logedUesr]);
  return (
    <div className="loginmbdy">
    <div className="col col-lg-5 loginbdyleft">
        <div className="loginlogo">
              <img src="http://ruedakolkata.com/donorcult/assets_web/images/logo.png" alt="logo" className="" />    
        </div>
        <form  onSubmit={formik.handleSubmit}>
            <h2>Sign Up</h2>
            <div className="form-group">
                <TextField id="standard-basic" label="Full Name"
                type="text" 
                name="name"   
                className="form-control"
                onChange={formik.handleChange}
                value={formik.values.name}
                error = {formik.errors.name?true:false}
                />
                <br/>  
            </div>
            <div className="clearfix"></div>
            <div className="form-group">
                <TextField id="standard-basic"
                label="Enter your email"              
                type="email"  
                name="email" 
                className="form-control"
                onChange={formik.handleChange}
                value={formik.values.email}
                error = {formik.errors.email?true:false}
                    />
                <br/> 
            </div>
            <div className="clearfix"></div>
            <div className="form-group">
                <TextField id="standard-basic" 
                label="Enter your mobile no" 
                type="text" 
                name="mobile_no"
                onChange={formik.handleChange}
                value={formik.values.mobile_no}
                error={formik.errors.mobile_no?true:false}
                className="form-control"/>
                <br/>
            </div>
            <div className="clearfix"></div>
            <div className="form-group">
            <TextField id="standard-basic" 
                label="Password"
                type="password" 
                className="form-control"
                name="password" 
                onChange={formik.handleChange}
                value={formik.values.password}
                error = {formik.errors.password?true:false}
                />
                <br/> 
            </div>
            



            <div className="clearfix"></div>
            <div className="form-group">
            <TextField id="standard-basic" 
                label="Confirm"
                type="password" 
                className="form-control"
                name="password1" 
                onChange={formik.handleChange}
                value={formik.values.password1}
                error = {formik.errors.password1?true:false}
                />
                <br/> 
            </div>

            <div className="clearfix"></div>

            <div className="clearfix"></div>

            <input type="submit" className="submitbtn" value="Sign Up"/>
        </form>
        
    
        <div className="signupbdy">
            <h5 className="ndc_bdy">Already a member?</h5>
            <Link className="submitbtn2" to="/Login">Login</Link>
        </div>
    </div>
    <div className="ybgbdy"></div>
    <LoginSignupRightPannel></LoginSignupRightPannel>


    </div>

    );
}

function mapState(state){
	return{
    logedUesr:state.userSignup.getuser
}
  }
  const actionCreators = {
    user_signup: userActions.user_signup,
  }
  export default connect(mapState,actionCreators)(SignupForm);