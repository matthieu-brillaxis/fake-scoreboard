// @flow

import React from 'react';
import classnames from 'classnames';

import './styles.scss';

const TextWithIcon = ({
  score,
  icon,
  isLocale = false,
  isGold = false,
}: {
  score: number,
  icon: string,
  isLocale?: boolean,
  isGold?: boolean,
}) => (
  <div className={classnames(['text-container', isLocale ? 'locale' : 'visitor'])}>
    {isLocale ? (
      <>
        <p className="score">{`${score}${isGold ? 'K' : ''}`}</p>
        <img
          src={icon}
          alt="icon"
          title="icon"
        />
      </>
    ) : (
      <>
        <img
          src={icon}
          alt="icon"
          title="icon"
        />
        <p className="score">{`${score}${isGold ? 'K' : ''}`}</p>
      </>
    )}
  </div>
);

TextWithIcon.defaultProps = {
  isLocale: false,
  isGold: false,
};

export default TextWithIcon;
