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
  dropDownStyle: {
    backgroundColor: Colors.WHISPER,
    borderWidth: 0,
    borderBottomRightRadius: 0,
    borderBottomLeftRadius: 0,
    width: deviceWidth - 40,
  },
  placeholderStyle: {
    color: Colors.GRAY,
    fontSize: 14,
  },
  labelStyle: {
    color: Colors.BLACK,
  },
  activeLabelStyle: {
    color: Colors.BLACK,
    fontSize: 14,
  },
  itemStyle: {
    justifyContent: 'flex-start',
    borderBottomWidth: 1,
    borderBottomColor: Colors.GRAYLIGHT,
    paddingLeft: 10,
    borderRadius: 0,
  },
  checkboxContainer: {
    flexDirection: 'row',
    marginVertical: 5,
    alignItems: 'center',
  },
  checkbox: {
    paddingRight: 5,
  },
  dropDownContainerStyle: {
    backgroundColor: Colors.WHISPERLIGHT,
    borderBottomWidth: 1,
    borderColor: Colors.PURPLELIGHT,
    borderRadius: 0,
    marginBottom: 10,
  },
  containerStyle: {
    height: 50,
  },
  activeItemStyle: {
    backgroundColor: Colors.GRAYLIGHT,
  },
  searchableStyle: {
    height: 40,
    marginBottom: 0,
    borderBottomWidth: 0,
  },
  datePickerStyle: {
    paddingLeft: 10,
    // color: Colors.GRAY,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    backgroundColor: Colors.WHISPERLIGHT,
    borderWidth: 1,
    borderBottomWidth: 1,
    borderColor: Colors.PURPLELIGHT,
    borderRadius: 5,
  },
  dateFont: {
    color: Colors.GRAY,
    opacity: 0.5,
    fontSize: 14,
  },
  dateText: {
    color: Colors.BLACK,
    opacity: 0.5,
    fontSize: 12,
  },
});
