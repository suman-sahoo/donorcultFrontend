import React from 'react';
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

 const  MailSendModal = (props) => {

  const handleClose = () => {
    props.handleClose();
  };
  const validate = values => {
    const errors = {};
    if (!values.withdrawl_amount) {
      errors.withdrawl_amount = 'Required';
    }
    return errors;
}
  const formik = useFormik({
    initialValues,
    validate,
    onSubmit: values => {
      console.log("values",values);
      handleClose();
      //props.user_login(values);
    },
  });
  return (
    <>

      <Dialog maxWidth ="xl" onClose={handleClose} aria-labelledby="customized-dialog-title" open={props.open}>
        <DialogTitle id="customized-dialog-title" onClose={handleClose}>
         Mail Send
        </DialogTitle>
        <form  autoComplete="off" onSubmit={formik.handleSubmit}>

        <DialogContent dividers>
          <TextField id="standard-basic"   
          variant="outlined" 
          label="Withdrawl amount"
          type="txt" 
          multiline={true}
          rows={5}
          name={props.uploadFileType}  
          onChange={formik.handleChange}
          value={formik.values.withdrawl_amount}
          error = {formik.errors.withdrawl_amount?true:false}/> 
        </DialogContent>
        <DialogActions>
          <Button type="submit" autoFocus  color="primary">
           Submit
          </Button>
        </DialogActions>
        </form>

      </Dialog>
    </>
  );
}

export  default MailSendModal;