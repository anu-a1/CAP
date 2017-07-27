
import {handleActions} from "redux-actions";
import actionTypes from "../constants/actionTypes";

export default handleActions({
    [actionTypes.GET_FIGGEN_ALLOCATIONS]: (state, action) => {
        return {
            ...state,
            ...action.payload.data
        };
    },
    [actionTypes.CALCULATE_FIGGEN_ALLOCATIONS]: (state, action) => {
        return {
            ...state,
            ...action.payload.data
        };
    }

}, {
    data: []
});

