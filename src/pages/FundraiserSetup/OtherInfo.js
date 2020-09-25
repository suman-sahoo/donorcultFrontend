import React from 'react';

import TextField from '@material-ui/core/TextField';
import { useFormik } from 'formik';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
let initialValues= {
    beneficiary_name:'',
    beneficiary_contact_no:'',
    relation_with_beneficiary:'',
    beneficiary_account_no:'',
    b_holder_name:'',
    ifsc:'',
    bank_name:'',
    micr_code:'',
    pan:'',
    aadhaar_no:'',

  }
  //['Self','Relative','Friends','Others']

const BasicInfo = (props) =>{

    const validate = values => {
        const errors = {};
        if (!values.beneficiary_name) {
          errors.beneficiary_name = 'Required';
        }
        if (!values.beneficiary_contact_no) {
            errors.beneficiary_contact_no = 'Required';
        } 
        if (!values.relation_with_beneficiary) {
            errors.relation_with_beneficiary = 'Required';
        }
          if (!values.beneficiary_account_no) {
            errors.beneficiary_account_no = 'Required';
          }
          if (!values.b_holder_name) {
            errors.b_holder_name = 'Required';
          }
          if (!values.ifsc) {
            errors.ifsc = 'Required';
          }
          if (!values.bank_name) {
            errors.bank_name = 'Required';
          }
          if (!values.micr_code) {
            errors.micr_code = 'Required';
          }
          if (!values.pan) {
            errors.pan = 'Required';
          }
          if (!values.aadhaar_no) {
            errors.aadhaar_no = 'Required';
          }
          console.log(errors,"errors")
        return errors;
    }


    const formik = useFormik({
        initialValues,
        validate,
        onSubmit: values => {
          console.log("values",values);
         // props.handleNext();
        },
      });


  return (
    <div className="bifbdy">
    <form  autoComplete="off" onSubmit={formik.handleSubmit} >
        <h6 class="heading-small text-muted mb-4">OTHER DETAILSFRIENDS</h6>
        <div className="row">
            <div className="col col-lg-12">
                <div className="form-group">
                    <div className="form-control-label"></div> 
                    <TextField id="standard-basic"
                        label="Beneficiary Name" 
                        variant="outlined" 
                        type="text" 
                        name="beneficiary_name"
                        className="form-control" 
                        onChange={formik.handleChange}
                        value={formik.values.beneficiary_name}
                        error = {formik.errors.beneficiary_name?true:false} />
                    </div>
                </div>
        </div>
        <div class="clearfix"></div>
        <div className="row">
            <div className="col col-lg-6">
                <div className="form-group">
                    <div className="form-control-label"></div> 
                    <TextField id="standard-basic"
                     label="Beneficiary Contact No" 
                     variant="outlined"  
                     type="text"  
                     name="beneficiary_contact_no" 
                     className="form-control"
                     onChange={formik.handleChange}
                     value={formik.values.beneficiary_contact_no}
                     error = {formik.errors.beneficiary_contact_no?true:false} />
                </div>
            </div>
            <div className="col-lg-6">
                <div className="form-group">
                <FormControl variant="outlined" className="form-control" >
                                <InputLabel htmlFor="outlined-age-native-simple">Relation with beneficiary</InputLabel>
                                <Select
                                native
                                name="relation_with_beneficiary" 
                                error = {formik.errors.relation_with_beneficiary?true:false}
                                onChange={formik.handleChange}
                                value={formik.values.relation_with_beneficiary} 
                                label="Fundraised for"
                                >
                                <option aria-label="None" value=""/>
                                <option value="Self">Self</option>
                                <option value="Relative">Relative</option>
                                <option value="Friends">Friends</option>
                                <option value="Others">Others</option>

                                </Select>
                            </FormControl>
                    
                </div>
            </div>
        </div>
        <div class="clearfix"></div>
    
        <div className="row">
          <div className="col-lg-6">
              <div className="form-group">
                <div className="form-control-label"></div> 
                <TextField id="standard-basic"
                label="Beneficiary account no" 
                variant="outlined"
                type="text" 
                name="beneficiary_account_no"
                className="form-control" 
                onChange={formik.handleChange}
                value={formik.values.beneficiary_account_no}
                error = {formik.errors.beneficiary_account_no?true:false} />
              </div>
          </div>
          <div className="col-lg-6">
              <div className="form-group">
                  <div className="form-control-label"></div> 
                  <TextField id="standard-basic" 
                  label="Beneficiary holder name"  
                  variant="outlined" 
                  type="text" 
                  name="b_holder_name"
                  className="form-control" 
                  onChange={formik.handleChange}
                  value={formik.values.b_holder_name}
                  error = {formik.errors.b_holder_name?true:false} />
              </div>
          </div>
        </div>
        <div className="row">
        </div>
        <div class="clearfix"></div>
        <div className="row">
            <div className="col-lg-6">
                  <div className="form-group">
                      <div className="form-control-label"></div> 
                        <TextField id="standard-basic"
                        label="Bank Name" 
                        variant="outlined"
                        type="text" 
                        name="bank_name"
                        className="form-control" 
                        onChange={formik.handleChange}
                        value={formik.values.bank_name}
                        error = {formik.errors.bank_name?true:false} />
                  </div>
            </div>

            <div className="col-lg-6">
                <div className="form-group">
                      <div className="form-control-label"></div> 
                      <TextField id="standard-basic" 
                      label="IFSC"  
                      variant="outlined" 
                      type="text" 
                      name="ifsc"
                      className="form-control" 
                      onChange={formik.handleChange}
                      value={formik.values.ifsc}
                      error = {formik.errors.ifsc?true:false} />
                </div>
            </div>
        </div>
        <div class="clearfix"></div>
        <div className="row">
              <div className="col-lg-6">
                  <div className="form-group">
                      <div className="form-control-label"></div> 
                      <TextField id="standard-basic"
                      label="MICR Code" 
                      variant="outlined"
                      type="text" 
                      name="micr_code"
                      className="form-control" 
                      onChange={formik.handleChange}
                      value={formik.values.micr_code}
                      error = {formik.errors.micr_code?true:false} />
                  </div>
              </div>
              <div className="col-lg-6">
                <div className="form-group">
                  <div className="form-control-label"></div> 
                  <TextField id="standard-basic" 
                  label="PAN"  
                  variant="outlined" 
                  type="text" 
                  name="pan"
                  className="form-control" 
                  onChange={formik.handleChange}
                  value={formik.values.pan}
                  error = {formik.errors.pan?true:false} />
                </div>
              </div>
            </div>
        <div class="clearfix"></div>
        <div className="row">
            <div className="col-lg-12">
                <div className="form-group">
                      <div className="form-control-label"></div> 
                      <TextField id="standard-basic"
                      label="Aadhaar No" 
                      variant="outlined"
                      type="text" 
                      name="aadhaar_no"
                      className="form-control" 
                      onChange={formik.handleChange}
                      value={formik.values.aadhaar_no}
                      error = {formik.errors.aadhaar_no?true:false} />
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
                <input type="submit"  name="save"  id="save" className="submitbtnnext" variant="contained" color="primary" value="Save" />
                </div>
            </div>
        </div>    
    </form>
  </div>
    );
}
export default BasicInfo;