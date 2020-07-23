// @flow

import { combineReducers } from 'redux';
import socketReducer from 'reducers/socketReducer';

const rootReducer = combineReducers({
  socketReducer,
});

export default rootReducer;
