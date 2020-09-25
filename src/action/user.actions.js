import { userConstants } from '../constants';
import { userService } from '../services';
import { toastActions } from './toast.actions';

export const userActions = {
    user_login,
    user_signup,
    user_info_update,
    user_info_fatchdata,
    put_image
};

function user_login(data){

    return dispatch => {
        dispatch(request(data));

        userService.user_login(data).then(

                data => { 
                     dispatch(success(data))
                     console.log(data,"datadatadatadata",data.status )
                     if(data && data.data.status === 1){
                        dispatch(toastActions.success(data.data.msg));

                     }else{
                        dispatch(toastActions.error(data.data.msg));

                     }
                      
                },
                error => {
                    dispatch(failure('Something is wrong')); 
                    dispatch(toastActions.error("Something went wrong"));

                }
                
            );
        
    };

    function request(data) { return { type: userConstants.POST_LOGIN_REQUEST,data } }
    function success(data) { return { type: userConstants.POST_LOGIN_SUCCESS, data } }
    function failure(error) { return { type: userConstants.POST_LOGIN_FAILURE, error } }

}

function user_signup(data){

    return dispatch => {
        dispatch(request(data));

        userService.user_signup(data).then(

                data => { 
                     dispatch(success(data))
                     if(data && data.data.status === 1){
                        dispatch(toastActions.success(data.data.msg));

                     }else{
                        dispatch(toastActions.error(data.data.msg));

                     }
                },
                error => {
                    dispatch(failure('Something is wrong')); 
                    dispatch(toastActions.error("Something went wrong"));

                }
                
            );
        
    };

    function request(data) { return { type: userConstants.POST_SIGNUP_REQUEST,data } }
    function success(data) { return { type: userConstants.POST_SIGNUP_SUCCESS, data } }
    function failure(error) { return { type: userConstants.POST_SIGNUP_FAILURE, error } }

}



function user_info_update(data){

    return dispatch => {
        dispatch(request(data));

        userService.user_info_update(data).then(

                data => { 
                     dispatch(success(data))
                      dispatch(toastActions.success("You have successfully updated"));
                },
                error => {
                    dispatch(failure('Something is wrong')); 
                    dispatch(toastActions.error("Something went wrong"));

                }
                
            );
        
    };

    function request(data) { return { type: userConstants.PUT_USER_UPDATE_INFO_REQUEST,data } }
    function success(data) { return { type: userConstants.PUT_USER_UPDATE_INFO_SUCCESS, data } }
    function failure(error) { return { type: userConstants.PUT_USER_UPDATE_INFO_FAILURE, error } }

}
function user_info_fatchdata(data){

    return dispatch => {
        dispatch(request(data));

        userService.user_info_fatchdata(data).then(

                data => { 
                     dispatch(success(data))
                      
                },
                error => {
                    dispatch(failure('Something is wrong')); 
                    dispatch(toastActions.error("Something went wrong"));

                }
                
            );
        
    };

    function request(data) { return { type: userConstants.GET_USER_INFO_FATCHDATA_REQUEST,data } }
    function success(data) { return { type: userConstants.GET_USER_INFO_FATCHDATA_SUCCESS, data } }
    function failure(error) { return { type: userConstants.GET_USER_INFO_FATCHDATA_FAILURE, error } }

}

function put_image(data){

    return dispatch => {
        dispatch(request(data));

        userService.put_image(data).then(

                data => { 
                     dispatch(success(data))
                      dispatch(toastActions.success("You have successfully updated"));
                },
                error => {
                    dispatch(failure('Something is wrong')); 
                    dispatch(toastActions.error("Something went wrong"));

                }
                
            );
        
    };

    function request(data) { return { type: userConstants.PUT_IMAGE_REQUEST,data } }
    function success(data) { return { type: userConstants.PUT_IMAGE_SUCCESS, data } }
    function failure(error) { return { type: userConstants.PUT_IMAGE_FAILURE, error } }

}


