import * as actionTypes from './../actions/actionTypes';
import company from "../../models/company";

const initState = {
    companies: []
};
const reducer = (state = initState, action: any) => {
    switch (action.type) {
        case actionTypes.ADD_TO_FAVOURITE:{
            return  state;
        }
        case actionTypes.DELETE_FROM_FAVOURITE:{
            return state;
        }
        default:
            return state;
    }
};

export default reducer;