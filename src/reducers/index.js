import { combineReducers } from 'redux';
import ipcReducer from './ipcReducer';

const rootReducer = combineReducers({
  ipcList: ipcReducer
});

export default rootReducer;
