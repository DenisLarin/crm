import * as actionTypes from './actionTypes';
import company from "../../models/company";


export const addToFavourite = (item: company) => {
    return {
        type: actionTypes.ADD_TO_FAVOURITE,
        payload: item
    }
};
export const deleteFromFavourite = (item: company) => {
    return {
        type: actionTypes.DELETE_FROM_FAVOURITE,
        payload: item
    }
};