import * as actionTypes from './actionTypes';
import company from "../../models/company";


export const addToFavorite = (item: company) => {
    return {
        type: actionTypes.ADD_TO_FAVORITE,
        payload: item
    }
};
export const deleteFromFavorite = (item: company) => {
    return {
        type: actionTypes.DELETE_FROM_FAVORITE,
        payload: item
    }
};