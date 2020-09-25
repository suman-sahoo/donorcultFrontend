import React, {useEffect} from 'react';
import { Link, useHistory } from 'react-router-dom';
import LoginSignupRightPannel from '../../Container/LoginSignupRightPannel';
import fbicon from '../../images/fb.png';
import gicon from '../../images/gicon.png';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { useFormik } from 'formik';
import { connect } from 'react-redux'
import { userActions } from '../../action/index';

let initialValues= {
    email: '',
    password:''
  }
const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));
const LoginForm = (props) =>{
    let history = useHistory();
    const classes = useStyles();
    const validate = values => {
        const errors = {};
        if (!values.email) {
          errors.email = 'Required';
        }
        if (!values.password) {
            errors.password = 'Required';
        }else if(values.password.password<8){
            errors.password = 'Enter 8 digit password.';
        }
        
        return errors;
    }
    const formik = useFormik({
        initialValues,
        validate,
        onSubmit: values => {
          console.log("values",values);
          props.user_login(values);
        },
      });
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
        <form className={classes.root}  autoComplete="off" onSubmit={formik.handleSubmit}>
            <h2>Login to your Account</h2>
            <span className="error"></span>
            <div className="username">
                 <TextField id="standard-basic" label="Username or Mobile No"
                    type="text"
                    className="textfld"
                    autoComplete="off"
                    error = {formik.errors.email?true:false}
                    value=""
                    variant="filled"
                    onChange={()=>{}}
                    name="email"
                    onChange={formik.handleChange}
                    value={formik.values.email}/> 
                
            </div>

            <div className="password">
                 <TextField id="standard-basic" label="Password or OTP"
                    type="password"
                    className="textfld"
                    error = {formik.errors.password?true:false}
                    value=""
                    variant="filled"
                    autoComplete="off"
                    onChange={()=>{}}
                    name="password"
                    onChange={formik.handleChange}
                    value={formik.values.password}/> 
                {/* {
                    this.state.showtimer===""?"":(<span>Time :{this.state.timing}</span>)
                } */}
            </div>
            {/* {
                this.state.showtimer===''?(<a className="ropt" href="#" onClick={this.genotp}>Send OTP</a>):
                (<a className="ropt" href="#" onClick={this.genotp}>Resend OTP</a>)
            } */}
            
            <Link to="/register">Forgot your password?</Link>
            <div className="Lbtnbdy">
                <input type="submit" className="submitbtn Loginright" value="Login"  />
            </div>
        </form>
        <div className="text-divider mb-3"> 
            Sign in with
            <a href="#"><img src={fbicon}alt="" /></a>
            <a href="#"><img src={gicon} alt="" /></a>
        </div>
        <div className="signupbdy">
            <h5 className="ndc_bdy">New to Donor Cult?</h5>
            <Link className="submitbtn2" to="/signup">Sign Up</Link>
            <h5 className="ndc_bdy">for free</h5>
        </div>
        
    </div>
    <div className="ybgbdy"></div>
    <LoginSignupRightPannel></LoginSignupRightPannel>


    </div>

    );
}
function mapState(state){
	return{
        logedUesr:state.userLogin.getuser
	}
  }
  const actionCreators = {
	user_login: userActions.user_login,
  }
  export default connect(mapState,actionCreators)(LoginForm);
