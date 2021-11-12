import React from 'react';
import {Platform} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {Colors} from '../styles';
import FIcon from 'react-native-vector-icons/FontAwesome5';
import Login from '../scenes/Login';
import LoadingScreen from '../scenes/Loading';
import Register from '../scenes/Register';
import ForgetPassword from '../scenes/ForgetPassword';
import AIcon from 'react-native-vector-icons/AntDesign';

const Stack = createStackNavigator();

const StackCommonHeaderOptions = (navigation, back = false) => {
  if (back) {
    return {
      headerLeft: () => (
        <AIcon
          name="arrowleft"
          color={Colors.WHITE}
          size={28}
          style={{paddingLeft: 15}}
          onPress={() => navigation.goBack()}
        />
      ),
    };
  }
  return {
    headerLeft: () => (
      <FIcon
        name="bars"
        color={Colors.WHITE}
        size={28}
        style={{paddingLeft: 15}}
        onPress={() => navigation.toggleDrawer()}
      />
    ),
  };
};

const StackCommonOptions = {
  headerTitleAlign: 'center',
  headerStyle: {
    backgroundColor: Colors.PRIMARY,
    borderBottomWidth: Platform.OS === 'ios' ? 0.1 : 0.3,
    borderBottomColor: Colors.GRAYLIGHT,
  },
  headerTintColor: Colors.WHITE,
};

const Navigation = ({}) => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        presentation="card"
        initialRouteName="Loading"
        screenOptions={StackCommonOptions}>
        <Stack.Screen
          name="Loading"
          component={LoadingScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen name="Login" options={{headerShown: false}}>
          {props => <Login {...props} />}
        </Stack.Screen>
        <Stack.Screen name="Register" options={{headerShown: false}}>
          {props => <Register {...props} />}
        </Stack.Screen>
        <Stack.Screen
          name="ForgetPassword"
          headerMode="screen"
          component={ForgetPassword}
          options={({navigation}) => ({
            title: 'Forget Password',
            ...StackCommonHeaderOptions(navigation, true),
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
