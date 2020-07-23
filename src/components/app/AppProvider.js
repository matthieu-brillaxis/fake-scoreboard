// @flow

import React from 'react';
import { Provider } from 'react-redux';
import { store } from 'store';
import App from 'containers/AppContainers';

const AppProvider = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

export default AppProvider;
