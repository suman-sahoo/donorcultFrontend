import { userConstants } from '../constants';

const initialState =  {};


export function userLogin(state = initialState, action) {
  switch (action.type) {
    case userConstants.POST_LOGIN_REQUEST:
      return {
        getuser: false,
      };
    case userConstants.POST_LOGIN_SUCCESS:
      return {
        getuser: action.data.data,
      };
    case userConstants.POST_LOGIN_FAILURE:
      return {getuser: false};

    default:
      return state
  }
}

export function userSignup(state = initialState, action) {
  switch (action.type) {
    case userConstants.POST_SIGNUP_REQUEST:
      return {
        getuser: false,
      };
    case userConstants.POST_SIGNUP_SUCCESS:
      return {
        getuser: action.data.data,
      };
    case userConstants.POST_SIGNUP_FAILURE:
      return {getuser: false};

    default:
      return state
  }
}


export function user_info_update(state = initialState, action) {
  switch (action.type) {
    case userConstants.PUT_USER_UPDATE_INFO_REQUEST:
      return {
        getuser: false,
      };
    case userConstants.PUT_USER_UPDATE_INFO_SUCCESS:
      return {
        getuser: action.data.data,
      };
    case userConstants.PUT_USER_UPDATE_INFO_FAILURE:
      return {getuser: false};

    default:
      return state
  }
}

export function user_info_fatchdata(state = initialState, action) {
  switch (action.type) {
    case userConstants.GET_USER_INFO_FATCHDATA_REQUEST:
      return {
        getuser: false,
      };
    case userConstants.GET_USER_INFO_FATCHDATA_SUCCESS:
      return {
        getuser: action.data.data.data,
      };
    case userConstants.GET_USER_INFO_FATCHDATA_FAILURE:
      return {getuser: false};

    default:
      return state
  }
}

export function put_image(state = initialState, action) {
  switch (action.type) {
    case userConstants.PUT_IMAGE_REQUEST:
      return {
        getuser: false,
      };
    case userConstants.PUT_IMAGE_SUCCESS:
      return {
        getuser: action.data.data,
      };
    case userConstants.PUT_IMAGE_FAILURE:
      return {getuser: false};

    default:
      return state
  }
}


