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
import { connect } from 'react-redux'
import { fundraiserProfileActions } from '../../action/index';
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

 const  WithdrawlRequestModal = (props) => {

  const handleClose = () => {
    props.handleClick();
  };
  const validate = values => {
    const errors = {};
    if (!values.withdrawl_amount) {
      errors.withdrawl_amount = true;
    }
    return errors;
}
  const formik = useFormik({
    initialValues,
    validate,
    onSubmit: values => {
      values.id = 1;
      console.log("values",values);
      props.post_withdrall_request(values);

      handleClose();
    },
  });
  return (
    <>

      <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={props.open}>
        <DialogTitle id="customized-dialog-title" onClose={handleClose}>
         Withdrawl Request
        </DialogTitle>
        <form  autoComplete="off" onSubmit={formik.handleSubmit}>

        <DialogContent dividers>
          <TextField id="standard-basic"   
          variant="outlined" 
          label="Withdrawl amount"
          type="number" 
          name="withdrawl_amount" 
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
function mapState(state){
	return{
       // getuser:state.fundRaiserProfile.getuser
	}
  }
  const actionCreators = {
    post_withdrall_request: fundraiserProfileActions.post_withdrall_request,
  }
  export default connect(mapState,actionCreators)(WithdrawlRequestModal);
