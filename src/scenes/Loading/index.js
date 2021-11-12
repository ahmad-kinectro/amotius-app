/* eslint-disable prettier/prettier */
/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import {View} from 'react-native';
import {Styles, Spinner, Colors} from '../../styles';
import {StackActions} from '@react-navigation/native';

const LoadingScreen = ({navigation, route}) => {
  React.useEffect(() => {
    setTimeout(() =>
      navigation.dispatch(StackActions.replace('Login')), 5000);
  }, []);
  return (
    <View style={[Styles.flexCenter, Styles.primaryBackground]}>
      <Spinner color={Colors.PURPLELIGHT} size={50} />
    </View>
  );
};
export default LoadingScreen;
