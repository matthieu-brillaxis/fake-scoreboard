// @flow

import { all, spawn } from 'redux-saga/effects';
import socketSaga from 'sagas/socketSaga';

function* sagas(): Generator<*, *, *> {
  yield all([
    spawn(socketSaga()),
  ]);
}

export default sagas;
