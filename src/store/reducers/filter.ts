import * as actionTypes from './../actions/actionTypes';
import sortRequest from "../../models/sortRequest";


const initState = {
    sortRequest: undefined
};

const makeFiteredRequest = (state: object, sortRequest: sortRequest)=>{
    return {sortRequest: sortRequest};
};

const reducer = (state = initState, action: any) => {
    switch (action.type) {
        case actionTypes.MAKE_FILTERED_REQUEST:{
            return  makeFiteredRequest(state, action.payload as sortRequest);
        }
        default:
            return state;
    }
};

export default reducer;