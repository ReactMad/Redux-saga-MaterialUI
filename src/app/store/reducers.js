import { combineReducers } from 'redux';
import t3d from './t3d/reducers';

const createReducer = (asyncReducers) => combineReducers({
    t3d,
    ...asyncReducers
});

export default createReducer;
