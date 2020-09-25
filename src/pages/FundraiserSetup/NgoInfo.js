import React from 'react';
import TextField from '@material-ui/core/TextField';
import { useFormik } from 'formik';
let initialValues= {
    ngo_name:"",
    office_address:"",
    field_address:"",
    ngo_phone:"",
    ngo_email:"",
    a12A:"",
    a80G:"",
    fcra:"",
    foreign_tax_benefit:"",
  }

const NgoInfo = (props) =>{
    const validate = values => {
        const errors = {};
        if (!values.ngo_name) {
          errors.ngo_name = 'Required';
        }
        if (!values.office_address) {
            errors.office_address = 'Required';
        } 
        if (!values.field_address) {
            errors.field_address = 'Required';
        }
        if (!values.ngo_phone) {
        errors.ngo_phone = 'Required';
        }
        if (!values.ngo_email) {
        errors.ngo_email = 'Required';
        }
        if (!values.a12A) {
            errors.a12A = 'Required';
        }
        if (!values.a80G) {
            errors.a80G = 'Required';
        }
        if (!values.fcra) {
            errors.fcra = 'Required';
        }
        if (!values.foreign_tax_benefit) {
            errors.foreign_tax_benefit = 'Required';
        }
        return errors;
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
    <div className="bifbdy">
         <form onSubmit={formik.handleSubmit}>
            <h6 class="heading-small text-muted mb-4">NGO Details</h6>
            <div className="row">
                <div className="col col-lg-4">
                    <div className="form-group">
                        <div className="form-control-label"></div> 
                        <TextField id="standard-basic"
                        label="NGO Name"  
                        type="text" 
                        name="ngo_name"  
                        variant="outlined" 
                        className="form-control" 
                        onChange={formik.handleChange}
                        value={formik.values.ngo_name}
                        error = {formik.errors.ngo_name?true:false}
                        />
                    </div>
                </div>
                <div className="col col-lg-4">
                    <div className="form-group">
                        <div className="form-control-label"></div> 
                        <TextField id="standard-basic"
                        label="Office Address"  
                        type="text" 
                        name="office_address"  
                        variant="outlined" 
                        className="form-control" 
                        onChange={formik.handleChange}
                        value={formik.values.office_address}
                        error = {formik.errors.office_address?true:false}
                        />
                    </div>
                </div>
                <div className="col col-lg-4">
                    <div className="form-group">
                        <div className="form-control-label"></div> 
                        <TextField id="standard-basic"
                        label="Field Address"  
                        type="text" 
                        name="field_address"  
                        variant="outlined" 
                        className="form-control" 
                        onChange={formik.handleChange}
                        value={formik.values.field_address}
                        error = {formik.errors.field_address?true:false}
                        />
                    </div>
                </div>
            </div>
            <div class="clearfix"></div>
            <div className="row">
                <div className="col col-lg-4">
                    <div className="form-group">
                        <div className="form-control-label"></div> 
                        <TextField id="standard-basic"
                        label="Phone"
                        type="text"  
                        name="ngo_phone"
                        variant="outlined" 
                        className="form-control"
                        onChange={formik.handleChange}
                        value={formik.values.ngo_phone}
                        error = {formik.errors.ngo_phone?true:false}
                            />
                    </div>
                </div>
                <div className="col col-lg-4">
                    <div className="form-group">
                        <div className="form-control-label"></div> 
                        <TextField id="standard-basic"
                        label="Email address" 
                        type="email"  
                        name="ngo_email"
                        variant="outlined" 
                        className="form-control"
                        onChange={formik.handleChange}
                        value={formik.values.ngo_email}
                        error = {formik.errors.ngo_email?true:false}
                            />
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="form-group">
                            <div className="form-control-label"></div> 
                        <TextField id="standard-basic" 
                        label="12 A" 
                        variant="outlined" 
                        type="text" 
                        name="a12A" 
                        className="form-control"  
                        onChange={formik.handleChange}
                        value={formik.values.a12A}
                        error = {formik.errors.a12A?true:false}
                        />
                    </div>
                </div>
            </div>
            <div class="clearfix"></div>
            <div className="row">
                <div className="col-md-4">
                    <div className="form-group">
                        <div className="form-control-label"></div> 
                        <TextField id="standard-basic" 
                        label="80G" 
                        variant="outlined"  
                        className="form-control" 
                        name="a80G" 
                        onChange={formik.handleChange}
                        value={formik.values.a80G}
                        error = {formik.errors.a80G?true:false} />
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="form-group">
                        <div className="form-control-label"></div> 
                        <TextField id="standard-basic" 
                        label="FCRA" 
                        variant="outlined"  
                        className="form-control" 
                        name="fcra" 
                        onChange={formik.handleChange}
                        value={formik.values.fcra}
                        error = {formik.errors.fcra?true:false} />
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="form-group">
                        <div className="form-control-label"></div> 
                        <TextField id="standard-basic" 
                        label="Foreign tax benefit" 
                        variant="outlined"  
                        className="form-control" 
                        name="foreign_tax_benefit" 
                        onChange={formik.handleChange}
                        value={formik.values.foreign_tax_benefit}
                        error = {formik.errors.foreign_tax_benefit?true:false} />
                    </div>
                </div>
            </div>
            <div class="clearfix"></div>
        <div className="row">
            <div className="col-lg-3">
                <div className="form-group">
                    <input type="button"  className="submitbtnnext" variant="contained" color="primary" value="Back" onClick={()=>props.handleBack()} />
                </div>
            </div>
            <div className="col-lg-3">
                <div className="form-group">
                    <input type="submit" name="save"  id="save" className="submitbtnnext" variant="contained" color="primary" value="Save"  />
                </div>
            </div>
        </div>             
        
    </form>
    </div>
    );
}
export default NgoInfo;