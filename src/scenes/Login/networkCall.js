/* eslint-disable prettier/prettier */
import instance from '../../config/axios';
import {AsyncStorage} from '@react-native-community/async-storage';
import {getAuthHeader, ParseError} from '../../config/utils';
import {isObject} from 'lodash';
export const UserLogin = async (formData) => {
  const responseData = {
    loading: false,
    status: 210,
    message: 'Something went wrong, Please try again.',
  };
  return instance
    .post('/auth/login', formData)
    .then((response) => {
      if (response.data && response.data.code === 200) {
        response = response.data;
        // AsyncStorage.setItem('token', response?.user?.token);
        // AsyncStorage.setItem('user', JSON.stringify(response?.user));
        // AsyncStorage.setItem('role', response?.user.role);
        return {
          ...responseData,
          role: response.user.role,
          status: 200,
          message: response.message,
        };
      } else {
        return {
          ...responseData,
          message: ParseError(response.data),
        };
      }
    })
    .catch((err) => {
      return {
        ...responseData,
        message: ParseError(
          err.response && err.response.data ? err.response.data : err.message
        ),
      };
    });
};
