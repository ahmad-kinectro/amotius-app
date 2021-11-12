/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React from 'react';
import {View, StatusBar} from 'react-native';
import {Colors, Styles} from './src/styles';
import Navigation from './src/navigation';
import KeepAwake from 'react-native-keep-awake';
import FlashMessage from 'react-native-flash-message';

const App = props => {

  return (
    <View style={[Styles.flex, Styles.primaryBackground]}>
      <StatusBar barStyle="light-content" backgroundColor={Colors.PRIMARY} />
      <KeepAwake />
      <Navigation />
      <FlashMessage position="top" />
    </View>
  );
};
export default App;
