// @flow

import {
  INIT,
  INIT_SUCCESS,
  INIT_FAILURE,
  NEW_DATA,
} from 'actions/socketActions';

import { formatGold } from 'utils/Formaters';

import {
  STATUS_DEFAULT,
  STATUS_LOADING,
  STATUS_SUCCESS,
  STATUS_FAILURE,
  STATUS_RUNNING,
} from 'constants/status';

import type { StatusType } from 'types/statusTypes';
import type { GoldsTypes, LolTeamStats } from 'types/dataTypes';

export type StateType = {
  status: StatusType,
  initStatus: StateType,
  golds: GoldsTypes,
};

export type ActionType = {
  payload: Object,
  type: string,
}

const initialTeamState: LolTeamStats = {
  name: '',
  acronym: '',
  drakes: 0,
  gold: 0,
  herald: 0,
  id: 0,
  inhibitors: 0,
  kills: 0,
  nashors: 0,
  score: 0,
  towers: 0,
  logo: '',
  players: {
    top: {},
    jun: {},
    mid: {},
    adc: {},
    sup: {},
  },
};

const initialState: StateType = {
  status: STATUS_DEFAULT,
  initStatus: STATUS_DEFAULT,
  data: {
    blue: initialTeamState,
    red: initialTeamState,
  },
  golds: [
    {
      type: 'blue',
      name: 'Blue golds',
      data: {},
    },
    {
      type: 'red',
      name: 'Red golds',
      data: {},
    },
  ],
};

const reducer = (
  state: StateType = initialState,
  action: ActionType,
): StateType => {
  switch (action.type) {
    case INIT: {
      return {
        ...state,
        initStatus: STATUS_LOADING,
        status: STATUS_LOADING,
      };
    }

    case INIT_SUCCESS: {
      return {
        ...state,
        initStatus: STATUS_SUCCESS,
        status: STATUS_LOADING,
      };
    }

    case INIT_FAILURE: {
      return {
        ...state,
        initStatus: STATUS_FAILURE,
        status: STATUS_FAILURE,
      };
    }

    case NEW_DATA: {
      const { data, data: { current_timestamp, red: { gold: redGold }, blue: { gold: blueGold } } } = action.payload;

      return {
        ...state,
        status: STATUS_RUNNING,
        data,
        golds: formatGold(state.golds, current_timestamp, redGold, blueGold),
      };
    }

    default: {
      return state;
    }
  }
};

export default reducer;
