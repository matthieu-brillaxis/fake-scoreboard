// @flow

import React from 'react';
import TeamScoreBoard from 'components/fragments/TeamScoreBoard/TeamScoreBoard';
import kills from 'assets/img/kills.png';

import type { LolTeamStats } from 'types/dataTypes';

import './styles.scss';

const ScoreBoard = ({
  blue,
  red,
}: {
  blue: LolTeamStats,
  red: LolTeamStats,
}) => {
  const {
    inhibitors: blueInhibitors, towers: blueTowers, gold: blueGold, kills: blueKills,
  } = blue;
  const {
    inhibitors: redInhibitors, towers: redTowers, gold: redGold, kills: redKills,
  } = red;
  return (
    <div className="scoreboard-container">
      <TeamScoreBoard
        inhibitors={blueInhibitors}
        towers={blueTowers}
        gold={blueGold}
        isLocale
      />
      <div className="kills-container">
        <p>{blueKills}</p>
        <img
          src={kills}
          alt="kills"
          title="kills"
        />
        <p>{redKills}</p>
      </div>
      <TeamScoreBoard
        inhibitors={redInhibitors}
        towers={redTowers}
        gold={redGold}
      />
    </div>
  );
};

export default ScoreBoard;
