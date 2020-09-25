import { toastConstants } from '../constants';

export function alert(state = {}, action) {
  switch (action.type) {
    case toastConstants.SUCCESS:
      return {
        type: 'success',
        status: true,
        message: action.message
      };
    case toastConstants.ERROR:
      return {
        type: 'error',
        status: true,
        message: action.message
      };
      case toastConstants.CLEAR:
        return {};
    default:
      return state
  }
}