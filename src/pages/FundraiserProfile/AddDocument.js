import React, {useState,useEffect} from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import { useFormik } from 'formik';
import { connect } from 'react-redux'
import { fundraiserProfileActions } from '../../action/index';
const donorData = JSON.parse(localStorage.getItem('donorData'));
let Id = "";
if(donorData && donorData.id)
Id = donorData.id;
let initialValues = {};
const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: 'absolute',

    
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
});

const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);

const DialogActions = withStyles((theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
  },
}))(MuiDialogActions);

 const  AddDocument = (props) => {
  const [Image, setImage] = useState("");
  const [isSubmit, setIisSubmit] = useState(false);

  

  const handleClose = () => {
    props.handleClose();
  };
  const validate = values => {
    const errors = {};
    if (!Image) {
      errors.file = true;
    }
    // if (!values[props.uploadFileType]) {
    //   errors[props.uploadFileType] = 'Required';
    // }
    return errors;
}
const uploadImage = (e)=>{
  if(e.target.files){
    let file = e.target.files[0];
    const fileType = file.type.substring(file.type.indexOf("/")+1);
    if(fileType === "jpeg" || fileType === "jpg" || fileType === "png"){
      let reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        console.log(reader.result)
        //formik.values[props.uploadFileType] = reader.result;
        setImage(reader.result);
    }
  }
  };

  
 // const dataUrl = getDataUrl(event.currentTarget);
}
  const formik = useFormik({
    initialValues,
    validate,
    onSubmit: values => {
      setIisSubmit(true);
      if(props.uploadFileType ==="PAN") values.doc_for_pan = Image;
      if(props.uploadFileType ==="Aadhar") values.doc_for_aadhar = Image;
      if(props.uploadFileType ==="Photo") values.photo = Image;
      if(props.uploadFileType ==="DOB") values.doc_for_dob = Image;
      if(props.uploadFileType ==="Location") values.doc_for_location = Image;
      console.log("values",values);

      values.id = Id;
      props.update_document(JSON.stringify(values));
      setImage("");
      
    },
  });

  useEffect(() => {
    if(props.gotData && props.gotData.status === 1 && isSubmit)
      handleClose();

     },[props.gotData]);
  return (
    <>

      <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={props.open}>
        <DialogTitle id="customized-dialog-title" onClose={handleClose}>
        {props.uploadFileType} Upload
        </DialogTitle>
        <form  autoComplete="off" onSubmit={formik.handleSubmit}>

        <DialogContent dividers>
          <TextField id="standard-basic"   
          variant="outlined" 
          type="file" 
          name={props.uploadFileType}  
          onChange={(e)=>uploadImage(e)}
          error = {formik.errors.file?true:false}/> 
        </DialogContent>
        <DialogActions>
          <Button type="submit" autoFocus  color="primary">
           Upload {props.uploadFileType}
          </Button>
        </DialogActions>
        </form>

      </Dialog>
    </>
  );
}
function mapState(state){
	return{
        gotData:state.put_document_request.getuser
	}
  }
  const actionCreators = {update_document: fundraiserProfileActions.put_document_request,}

  let userData ={id:1}
  console.log(userData.id)
  export default connect(mapState,actionCreators)(AddDocument);