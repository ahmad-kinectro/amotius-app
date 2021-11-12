/* eslint-disable no-undef */
import Loader from 'react-native-spinkit';
import React from 'react';
import * as Colors from './colors';

export default Spinner = ({
  visible = true,
  size = 40,
  type = 'Wave',
  color = Colors.WHITE,
}) => {
  return <Loader isVisible={visible} size={size} type={type} color={color} />;
};
