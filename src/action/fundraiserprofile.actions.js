import { fundRaiserProfileConstants } from '../constants';
import { fundraiserProfileService } from '../services';
import { toastActions } from './toast.actions';

export const fundraiserProfileActions = {
    get_authenticate_document,
    post_withdrall_request,
    get_withdrall_request,
    put_document_request,
    get_fundreaise_list_userwise
};

function get_authenticate_document(data){

    return dispatch => {
        dispatch(request(data));

        fundraiserProfileService.get_authenticate_document(data).then(

                data => { 
                     dispatch(success(data))
                },
                error => {
                    dispatch(failure('Something is wrong')); 
                    dispatch(toastActions.error("Something went wrong"));

                }
                
            );
        
    };

    function request(data) { return { type: fundRaiserProfileConstants.GET_AUTHENTICATE_REQUEST,data } }
    function success(data) { return { type: fundRaiserProfileConstants.GET_AUTHENTICATE_SUCCESS, data } }
    function failure(error) { return { type: fundRaiserProfileConstants.GET_AUTHENTICATE_FAILURE, error } }

}

function post_withdrall_request(data){

    return dispatch => {
        dispatch(request(data));

        fundraiserProfileService.post_withdrall_request(data).then(

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

    function request(data) { return { type: fundRaiserProfileConstants.POST_WITHDRALL_REQUEST,data } }
    function success(data) { return { type: fundRaiserProfileConstants.POST_WITHDRALL_SUCCESS, data } }
    function failure(error) { return { type: fundRaiserProfileConstants.POST_WITHDRALL_FAILURE, error } }

}

function get_withdrall_request(data){

    return dispatch => {
        dispatch(request(data));

        fundraiserProfileService.get_withdrall_request(data).then(

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

    function request(data) { return { type: fundRaiserProfileConstants.GET_WITHDRALL_REQUEST,data } }
    function success(data) { return { type: fundRaiserProfileConstants.GET_WITHDRALL_SUCCESS, data } }
    function failure(error) { return { type: fundRaiserProfileConstants.GET_WITHDRALL_FAILURE, error } }

}


function put_document_request(data){

    return dispatch => {
        dispatch(request(data));

        fundraiserProfileService.put_document_request(data).then(

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

    function request(data) { return { type: fundRaiserProfileConstants.PUT_DOCUMENT_REQUEST,data } }
    function success(data) { return { type: fundRaiserProfileConstants.PUT_DOCUMENT_SUCCESS, data } }
    function failure(error) { return { type: fundRaiserProfileConstants.PUT_DOCUMENT_FAILURE, error } }

}


function get_fundreaise_list_userwise(data){

    return dispatch => {
        dispatch(request(data));

        fundraiserProfileService.get_fundreaise_list_userwise(data).then(

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

    function request(data) { return { type: fundRaiserProfileConstants.GET_FUNDREAISE_LIST_USERWISE_REQUEST,data } }
    function success(data) { return { type: fundRaiserProfileConstants.GET_FUNDREAISE_LIST_USERWISE_SUCCESS, data } }
    function failure(error) { return { type: fundRaiserProfileConstants.GET_FUNDREAISE_LIST_USERWISE_FAILURE, error } }

}