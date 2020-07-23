/* eslint-disable no-console */
// @flow

import {
  take, takeLatest, put, call,
} from 'redux-saga/effects';
import { eventChannel } from 'redux-saga';
import type { Saga } from 'redux-saga';

import { IS_DEV, WS_URL } from 'constants/config';
import {
  INIT,
  initSuccess,
  initFailure,
  newData,
} from 'actions/socketActions';

function initWebsocket() {
  return eventChannel((emitter) => {
    const ws = new WebSocket(WS_URL);

    ws.onopen = () => {
      console.log('WebSocket on');

      return emitter(initSuccess());
    };

    ws.onerror = (error) => {
      console.log(`WebSocket error ${error}`);
      return emitter(initFailure());
    };

    ws.onmessage = (e: { data: string | any }) => {
      try {
        const { data } = e;
        const parsedData = JSON.parse(data);

        return emitter(newData(parsedData));
      } catch (error) {
        console.error(`Error parsing : ${error}`);
        return emitter(initFailure());
      }
    };

    return () => {
      console.log('WebSocket off');
    };
  });
}

export default function saga() {
  function* init() {
    try {
      const channel = yield call(initWebsocket);

      while (true) {
        const action = yield take(channel);
        yield put(action);
      }
    } catch (e) {
      IS_DEV && console.log('websocket init failure', e);
    }
  }

  return function* watchers(): Saga<*> {
    yield takeLatest(INIT, init);
  };
}
