import axios from 'axios';
import {createAction} from 'redux-actions';

import api from '../api';
import actionTypes from '../constants/actionTypes'


var ROOT_URL = 'http://localhost:5000/figgen/GetPreparedAllocations';

var AllocationsAction = createAction(actionTypes.GET_FIGGEN_ALLOCATIONS);


export const getFIGGENAllocations = () => {
    return dispatch => (
        axios.get(ROOT_URL)
            .then(res => {
                dispatch(AllocationsAction({
                    data: res.data,
                    err: null
                }));
            })
            .catch(err => {
                //TODO: remove this mock and handle error
                dispatch(AllocationsAction({
                    data: ['some', 'data','here'],
                    err: null
                }));
            })
    );
};

     ROOT_URL = 'http://localhost:5000/figgen/PrepareAllocations';

    AllocationsAction = createAction(actionTypes.CALCULATE_FIGGEN_ALLOCATIONS);


export const postFIGGENAllocations = () => {
    return dispatch => (
        axios.get(ROOT_URL)
            .then(res => {
                dispatch(AllocationsAction({
                    data: res.data,
                    err: null
                }));
            })
            .catch(err => {
                //TODO: remove this mock and handle error
                dispatch(AllocationsAction({
                    data: ['some', 'data','here'],
                    err: null
                }));
            })
    );
};
