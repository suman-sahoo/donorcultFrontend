import { toastConstants } from '../constants';

export const toastActions = {
    success,
    error,
    clear
};

function success(message,status) {
    return { type: toastConstants.SUCCESS, message, status:status };
}

function error(message,status) {
    return { type: toastConstants.ERROR, message ,status:status};
}
function clear() {
    return { type: toastConstants.CLEAR };
}
