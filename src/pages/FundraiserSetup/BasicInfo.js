import React, {useState} from 'react';

import TextField from '@material-ui/core/TextField';
import { useFormik } from 'formik';
let initialValues= {
    fullname:'',
    email: '',
    fullname:'',
    mobile_no:'',
    address:'',
    pan_card:'',
    adhar_card:''

  }
const BasicInfo = (props) =>{
    const validate = values => {
        const errors = {};
        if (!values.fullname) {
          errors.fullname = 'Required';
        }
        if (!values.email) {
            errors.email = 'Required';
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
            errors.email = 'Invalid email address';
        }
        if (!values.mobile_no) {
            errors.mobile_no = 'Required';
        }else if(values.mobile_no.length<10){
            errors.mobile_no = 'Enter 10 digit mobile no.';
        }
          if (!values.address) {
            errors.address = 'Required';
          }
          if (!values.pan_card) {
            errors.pan_card = 'Required';
          }
          if (!values.adhar_card) {
            errors.adhar_card = 'Required';
          }
        //return errors;
    }
    const formik = useFormik({
        initialValues,
        validate,
        onSubmit: values => {
          console.log("values",values);
          props.handleNext();
        },
      });
  return (
      <>
      <div className="bifbdy">
         <form  autoComplete="off" onSubmit={formik.handleSubmit}>
            <h6 class="heading-small text-muted mb-4">Basic Info of campaigner</h6>
            <div className="row">
                <div className="col col-lg-12">
                    <div className="form-group">
                        <div className="form-control-label"></div> 
                        <TextField 
                        error={formik.errors.fullname?true:false}
                        id="standard-basic" 
                        label="Full Name" 
                        variant="outlined" 
                        type="text" 
                        name="fullname" 
                        className="form-control" 
                        onChange={formik.handleChange}
                        value={formik.values.fullname}/>  
                    </div>
                </div>
            </div>
            <div class="clearfix"></div>
            <div className="row">
                <div className="col col-lg-6">
                    <div className="form-group">
                        <div className="form-control-label"></div> 
                        <TextField
                        error={formik.errors.email?true:false}
                        id="standard-basic"
                        label="Email address" 
                        variant="outlined"
                        type="email" 
                        name="email"
                        className="form-control"
                        onChange={formik.handleChange}
                        value={formik.values.email}/>   
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="form-group">
                        <div className="form-control-label"></div> 
                        <TextField 
                        error={formik.errors.mobile_no?true:false}
                        id="standard-basic" 
                        label="Mobile number"
                        variant="outlined"
                        type="number"
                        name="mobile_no"
                        className="form-control" 
                        onChange={formik.handleChange}
                        value={formik.values.mobile_no}/>                    
                    </div>
                </div>
            </div>
            <div class="clearfix"></div>
            <div className="row">
                <div className="col-md-12">
                    <div className="form-group">
                        <div className="form-control-label"></div> 
                        <TextField 
                        error={formik.errors.address?true:false}
                        id="standard-basic" 
                        label="Home Address" 
                        variant="outlined"  
                        className="form-control" 
                        name="address" 
                        onChange={formik.handleChange}
                        value={formik.values.address}/>                    
                    </div>
                </div>
            </div>
            <div class="clearfix"></div>
            <div className="row">
                <div className="col-lg-6">
                    <div className="form-group">
                        <div className="form-control-label"></div> 
                        <TextField 
                        error={formik.errors.pan_card?true:false}
                        id="standard-basic" 
                        label="Pan Card"  
                        variant="outlined" 
                        type="text" 
                        name="pan_card"
                        className="form-control" 
                        onChange={formik.handleChange}
                        value={formik.values.pan_card}/>                 
                    </div>
                </div>
            <div className="col-lg-6">
                <div className="form-group">
                    <div className="form-control-label"></div> 
                    <TextField 
                    error={formik.errors.adhar_card?true:false}
                    id="standard-basic" 
                    label="Adhar Card"  
                    variant="outlined" 
                    type="text" 
                    name="adhar_card"
                    className="form-control"  
                    onChange={formik.handleChange}
                    value={formik.values.adhar_card}/>              
                </div>
            </div>

            </div>
            <div className="row">
            <div className="col-lg-3">
                <div className="form-group">
                <input type="button"  className="submitbtnnext" variant="contained" color="primary" value="Back" onClick={()=>props.handleBack()} />

                </div>
            </div>
            <div className="col-lg-3">
                <div className="form-group">
                <input type="submit" name="save"  id="save" className="submitbtnnext" variant="contained" color="primary" value="Save"/>

                </div>
            </div>
        </div>                    
        
    </form>
    </div>
 
   
    </>);
}
export default BasicInfo;