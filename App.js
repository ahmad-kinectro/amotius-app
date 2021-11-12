import React from 'react';
import {View, StatusBar} from 'react-native';
import {Colors, Styles} from './src/styles';
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
