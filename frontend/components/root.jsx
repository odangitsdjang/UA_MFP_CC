import React from 'react';
import { Provider } from 'react-redux';
import Box from './box/box';

const Root = ({ store }) => (
  <Provider store={store}>
    <Box />
  </Provider>
);

export default Root;