import React from 'react';
import {SafeAreaView, Text, TouchableOpacity} from 'react-native';
import {Styles} from '../../styles';

const Dashboard = props => {
  const {navigation} = props;

  const Logout = () => {
    navigation.navigate('Login');
  };

  return (
    <SafeAreaView style={[Styles.flex, Styles.primaryBackground]}>
      <TouchableOpacity style={[Styles.flexCenter]} onPress={() => Logout()}>
        <Text>Logout</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Dashboard;
