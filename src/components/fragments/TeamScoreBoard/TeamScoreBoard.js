// @flow

import React from 'react';
import classnames from 'classnames';
import TextWithIcon from 'components/fragments/TextWithIcon/TextWithIcon';
import towerBlue from 'assets/img/towerBlue.png';
import inibBlue from 'assets/img/inibBlue.png';
import goldBlue from 'assets/img/goldBlue.png';
import towerRed from 'assets/img/towerRed.png';
import inibRed from 'assets/img/inibRed.png';
import goldRed from 'assets/img/goldRed.png';

import './styles.scss';

const TeamScoreBoard = ({
  inhibitors,
  towers,
  gold,
  isLocale = false,
}: {
  inhibitors: number,
  towers: number,
  gold: number,
  isLocale?: boolean,
}) => (
  <div className={classnames(['team-container', isLocale ? 'locale' : 'visitor'])}>
    {isLocale ? (
      <>
        <TextWithIcon
          score={inhibitors}
          icon={inibBlue}
          isLocale
        />
        <TextWithIcon
          score={towers}
          icon={towerBlue}
          isLocale
        />
        <TextWithIcon
          score={gold}
          icon={goldBlue}
          isLocale
          isGold
        />
      </>
    ) : (
      <>
        <TextWithIcon
          score={gold}
          icon={goldRed}
          isGold
        />
        <TextWithIcon
          score={towers}
          icon={towerRed}
        />
        <TextWithIcon
          score={inhibitors}
          icon={inibRed}
        />
      </>
    )}
  </div>
);

TeamScoreBoard.defaultProps = {
  isLocale: false,
};

export default TeamScoreBoard;
