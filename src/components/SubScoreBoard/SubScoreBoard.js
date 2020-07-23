// @flow

import React from 'react';
import TeamSubScoreBoard from 'components/fragments/TeamSubScoreBoard/TeamSubScoreBoard';
import { formatTimer } from 'utils/Formaters';
import type { LolTeamStats } from 'types/dataTypes';

import './styles.scss';

const SubScoreBoard = ({
  blue,
  red,
  timer,
}: {
  blue: LolTeamStats,
  red: LolTeamStats,
  timer: number,
}) => {
  const { drakes: blueDrakes, herald: blueHerald, nashors: blueBaron } = blue;
  const { drakes: redDrakes, herald: redHerald, nashors: redBaron } = red;
  return (
    <div className="subscoreboard-container">
      <TeamSubScoreBoard
        baron={blueBaron}
        herald={blueHerald}
        drake={blueDrakes}
        isLocale
      />
      <div className="timer-container">
        {formatTimer(timer)}
      </div>
      <TeamSubScoreBoard
        baron={redBaron}
        herald={redHerald}
        drake={redDrakes}
      />
    </div>
  );
};

export default SubScoreBoard;
