import instance from '../../config/axios';
import {ParseError} from '../../config/utils';
import {isObject} from 'lodash';
export const ForgotPassword = async formData => {
  const responseData = {
    loading: false,
    status: 210,
    message: 'Something went wrong, Please try again.',
  };
  return instance
    .post('/auth/forgot', formData)
    .then(response => {
      if (response.data && response.data.code === 200) {
        response = response.data;
        return {
          ...responseData,
          data: isObject(response.data) ? response.data : {},
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
    .catch(err => {
      return {
        ...responseData,
        message: ParseError(
          err.response && err.response.data ? err.response.data : err.message,
        ),
      };
    });
};
