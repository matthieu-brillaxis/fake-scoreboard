// @flow
import React from 'react';
import loader from 'assets/img/loader.gif';
import './styles.scss';

const Loader = () => (
  <div className="loader">
    <img
      src={loader}
      title="loader"
      alt="loader"
    />
  </div>
);

export default Loader;
