import React from 'react';

import TextField from '@material-ui/core/TextField';
import { useFormik } from 'formik';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';



let initialValues= {
    title:'',
    category: '',
    sub_category:'',
    goal_amount:'',
    start_date:'',
    end_date:'',
    fundraising_for:'',
    story:'',
    why_r_f:'',

  }
  //['Self','indivisual','group','others/everyone']
  const FundraiserInfo = (props) =>{
      
    const [state, setState] = React.useState({
        age: '',
        name: 'hai',
      });
    
      const handleChange = (event) => {
        const name = event.target.name;
        setState({
          ...state,
          [name]: event.target.value,
        });
      };

    const validate = values => {
        const errors = {};
        if (!values.title) {
          errors.title = 'Required';
        }
        if (!values.category) {
            errors.category = 'Required';
        } 
        if (!values.sub_category) {
            errors.sub_category = 'Required';
        }
          if (!values.goal_amount) {
            errors.goal_amount = 'Required';
          }
          if (!values.start_date) {
            errors.start_date = 'Required';
          }
          if (!values.fundraising_for) {
            errors.fundraising_for = 'Required';
          }
          if (!values.end_date) {
            errors.end_date = 'Required';
          }
          if (!values.story) {
            errors.story = 'Required';
          }
          if (!values.why_r_f) {
            errors.why_r_f = 'Required';
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
    <div className="bifbdy">
         <form  autoComplete="off" onSubmit={formik.handleSubmit} >
            <h6 className="heading-small text-muted mb-4">Fundraiser Info</h6>
            <div className="row">
                <div className="col col-lg-12">
                    <div className="form-group">
                        <div className="form-control-label"></div> 
                        <TextField  
                            id="standard-basic" 
                            label="Title" 
                            variant="outlined" 
                            error = {formik.errors.title?true:false}
                            type="text" 
                            name="title" 
                            className="form-control" 
                            onChange={formik.handleChange}
                            value={formik.values.title}/>
                    </div>
                </div>
            </div>
            <div className="clearfix"></div>
            <div className="row">
                <div className="col col-lg-6">
                    <div className="form-group">
                        <div className="form-control-label"></div> 
                        <FormControl variant="outlined"className="form-control" >
                            <InputLabel htmlFor="outlined-age-native-simple">Category</InputLabel>
                            <Select
                            native
                            name="category" 
                            error = {formik.errors.category?true:false}
                            onChange={formik.handleChange}
                            value={formik.values.category} 
                            label="Category"
                            >
                            <option aria-label="None" value=""/>
                            <option value={10}>Ten</option>
                            <option value={20}>Twenty</option>
                            <option value={30}>Thirty</option>
                            </Select>
                        </FormControl>
                      
                       
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="form-group">
                            <div className="form-control-label"></div> 
                            <FormControl variant="outlined" className="form-control" >
                                <InputLabel htmlFor="outlined-age-native-simple">Sub-Category</InputLabel>
                                <Select
                                native
                                name="sub_category" 
                                error = {formik.errors.sub_category?true:false}
                                onChange={formik.handleChange}
                                value={formik.values.sub_category} 
                                label="Sub Category"
                                >
                                <option aria-label="None" value=""/>
                                <option value={10}>Ten</option>
                                <option value={20}>Twenty</option>
                                <option value={30}>Thirty</option>
                                </Select>
                            </FormControl>
                      
                    </div>
                </div>
            </div>
            <div className="clearfix"></div>
            <div className="row">
                <div className="col-md-12">
                    <div className="form-group">
                        <div className="form-control-label"></div> 
                           <TextField id="standard-basic" 
                            error = {formik.errors.goal_amount?true:false}
                            label="Goal Amount"
                            variant="outlined"
                            onChange={formik.handleChange}
                            type="text"
                            className="form-control" 
                            name="goal_amount" 
                            value={formik.values.goal_amount} />
                    </div>
                </div>
            </div>
            <div className="clearfix"></div>
            <div className="row">
                <div className="col-lg-6">
                    <div className="form-group">
                        <div className="form-control-label"></div> 
                        <TextField
                            id="datetime-local"
                            label="Start date"
                            type="date"
                            variant="outlined"
                            className="form-control" 
                            name="start_date"
                            InputLabelProps={{
                            shrink: true,
                            }}
                            error = {formik.errors.start_date?true:false}  
                            onChange={formik.handleChange}
                            value={formik.values.start_date} 
                        />
                    </div>
                </div>
                <div className="clearfix"></div>
                <div className="col-lg-6">
                    <div className="form-group">
                        <div className="form-control-label"></div> 
                        <TextField id="standard-basic"   
                        variant="outlined" 
                        type="date" 
                        name="end_date" 
                        label="End date"

                        className="form-control" 
                        InputLabelProps={{
                            shrink: true,
                            }}
                        error = {formik.errors.end_date?true:false}  
                        onChange={formik.handleChange}
                        value={formik.values.end_date} />
                    </div>
                </div>
            </div>
            <div className="clearfix"></div>
            <div className="row">
                
                <div className="col-lg-6">
                    <div className="form-group">
                        <div className="form-control-label"></div> 
                        <FormControl variant="outlined" className="form-control" >
                                <InputLabel htmlFor="outlined-age-native-simple">Fundraised for</InputLabel>
                                <Select
                                native
                                name="fundraising_for" 
                                error = {formik.errors.fundraising_for?true:false}
                                onChange={formik.handleChange}
                                value={formik.values.fundraising_for} 
                                label="Fundraised for"
                                >
                                <option aria-label="None" value=""/>
                                <option value="Self">Self</option>
                                <option value="group">group</option>
                                <option value="others/everyone">others/everyone</option>
                                </Select>
                            </FormControl>
                    </div>
                </div>
            <div className="col-lg-6">
                <div className="form-group">
                    <div className="form-control-label"></div> 
                    <TextField id="standard-basic" 
                    label="Story/ project"  
                    variant="outlined" 
                    type="text" 
                    name="story" 
                    className="form-control"   
                    onChange={formik.handleChange}
                    error = {formik.errors.story?true:false}  
                    value={formik.values.story} />
                </div>
            </div>
            </div>
            <div className="clearfix"></div>
            <div className="row">
                <div className="col-md-12">
                    <div className="form-group">
                        <div className="form-control-label"></div> 
                        <TextField id="standard-basic" 
                        label="Why raise funds" 
                        variant="outlined"  
                        className="form-control" 
                        name="why_r_f"  
                        error = {formik.errors.why_r_f?true:false}  
                        onChange={formik.handleChange}
                        value={formik.values.why_r_f}  />
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
                <input type="submit" name="save"  id="save" className="submitbtnnext" variant="contained" color="primary" value="Save"  />

                </div>
            </div>
        </div>                    
        
    </form>
    </div>
    );
}
export default FundraiserInfo;