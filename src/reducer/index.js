import { combineReducers } from 'redux';

import { userLogin, userSignup,user_info_update,user_info_fatchdata } from './user.reducer';
import { alert } from './toast.reducer';
import { fundRaiserProfile,put_document_request } from './fundRaiserProfile.reducer';
import { fundRaiseDetails, fundRaisedDonor } from './managefundraise.reducer';




const rootReducer = combineReducers({
    userLogin,
    alert,
    userSignup,
    user_info_update,
    fundRaiserProfile,
    fundRaiseDetails,
    put_document_request,
    user_info_fatchdata,
    fundRaisedDonor
});

export default rootReducer;