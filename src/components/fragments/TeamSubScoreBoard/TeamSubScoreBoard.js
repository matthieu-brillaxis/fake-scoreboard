// @flow

import React from 'react';
import classnames from 'classnames';
import TextWithIcon from 'components/fragments/TextWithIcon/TextWithIcon';
import baronBlue from 'assets/img/baronBlue.png';
import heraldBlue from 'assets/img/heraldBlue.png';
import drakeBlue from 'assets/img/drakeBlue.png';
import baronRed from 'assets/img/baronRed.png';
import heraldRed from 'assets/img/heraldRed.png';
import drakeRed from 'assets/img/drakeRed.png';

import './styles.scss';

const TeamSubScoreBoard = ({
  baron,
  herald,
  drake,
  isLocale = false,
}: {
  baron: number,
  herald: number,
  drake: number,
  isLocale?: boolean,
}) => (
  <div className={classnames(['team-container', isLocale ? 'locale' : 'visitor'])}>
    {isLocale ? (
      <>
        <TextWithIcon
          score={baron}
          icon={heraldBlue}
          isLocale
        />
        <TextWithIcon
          score={herald}
          icon={baronBlue}
          isLocale
        />
        <TextWithIcon
          score={drake}
          icon={drakeBlue}
          isLocale
        />
      </>
    ) : (
      <>
        <TextWithIcon
          score={drake}
          icon={drakeRed}
        />
        <TextWithIcon
          score={herald}
          icon={baronRed}
        />
        <TextWithIcon
          score={baron}
          icon={heraldRed}
        />
      </>
    )}
  </div>
);

TeamSubScoreBoard.defaultProps = {
  isLocale: false,
};

export default TeamSubScoreBoard;
