import axios from 'axios';


import api from '../api';
import actionTypes from '../constants/actionTypes'


const ROOT_URL = 'http://localhost:5000/figgen/GetPreparedAllocations';

// export function fetchFIGGENAllocations(dispatch) {
//     axios.get(ROOT_URL).then((res) => {
//         dispatch({
//             payload: res.data,
//             type: actionTypes.CALCULATE_FIGGEN_ALLOCATIONS
//         })
//     });
// }


export const fetchFIGGENAllocations = (data) => {
    return dispatch => (
        axios.get(ROOT_URL).then(res => dispatch({
            payload:res.data,
            type:actionTypes.CALCULATE_FIGGEN_ALLOCATIONS
        }))
    );
};

