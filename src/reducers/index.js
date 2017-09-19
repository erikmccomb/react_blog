// normally can only import 1 reducer, but we will use combine reducers, to
// import multiple.
import {combineReducers} from 'redux';
//import the reducers to be combined.
import entries from './entries';
// awlways add new reducers to import first
import nextId from './nextId';
import filter from './filter';

const rootReducer = combineReducers({entries, nextId, filter});

export default rootReducer;