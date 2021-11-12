/* eslint-disable no-undef */
import React from 'react';
import * as Colors from './colors';
import * as Mixins from './mixins';
import {Text} from 'react-native';
const RawText = ({
  size = Mixins.scaleFont(14),
  weight = '300',
  color = Colors.WHITE,
  style = {},
  children,
  lines = 100,
}) => {
  const textStyle = {color: color, fontSize: size, fontWeight: weight};
  return (
    <Text numberOfLines={lines} style={[textStyle, style]}>
      {children}
    </Text>
  );
};
export default RawText;
