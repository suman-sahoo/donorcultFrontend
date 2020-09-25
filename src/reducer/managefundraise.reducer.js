import { manageFundraiseConstants } from '../constants';

const initialState =  {};


export function fundRaiseDetails(state = initialState, action) {
  switch (action.type) {
    case manageFundraiseConstants.GET_FUND_RAISE_DETAILS_REQUEST:
      return {
        gotData: false,
      };
    case manageFundraiseConstants.GET_FUND_RAISE_DETAILS_SUCCESS:
      return {
        gotData: action.data.data.data,
      };
    case manageFundraiseConstants.GET_FUND_RAISE_DETAILS_FAILURE:
      return {gotData: false};

    default:
      return state
  }
}


export function fundRaisedDonor(state = initialState, action) {
  switch (action.type) {
    case manageFundraiseConstants.GET_FUND_RAISED_DONOR_REQUEST:
      return {
        gotData: false,
      };
    case manageFundraiseConstants.GET_FUND_RAISED_DONOR_SUCCESS:
      return {
        gotData: action.data.data.data,
      };
    case manageFundraiseConstants.GET_FUND_RAISED_DONOR_FAILURE:
      return {gotData: false};

    default:
      return state
  }
}
