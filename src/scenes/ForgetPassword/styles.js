import {StyleSheet} from 'react-native';
import {Styles, Colors} from '../../styles';
import {IS_PAD, deviceWidth} from '../../styles/orientation';

export default StyleSheet.create({
  mainWrapper: {
    paddingLeft: IS_PAD ? deviceWidth / 5 : 30,
    paddingRight: IS_PAD ? deviceWidth / 5 : 30,
    paddingVertical: 20,
  },
  logoWrapper: {
    flex: 0.8,
    paddingBottom: 20,
    paddingTop: 20,
  },
  TouchableOpacity: {
    height: 50,
    backgroundColor: Colors.PURPLELIGHT,
    width: deviceWidth - (IS_PAD ? (deviceWidth / 5) * 2 : 60),
    borderRadius: 5,
  },
});
