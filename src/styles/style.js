/* eslint-disable prettier/prettier */
import {StyleSheet} from 'react-native';
import * as Colors from './colors';
import * as Mixins from './mixins';

const styles = StyleSheet.create({
  flex: {
    flex: 1,
  },
  justifyContentCenter: {
    justifyContent: 'center',
  },
  justifyContentSpaceBetween: {
    justifyContent: 'space-between',
  },
  alignItemsCenter: {
    alignItems: 'center',
  },
  alignSelfCenter: {
    alignSelf: 'center',
  },
  primaryBackground: {
    backgroundColor: Colors.WHITE,
  },
  flexCenter: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  flexCenterEnd: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  flexCenterStart: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  flexContentEnd: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  loadingBackground: {
    backgroundColor: Colors.BLACK,
  },
  flexDirectionColumn: {
    flexDirection: 'column',
  },
  flexDirectionRow: {
    flexDirection: 'row',
  },
  pL10: {
    paddingLeft: 10,
  },
  pL5: {
    paddingLeft: 5,
  },
  pL15: {
    paddingLeft: 15,
  },
  pL20: {
    paddingLeft: 20,
  },
  pR10: {
    paddingRight: 10,
  },
  pR5: {
    paddingRight: 5,
  },
  pR15: {
    paddingRight: 15,
  },
  pR20: {
    paddingRight: 20,
  },
  fend: {
    alignSelf: 'flex-end',
  },
  pB10: {paddingBottom: 10},
  mT10: {marginTop: 10},
  mT15: {marginTop: 15},
  mT5: {marginTop: 5},
  mB5: {marginBottom: 5},
  mB10: {marginBottom: 10},
  mB15: {marginBottom: 15},
  mB20: {marginBottom: 20},
  mV10: {marginVertical: 10},
  mV15: {marginVertical: 15},
  background_LIGHT_BLACK_2: {backgroundColor: Colors.LIGHT_BLACK_2},
  positionRelative: {position: 'relative'},
  rowFlexEnd: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  authButtonMargin: {},
  authButtonWrapper: {
    // backgroundColor: 'red',
    flex: 0.4,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    marginTop: 40,
  },
  textCenter: {
    textAlign: 'center',
  },
  authLogo: {
    width: 200,
    height: 200,
    borderRadius: 10,
    // backgroundColor: 'red',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginVertical: 2.5,
  },
  dateInputField: {
    paddingLeft: 5,
    borderWidth: 0,
    color: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: Colors.GRAY,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    paddingTop: 5,
    paddingBottom: 10,
  },
  floatButton: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: Colors.DODGER_BLUE,
    position: 'absolute',
    bottom: 10,
    right: 10,
  },
  w100: {
    width: '100%',
  },
  text12Black: {
    color: Colors.BLACK,
    fontSize: Mixins.scaleFont(12),
  },
  text12BlackBold: {
    color: Colors.BLACK,
    fontSize: Mixins.scaleFont(12), fontWeight: 'bold',

  },
  textAuthButton: {
    color: Colors.WHITE,
    fontSize: Mixins.scaleFont(16),
    fontWeight: 'bold',
  },
  text24BlackBold: {
    fontSize: Mixins.scaleFont(24),
    fontWeight: 'bold', color: Colors.BLACK
  },
  eyeView: {
    position: 'absolute',
    right: 10, backgroundColor: Colors.TRANSPARENT,
    height: 30, width: 20
    // , bottom: 15, top: 10
    , justifyContent: 'flex-end', alignContent: 'center', alignItems: 'center',
  },
  DateTimePicker: {
    width: '100%',
    paddingBottom: 5,
    marginBottom: 10,
  },
  DateIconComponent: {
    position: 'absolute',
    top: 8,
    right: 5,
    paddingBottom: 10,
  },
});
export default styles;
