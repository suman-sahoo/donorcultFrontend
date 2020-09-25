import { manageFundraiseConstants } from '../constants';
import { manageFundRaiseService } from '../services';
import { toastActions } from './toast.actions';

export const  manageFundRaiseActions = {
    get_fundraise_details,
    get_fundraise_donor_details
};

function get_fundraise_details(data){

    return dispatch => {
        dispatch(request(data));

        manageFundRaiseService.get_fundraise_details(data).then(

                data => { 
                     dispatch(success(data))
                },
                error => {
                    dispatch(failure('Something is wrong')); 
                    dispatch(toastActions.error("Something went wrong"));

                }
                
            );
        
    };

    function request(data) { return { type: manageFundraiseConstants.GET_FUND_RAISE_DETAILS_REQUEST,data } }
    function success(data) { return { type: manageFundraiseConstants.GET_FUND_RAISE_DETAILS_SUCCESS, data } }
    function failure(error) { return { type: manageFundraiseConstants.GET_FUND_RAISE_DETAILS_FAILURE, error } }

}

function get_fundraise_donor_details(data){

    return dispatch => {
        dispatch(request(data));

        manageFundRaiseService.get_fundraise_donor_details(data).then(

                data => { 
                     dispatch(success(data))
                },
                error => {
                    dispatch(failure('Something is wrong')); 
                    dispatch(toastActions.error("Something went wrong"));

                }
                
            );
        
    };

    function request(data) { return { type: manageFundraiseConstants.GET_FUND_RAISED_DONOR_REQUEST,data } }
    function success(data) { return { type: manageFundraiseConstants.GET_FUND_RAISED_DONOR_SUCCESS, data } }
    function failure(error) { return { type: manageFundraiseConstants.GET_FUND_RAISED_DONOR_FAILURE, error } }

}

