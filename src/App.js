import React, { useEffect}from 'react';
import "./FontawesomeIcons";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { ToastContainer,toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {Routes} from './Components'
import { toastActions } from './action/toast.actions';
import { connect } from 'react-redux'

function App(props) {

  useEffect(() => {
    if(props.toastStatus.status){
      if(props.toastStatus.type === "success") toast.info(props.toastStatus.message)
         
      else toast.error(props.toastStatus.message)
      props.clearToast()

    }
  },[props.toastStatus.status]);
  return (
    <div className="container-fluid">	
       <React.Fragment>
        <Routes />
        <ToastContainer />
       </React.Fragment>
    </div>
  );
}


function mapState(state){
  return{
    toastStatus:state.alert
  }
}
const actionCreators = {
  clearToast: toastActions.clear,
}
export default connect(mapState,actionCreators)(App);
