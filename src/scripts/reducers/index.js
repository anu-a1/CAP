import { combineReducers } from 'redux';
import FIGGENReducer from './reducer_getfgallocations'

const rootReducer = combineReducers({
    FIGGEN: FIGGENReducer
});

export default rootReducer;