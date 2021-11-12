/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React from 'react';
import {
  SafeAreaView,
  Text,
  View,
  StatusBar,
  Platform,
  TouchableOpacity,
  Alert,
  Keyboard,
} from 'react-native';

import {Colors, Mixins, Spinner, Styles} from './src/styles';

import Navigation from './src/navigation';
import KeepAwake from 'react-native-keep-awake';


const App = props => {

  return (
    <View style={[Styles.flex, Styles.primaryBackground]}>
      <StatusBar barStyle="light-content" backgroundColor={Colors.PRIMARY} />
      <KeepAwake />
      <Navigation />
    </View>
  );
};
export default App;
