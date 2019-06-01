import { combineReducers } from 'redux';
import { appStateReducer } from './appStateReducer';

export default combinerReducers({ globalState: appStateReducer });
