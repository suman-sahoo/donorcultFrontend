import { fundRaiserProfileConstants } from '../constants';

const initialState =  {};


export function fundRaiserProfile(state = initialState, action) {
  switch (action.type) {
    case fundRaiserProfileConstants.GET_AUTHENTICATE_REQUEST:
      return {
        getuser: false,
      };
    case fundRaiserProfileConstants.GET_AUTHENTICATE_SUCCESS:
      return {
        getuser: action.data.data.data,
      };
    case fundRaiserProfileConstants.GET_AUTHENTICATE_FAILURE:
      return {getuser: false};

    default:
      return state
  }
}

export function get_withdrall_request(state = initialState, action) {
  switch (action.type) {
    case fundRaiserProfileConstants.GET_WITHDRALL_REQUEST:
      return {
        getuser: false,
      };
    case fundRaiserProfileConstants.GET_WITHDRALL_SUCCESS:
      return {
        getuser: action.data.data,
      };
    case fundRaiserProfileConstants.GET_WITHDRALL_FAILURE:
      return {getuser: false};

    default:
      return state
  }
}

export function post_withdrall_request(state = initialState, action) {
  switch (action.type) {
    case fundRaiserProfileConstants.POST_WITHDRALL_REQUEST:
      return {
        getuser: false,
      };
    case fundRaiserProfileConstants.POST_WITHDRALL_SUCCESS:
      return {
        getuser: action.data.data,
      };
    case fundRaiserProfileConstants.POST_WITHDRALL_FAILURE:
      return {getuser: false};

    default:
      return state
  }
}

export function put_document_request(state = initialState, action) {
  switch (action.type) {
    case fundRaiserProfileConstants.PUT_DOCUMENT_REQUEST:
      return {
        getuser: false,
      };
    case fundRaiserProfileConstants.PUT_DOCUMENT_SUCCESS:
      return {
        getuser: action.data.data,
      };
    case fundRaiserProfileConstants.PUT_DOCUMENT_FAILURE:
      return {getuser: false};

    default:
      return state
  }
}

export function get_fundreaise_list_userwise(state = initialState, action) {
  switch (action.type) {
    case fundRaiserProfileConstants.GET_FUNDREAISE_LIST_USERWISE_REQUEST:
      return {
        getuser: false,
      };
    case fundRaiserProfileConstants.GET_FUNDREAISE_LIST_USERWISE_SUCCESS:
      return {
        getuser: action.data.data,
      };
    case fundRaiserProfileConstants.GET_FUNDREAISE_LIST_USERWISE_FAILURE:
      return {getuser: false};

    default:
      return state
  }
}
