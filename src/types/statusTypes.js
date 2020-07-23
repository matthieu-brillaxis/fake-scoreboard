// @flow

import {
  STATUS_DEFAULT,
  STATUS_LOADING,
  STATUS_FAILURE,
  STATUS_SUCCESS,
} from 'constants/status';

export type StatusType = STATUS_DEFAULT
  | STATUS_LOADING
  | STATUS_FAILURE
  | STATUS_SUCCESS;
