/* eslint-disable prettier/prettier */
import {isArray, isString} from 'lodash';
import {AsyncStorage} from '@react-native-community/async-storage';
export const getAuthHeader = () => {
  return new Promise((resolve, reject) => {
    const token = AsyncStorage.getItem('token');
    if (token) {
      resolve({
        headers: {
          authorization: 'Bearer ' + token,
        },
      });
    } else {reject(null);}
  });
};
export const ParseError = (error) => {
  let err = 'Something went wrong, Please try again.';
  if (error.message && isArray(error.message)) {
    err = error.message[0];
    if (!isString(err) && isArray(err)) {
      err = err[0] && err[0].msg ? err[0].msg : err[0];
    } else {
      err = err.msg;
    }
  } else {
    if (error.message && isString(error.message)) {
      err = error.message;
    }
    if (error.message && isString(error.message)) {
      err = error.message;
    }
  }
  if (err === 'Invalid login credentials. Please try again.') {
    err = 'Email and password is invalid!';
  }
  return err;
};
