import * as actionTypes from './actionTypes';


export const changeRequestStatus = (isMakingRequest: boolean) => {
    return {
        type: actionTypes.MAKE_FILTERED_REQUEST,
        payload: isMakingRequest
    }
};