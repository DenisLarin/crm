import sortRequest from "../../models/sortRequest";
import * as actionTypes from './actionTypes';


export const makeFilteredRequest = (sortRequest :sortRequest)=>{
  return{
      type: actionTypes.MAKE_FILTERED_REQUEST,
      payload: sortRequest
  }
};