// @flow

import type { LolTeamStats, GoldsTypes, GoldsItemTypes } from 'types/dataTypes';

export const formatTimer = (timer: number) => {
  const minutes = Math.floor(timer / 60);
  const seconds = timer - minutes * 60;

  return `${minutes} : ${seconds}`;
};

export const formatGold = (
  currentGold: GoldsTypes,
  timer: number,
  blue: LolTeamStats,
  red: LolTeamStats,
) => currentGold.map<GoldsItemTypes>((item) => {
  const { name, data, type } = item;

  return {
    name,
    type,
    data: {
      ...data,
      [formatTimer(timer)]: type === 'blue' ? blue : red,
    },
  };
});
