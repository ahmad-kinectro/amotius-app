import {Formik} from 'formik';
import React from 'react';
import {
  SafeAreaView,
  Text,
  View,
  Platform,
  TouchableOpacity,
  Alert,
  Keyboard,
} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import TextField from '../../components/TextField';
import * as Yup from 'yup';
import {Colors, Mixins, Spinner, Styles} from '../../styles';
import styles from './styles';
import FIcon from 'react-native-vector-icons/FontAwesome5';
import DropDownPicker from '../../components/Dropdown';
import AIcon from 'react-native-vector-icons/AntDesign';
import DateTimePicker from '../../components/DateTimePicker';
import CheckBox from 'react-native-check-box';

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .required('Please enter your email.')
    .email('Please enter a valid email.'),
  password: Yup.string()
    .matches(/\w*[a-z]\w*/, 'Password must have a small letter')
    .matches(/\w*[A-Z]\w*/, 'Password must have a capital letter')
    .matches(/\d/, 'Password must have a number')
    .min(8, 'Password should be at least 8 character long.')
    .required('Please enter your password.'),
  confirmPassword: Yup.string()
    .required('Confirm Password is required.')
    .oneOf([Yup.ref('password')], 'Password not match.'),
  first_name: Yup.string().required('Please enter first name.'),
  last_name: Yup.string().required('Please enter last name.'),
  contact: Yup.string().required('Please enter your contact number.'),
  address: Yup.string().required('Please enter your address.'),
});
const Register = props => {
  const passwordField = React.useRef(null);
  const ConfirmPasswordField = React.useRef(null);
  const lastNameFeild = React.useRef(null);
  const emailField = React.useRef(null);
  const addressField = React.useRef(null);
  const contactField = React.useRef(null);
  const questionFeild = React.useRef(null);

  const [loading, setLoading] = React.useState(false);
  const [hidePassword, sethidePassword] = React.useState(true);
  const [confirmHidePassword, setConfirmHidePassword] = React.useState(true);
  const securityQuestions = [
    {label: 'Your first pet name?', value: 'Your first pet name?'},
    {label: 'Your favorite food?', value: 'Your favorite food?'},
    {label: 'Your nick name?', value: 'Your nick name?'},
    {label: 'Your favorite sports?', value: 'Your favorite sports?'},
  ];
  const [securityQuestionsVisible, setSecurityQuestionsVisibility] =
    React.useState(false);
  const [isTermSelected, setIsTermSelected] = React.useState(false);
  const {navigation} = props;

  const setTermSelected = () => {
    setIsTermSelected(true);
  };
  const changeVisibility = () => {
    Keyboard.dismiss();
    setSecurityQuestionsVisibility(false);
  };
  const handleChange = (formData, formik) => {
    setLoading(true);
    console.log('formdata', formData);
    if (formData) {
      setLoading(false);
      Alert.alert('hi ' + formData);
    }
    // await AuthLogin(formData.email, formData.password).then(res => {
    //   setLoading(false);
    //   if (res.status === 200) {
    //     console.log('res', res)
    //     props.setAuth(true);
    //     props.setUserId(res.userId);
    //     props.setOrganization_id(res.organization_id);
    //     props.setUserName(res.userName)
    //     props.setUserRole(res.useRole)
    //     showMessage({
    //       message: '',
    //       description: res.message,
    //       type: 'success',
    //     });
    //     // navigation.dispatch(StackActions.replace('Drawer'));
    //   } else {
    //     showMessage({
    //       message: '',
    //       description: res.message,
    //       type: 'danger',
    //     });
    //   }
    // });
    // formik.setSubmitting(false);
  };

  return (
    <SafeAreaView style={[Styles.flex, Styles.primaryBackground]}>
      {/* <StatusBar barStyle={'dark-content'} /> */}
      <TouchableOpacity
        style={[Styles.flex]}
        onPress={() => {
          changeVisibility();
        }}
        activeOpacity={1}>
        <KeyboardAwareScrollView keyboardShouldPersistTaps={'always'}>
          <Formik onSubmit={handleChange} validationSchema={validationSchema}>
            {props => (
              <View style={[Styles.flex, styles.mainWrapper]}>
                {console.log('the props', props)}
                <Text
                  color={Colors.BLACK}
                  style={{
                    fontSize: Mixins.scaleFont(24),
                    fontWeight: 'bold',
                    color: Colors.BLACK,
                  }}>
                  Sign Up
                </Text>
                <View style={{height: 20}} />
                <View style={Styles.flexCenter}>
                  <TextField
                    label="First Name"
                    name="first_name"
                    inputStyle={{
                      borderWidth: 1,
                      borderColor: Colors.PURPLELIGHT,
                    }}
                    tintColor={Colors.BLACK}
                    textColor={Colors.BLACK}
                    baseColor={Colors.BLACK}
                    placeholderTextColor={Colors.GRAY}
                    onChangeText={first_name =>
                      props.setFieldValue('first_name', first_name)
                    }
                    onBlur={() => props.setFieldTouched('first_name')}
                    error={props.touched.first_name && props.errors.first_name}
                    // keyboardType="email-address"
                    autoFocus={true}
                    autoCapitalize="none"
                    autoCorrect={false}
                    // autoCompleteType="email"
                    returnKeyType="next"
                    onSubmitEditing={() => {
                      lastNameFeild.current.focus();
                    }}
                    blurOnSubmit={false}
                    //   leftIcon={
                    //     <EIcon name="email" size={16} color={Colors.WHITE} />
                    //   }
                    fontSize={14}
                  />
                </View>
                <View style={Styles.flexCenter}>
                  <TextField
                    label="Last Name"
                    name="last_name"
                    inputStyle={{
                      borderWidth: 1,
                      borderColor: Colors.PURPLELIGHT,
                    }}
                    tintColor={Colors.BLACK}
                    textColor={Colors.BLACK}
                    baseColor={Colors.BLACK}
                    placeholderTextColor={Colors.GRAY}
                    onChangeText={last_name =>
                      props.setFieldValue('last_name', last_name)
                    }
                    onBlur={() => props.setFieldTouched('last_name')}
                    error={props.touched.last_name && props.errors.last_name}
                    // keyboardType="email-address"
                    // autoFocus={true}
                    autoCapitalize="none"
                    autoCorrect={false}
                    // autoCompleteType="email"
                    returnKeyType="next"
                    onSubmitEditing={() => {
                      emailField.current.focus();
                    }}
                    ref={lastNameFeild}
                    blurOnSubmit={false}
                    //   leftIcon={
                    //     <EIcon name="email" size={16} color={Colors.WHITE} />
                    //   }
                    fontSize={14}
                  />
                </View>
                <View style={Styles.flexCenter}>
                  <TextField
                    label="Email Address"
                    name="email"
                    inputStyle={{
                      borderWidth: 1,
                      borderColor: Colors.PURPLELIGHT,
                    }}
                    tintColor={Colors.BLACK}
                    textColor={Colors.BLACK}
                    baseColor={Colors.BLACK}
                    placeholderTextColor={Colors.GRAY}
                    onChangeText={email => props.setFieldValue('email', email)}
                    onBlur={() => props.setFieldTouched('email')}
                    error={props.touched.email && props.errors.email}
                    keyboardType="email-address"
                    autoCapitalize="none"
                    autoCorrect={false}
                    autoCompleteType="email"
                    returnKeyType="next"
                    onSubmitEditing={() => {
                      contactField.current.focus();
                    }}
                    ref={emailField}
                    blurOnSubmit={false}
                    fontSize={14}
                  />
                </View>
                <View style={Styles.flexCenter}>
                  <TextField
                    label="Contact Number"
                    name="contact"
                    inputStyle={{
                      borderWidth: 1,
                      borderColor: Colors.PURPLELIGHT,
                    }}
                    tintColor={Colors.BLACK}
                    textColor={Colors.BLACK}
                    baseColor={Colors.BLACK}
                    placeholderTextColor={Colors.GRAY}
                    onChangeText={contact =>
                      props.setFieldValue('contact', contact)
                    }
                    onBlur={() => props.setFieldTouched('contact')}
                    error={props.touched.contact && props.errors.contact}
                    // keyboardType="email-address"
                    returnKeyType="next"
                    autoCapitalize="none"
                    autoCorrect={false}
                    onSubmitEditing={() => {
                      addressField.current.focus();
                    }}
                    ref={contactField}
                    blurOnSubmit={false}
                    //   leftIcon={
                    //     <EIcon name="email" size={16} color={Colors.WHITE} />
                    //   }
                    fontSize={14}
                  />
                </View>
                <View style={Styles.flexCenter}>
                  <TextField
                    label="Address"
                    name="address"
                    inputStyle={{
                      borderWidth: 1,
                      borderColor: Colors.PURPLELIGHT,
                    }}
                    tintColor={Colors.BLACK}
                    textColor={Colors.BLACK}
                    baseColor={Colors.BLACK}
                    placeholderTextColor={Colors.GRAY}
                    onChangeText={address =>
                      props.setFieldValue('address', address)
                    }
                    onBlur={() => props.setFieldTouched('address')}
                    error={props.touched.address && props.errors.address}
                    autoCapitalize="none"
                    autoCorrect={false}
                    returnKeyType="next"
                    onSubmitEditing={() => {
                      passwordField.current.focus();
                    }}
                    ref={addressField}
                    blurOnSubmit={false}
                    fontSize={14}
                  />
                </View>
                <Text
                  style={[
                    {
                      marginBottom: 10,
                      fontSize: Mixins.scaleFont(12),
                      color: Colors.BLACK,
                    },
                  ]}>
                  Date Of Birth
                </Text>
                <DateTimePicker
                  style={{
                    width: '100%',
                    paddingBottom: 5,
                    marginBottom: 10,
                  }}
                  zIndex={5004}
                  check={true}
                  date={props.values.endDate || null}
                  mode="datetime"
                  placeholder="Select Date Time"
                  confirmBtnText="OK"
                  cancelBtnText="CANCEL"
                  format="YYYY-MM-DD HH:mm"
                  onDateChange={date => {
                    props.setFieldValue('endDate', date);
                  }}
                  iconComponent={
                    <AIcon
                      name="calendar"
                      color={Colors.PURPLELIGHT}
                      size={22}
                      style={[
                        {
                          position: 'absolute',
                          top: 8,
                          right: 5,
                          paddingBottom: 10,
                        },
                      ]}
                    />
                  }
                  customStyles={{
                    placeholderText: styles.dateFont,
                    dateInput: [styles.datePickerStyle],
                    dateText: styles.dateText,
                    btnTextConfirm: {
                      color: Colors.WHITE,
                    },
                    btnTextCancel: {
                      color: Colors.WHITE,
                    },
                    datePickerCon: {
                      backgroundColor: Colors.SECONDARY,
                    },
                  }}
                />
                <View style={[Styles.flexCenter]}>
                  <TextField
                    label="Password"
                    name="password"
                    inputStyle={{
                      borderWidth: 1,
                      borderColor: Colors.PURPLELIGHT,
                    }}
                    tintColor={Colors.BLACK}
                    textColor={Colors.BLACK}
                    baseColor={Colors.BLACK}
                    placeholderTextColor={Colors.GRAY}
                    secureTextEntry={hidePassword}
                    onChangeText={password =>
                      props.setFieldValue('password', password)
                    }
                    onBlur={() => props.setFieldTouched('password')}
                    error={props.touched.password && props.errors.password}
                    keyboardType={
                      Platform.OS === 'ios'
                        ? 'numbers-and-punctuation'
                        : 'default'
                    }
                    returnKeyType="next"
                    onSubmitEditing={() => {
                      ConfirmPasswordField.current.focus();
                    }}
                    ref={passwordField}
                    fontSize={14}
                  />
                  <View
                    style={{
                      position: 'absolute',
                      right: 10,
                      backgroundColor: Colors.TRANSPARENT,
                      height: 30,
                      width: 20,
                      // , bottom: 15, top: 10
                      justifyContent: 'flex-end',
                      alignContent: 'center',
                      alignItems: 'center',
                    }}>
                    <FIcon
                      name={hidePassword ? 'eye-slash' : 'eye'}
                      size={15}
                      color={
                        hidePassword ? Colors.GRAYLIGHT : Colors.PURPLELIGHT
                      }
                      onPress={() => sethidePassword(!hidePassword)}
                    />
                  </View>
                </View>
                <View style={[Styles.flexCenter]}>
                  <TextField
                    label="Confirm Password"
                    name="confirmPassword"
                    inputStyle={{
                      borderWidth: 1,
                      borderColor: Colors.PURPLELIGHT,
                    }}
                    tintColor={Colors.BLACK}
                    textColor={Colors.BLACK}
                    baseColor={Colors.BLACK}
                    placeholderTextColor={Colors.GRAY}
                    secureTextEntry={confirmHidePassword}
                    onChangeText={confirmPassword =>
                      props.setFieldValue('confirmPassword', confirmPassword)
                    }
                    onBlur={() => props.setFieldTouched('confirmPassword')}
                    error={
                      props.touched.confirmPassword &&
                      props.errors.confirmPassword
                    }
                    keyboardType={
                      Platform.OS === 'ios'
                        ? 'numbers-and-punctuation'
                        : 'default'
                    }
                    returnKeyType="next"
                    onSubmitEditing={() => {
                      questionFeild.current.focus();
                    }}
                    ref={ConfirmPasswordField}
                    fontSize={14}
                  />
                  <View
                    style={{
                      position: 'absolute',
                      right: 10,
                      backgroundColor: Colors.TRANSPARENT,
                      height: 30,
                      width: 20,
                      // , bottom: 15, top: 10
                      justifyContent: 'flex-end',
                      alignContent: 'center',
                      alignItems: 'center',
                    }}>
                    <FIcon
                      name={confirmHidePassword ? 'eye-slash' : 'eye'}
                      size={15}
                      color={
                        confirmHidePassword
                          ? Colors.GRAYLIGHT
                          : Colors.PURPLELIGHT
                      }
                      onPress={() =>
                        setConfirmHidePassword(!confirmHidePassword)
                      }
                    />
                  </View>
                </View>

                {/* dropdown */}
                <Text
                  style={[
                    {
                      marginBottom: 10,
                      fontSize: Mixins.scaleFont(12),
                      color: Colors.BLACK,
                    },
                  ]}>
                  Security Question
                </Text>
                <DropDownPicker
                  items={securityQuestions}
                  defaultValue={props.values.primaryCriteria}
                  dropDownMaxHeight={200}
                  scrollViewProps={{
                    keyboardShouldPersistTaps: 'always',
                  }}
                  searchable={true}
                  searchablePlaceholder="Search Security Question"
                  searchablePlaceholderTextColor={Colors.GRAY}
                  searchableStyle={styles.searchableStyle}
                  searchableError={() => <Text>No Questions Found</Text>}
                  isVisible={securityQuestionsVisible}
                  onOpen={() => {
                    // changeVisibility();
                    setSecurityQuestionsVisibility(true);
                  }}
                  onClose={() => setSecurityQuestionsVisibility(false)}
                  placeholder="Select Security Question"
                  containerStyle={styles.containerStyle}
                  activeItemStyle={styles.activeItemStyle}
                  style={styles.dropDownContainerStyle}
                  itemStyle={styles.itemStyle}
                  arrowColor={Colors.GRAY}
                  labelStyle={styles.labelStyle}
                  activeLabelStyle={styles.activeLabelStyle}
                  selectedLabelStyle={styles.activeLabelStyle}
                  placeholderStyle={styles.placeholderStyle}
                  dropDownStyle={styles.dropDownStyle}
                  onChangeItem={item => {
                    props.setFieldValue('securityQuestions', item.value);
                  }}
                  zIndex={5000}
                />
                <View style={Styles.flexCenter}>
                  <TextField
                    label="Answer"
                    name="answer"
                    inputStyle={{
                      borderWidth: 1,
                      borderColor: Colors.PURPLELIGHT,
                    }}
                    tintColor={Colors.BLACK}
                    textColor={Colors.BLACK}
                    baseColor={Colors.BLACK}
                    placeholderTextColor={Colors.GRAY}
                    onChangeText={answer =>
                      props.setFieldValue('answer', answer)
                    }
                    // onBlur={() => props.setFieldTouched('email')}
                    // error={props.touched.email && props.errors.email}
                    autoCapitalize="none"
                    autoCorrect={false}
                    ref={questionFeild}
                    returnKeyType="done"
                    onSubmitEditing={props.handleSubmit}
                    blurOnSubmit={false}
                    fontSize={14}
                  />
                </View>
                <View style={styles.checkboxContainer}>
                  <CheckBox
                    isChecked={isTermSelected}
                    onClick={setTermSelected}
                    style={styles.checkbox}
                    checkBoxColor={Colors.PURPLELIGHT}
                    checkedCheckBoxColor={Colors.PURPLELIGHT}
                    uncheckedCheckBoxColor={Colors.PURPLELIGHT}
                  />
                  <TouchableOpacity onPress={() => alert('Terms & Conditions')}>
                    <Text
                      style={{
                        color: Colors.BLACK,
                        fontSize: Mixins.scaleFont(12),
                      }}>
                      Agree to terms and conditions
                    </Text>
                  </TouchableOpacity>
                </View>
                {/* <View>
                    <Text
                      style={{color: {Colors.BLACK}}}
                      onPress={(props) => {
                        this.props.navigation.navigate('Register');
                      }}>
                      Forget Password
                    </Text>
                  </View> */}
                <View style={[Styles.authButtonWrapper]}>
                  <TouchableOpacity
                    style={[
                      Styles.authButtonMargin,
                      Styles.flexCenter,
                      styles.TouchableOpacity,
                    ]}
                    // disabled={
                    //   !props.isValid ||
                    //   !props.dirty ||
                    //   props.isSubmitting ||
                    //   loading
                    // }
                    onPress={() => {
                      props.handleSubmit();
                    }}>
                    {!loading && (
                      <Text
                        style={[
                          Styles.textAuthButton,
                          {
                            paddingRight: loading ? 15 : 0,
                          },
                        ]}>
                        Sign Up
                      </Text>
                    )}
                    {loading && <Spinner size={30} color={Colors.PRIMARY} />}
                  </TouchableOpacity>

                  <View style={Styles.rowFlexEnd}>
                    <TouchableOpacity
                      style={Styles.flexDirectionRow}
                      activeOpacity={0.6}
                      onPress={() => {
                        navigation.navigate('Login');
                      }}>
                      <Text style={[Styles.text12Black]}>
                        Already have an account? |{' '}
                        <Text style={[Styles.text12BlackBold]}>Sign In</Text>
                      </Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            )}
          </Formik>
        </KeyboardAwareScrollView>
      </TouchableOpacity>
    </SafeAreaView>
  );
};
export default Register;
