import axios from 'axios';
import {createAction} from 'redux-actions';

import api from '../api';
import actionTypes from '../constants/actionTypes'


const ROOT_URL = 'http://localhost:5000/figgen/GetPreparedAllocations';

const FIGGENAllocationsAction = createAction(actionTypes.CALCULATE_FIGGEN_ALLOCATIONS);


export const fetchFIGGENAllocations = () => {
    return dispatch => (
        axios.get(ROOT_URL)
            .then(res => {
                dispatch(FIGGENAllocationsAction({
                    data: res.data,
                    err: null
                }));
            })
            .catch(err => {
                //TODO: remove this mock and handle error
                dispatch(FIGGENAllocationsAction({
                    data: ['some', 'data'],
                    err: null
                }));
            })
    );
};

