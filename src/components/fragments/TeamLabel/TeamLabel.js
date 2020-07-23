// @flow

import React from 'react';
import classnames from 'classnames';
import defautLogoLocale from 'assets/img/defaultLogoLocale.png';
import defautLogoVisitor from 'assets/img/defaultLogoVisitor.png';

import './styles.scss';

const TeamLabel = ({
  name,
  logo,
  isLocale = false,
}: {
  name: string,
  logo: string,
  isLocale?: boolean,
}) => (
  <div className={classnames(['team-label-container', isLocale ? 'locale' : 'visitor'])}>
    {isLocale ? (
      <>
        <p>{name}</p>
        <img
          src={logo || defautLogoLocale}
          alt="logo local team"
          title="logo local team"
        />
      </>
    ) : (
      <>
        <img
          src={logo || defautLogoVisitor}
          alt="logo local team"
          title="logo local team"
        />
        <p>{name}</p>
      </>
    )}
  </div>
);

TeamLabel.defaultProps = {
  isLocale: false,
};

export default TeamLabel;
