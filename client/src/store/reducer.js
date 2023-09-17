import { combineReducers } from 'redux';
import taskReducer from './tasks/task-reducer';

const rootReducer = combineReducers({ taskReducer });

export default rootReducer;