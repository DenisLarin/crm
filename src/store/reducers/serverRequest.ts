import * as actionTypes from './../actions/actionTypes';


const initState = {
    isMakingRequest: false
};

const makeFiteredRequest = (state: object, isMakingRequest: boolean)=>{
    return {isMakingRequest: isMakingRequest};
};

const reducer = (state = initState, action: any) => {
    switch (action.type) {
        case actionTypes.MAKE_FILTERED_REQUEST:{
            return  makeFiteredRequest(state, action.payload);
        }
        default:
            return state;
    }
};

export default reducer;