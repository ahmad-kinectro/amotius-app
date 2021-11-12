import {Dimensions, Platform} from 'react-native';
import {isTablet} from 'react-native-device-info';
// This coul be a reducer or something if needed globally
export const deviceHeight = Dimensions.get('window').height;
export const deviceWidth = Dimensions.get('window').width;
export const IS_IOS = Platform.OS === 'ios';
export const IS_ANDROID = Platform.OS === 'android';
export const IS_IPHONEX =
  Platform.OS === 'ios' &&
  (deviceHeight === 812 ||
    deviceWidth === 812 ||
    deviceHeight === 896 ||
    deviceWidth === 896);
export const IS_PAD = isTablet() ? true : false;
export const getActionBarHeight = () => {
  if (IS_IPHONEX) {
    return 80;
  }
  if (IS_IOS) {
    return 50;
  } else {
    return 30;
  }
};

export const getFixedHeaderHeight = () => {
  if (IS_IPHONEX) {
    return 80;
  }
  if (IS_IOS) {
    return 80;
  } else {
    return 50;
  }
};
export function isLandscape() {
  const {width, height} = Dimensions.get('window');
  return width > height;
}
