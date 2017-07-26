// import actionTypes from '../constants/actionTypes';
//
// export default function (state = [], action) {
//     console.log(action.payload);
//
//     switch (action.type) {
//         case actionTypes.CALCULATE_FIGGEN_ALLOCATIONS :
//             return [
//                 ...state,
//                 ...action.payload.data
//             ];
//     }
//     return state;
//
// }
//
//
//
//


import {handleActions} from "redux-actions";
import actionTypes from "../constants/actionTypes";

export default handleActions({
    [actionTypes.CALCULATE_FIGGEN_ALLOCATIONS]: (state, action) => {
        return {
            ...state,
            ...action.payload.data
        };
    }

}, {
    data: []
});
