// @flow

import React from 'react';
import TeamLabel from 'components/fragments/TeamLabel/TeamLabel';

import type { LolTeamStats } from 'types/dataTypes';

import './styles.scss';

const MatchOpponents = ({
  blue,
  red,
}: {
  blue: LolTeamStats,
  red: LolTeamStats,
}) => (
  <div className="match-opponents-container">
    <TeamLabel
      name={(blue && blue.acronym) || (blue.name)}
      logo={blue && blue.logo}
      isLocale
    />
    <p className="versus">VS</p>
    <TeamLabel
      name={(red && red.acronym) || (blue.name)}
      logo={red && red.logo}
    />
  </div>
);

export default MatchOpponents;
