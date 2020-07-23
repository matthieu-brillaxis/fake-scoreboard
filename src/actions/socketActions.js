// @flow

export const INIT = 'INIT';
export const INIT_SUCCESS = 'INIT_SUCCESS';
export const INIT_FAILURE = 'INIT_FAILURE';
export const NEW_DATA = 'NEW_DATA';

// TYPES

export type INIT_ACTION = {
  type: 'INIT',
};

export type INIT_SUCCESS_ACTION = {
  type: 'INIT_SUCCESS',
};

export type INIT_FAILURE_ACTION = {
  type: 'INIT_FAILURE',
};

export type NEW_DATA_ACTION = {
  type: 'NEW_DATA',
};

// ACTIONS

// INIT

export const init = (): INIT_ACTION => ({
  type: INIT,
});

export const initSuccess = (): INIT_SUCCESS_ACTION => ({
  type: INIT_SUCCESS,
});

export const initFailure = (): INIT_FAILURE_ACTION => ({
  type: INIT_FAILURE,
});

// NEW DATA

export const newData = (data: {}): NEW_DATA_ACTION => ({
  type: NEW_DATA,
  payload: { data },
});
