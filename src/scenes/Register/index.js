import {Formik} from 'formik';
import React from 'react';
import {
  SafeAreaView,
  Text,
  View,
  Platform,
  TouchableOpacity,
  Keyboard,
} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import TextField from '../../components/TextField';
import * as Yup from 'yup';
import {Colors, Spinner, Styles} from '../../styles';
import styles from './styles';
import FIcon from 'react-native-vector-icons/FontAwesome5';
import DropDownPicker from '../../components/Dropdown';
import AIcon from 'react-native-vector-icons/AntDesign';
import DateTimePicker from '../../components/DateTimePicker';
import CheckBox from 'react-native-check-box';
import Logo from '../../assets/amotius.png';
import FastImage from 'react-native-fast-image';
import {UserRegister} from './networkCall';
import {showMessage} from 'react-native-flash-message';

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
  firstName: Yup.string().required('Please enter first name.'),
  lastName: Yup.string().required('Please enter last name.'),
  contactNumber: Yup.string().required('Please enter your contact number.'),
  address: Yup.string().required('Please enter your address.'),
  answer: Yup.string().optional('Pleas anser the security question'),
});
const Register = props => {
  const passwordField = React.useRef(null);
  const ConfirmPasswordField = React.useRef(null);
  const lastNameFeild = React.useRef(null);
  const emailField = React.useRef(null);
  const addressField = React.useRef(null);
  const contactNumberField = React.useRef(null);
  const questionFeild = React.useRef(null);
  const [loading, setLoading] = React.useState(false);
  const [hidePassword, setHidePassword] = React.useState(true);
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
    UserRegister(formData).then(res => {
      if (res.status === 200) {
        setLoading(false);
        showMessage({
          visible: true,
          key: Math.random().toString(36).substring(7),
          type: 'success',
          message: res.message,
        });
        navigation.navigate('Login');
      } else {
        setLoading(false);
        showMessage({
          visible: true,
          key: Math.random().toString(36).substring(7),
          type: 'error',
          message: res.message,
        });
      }
    });
    formik.setSubmitting(false);
  };

  return (
    <SafeAreaView style={[Styles.flex, Styles.primaryBackground]}>
      <TouchableOpacity
        style={[Styles.flex]}
        onPress={() => {
          changeVisibility();
        }}
        activeOpacity={1}>
        <KeyboardAwareScrollView keyboardShouldPersistTaps={'always'}>
          <Formik
            onSubmit={handleChange}
            validationSchema={validationSchema}
            initialValues={{
              firstName: '',
              lastName: '',
              email: '',
              contactNumber: '',
              role: 'Customer',
              address: '',
              dob: '',
              password: '',
              confirmPassword: '',
              securityQuestion: '',
              securityAnswer: '',
            }}>
            {props => (
              <View style={[Styles.flex, styles.mainWrapper]}>
                <View style={[Styles.flexCenter]}>
                  <FastImage
                    source={Logo}
                    style={Styles.authLogo}
                    resizeMode={FastImage.resizeMode.contain}
                  />
                </View>
                <Text style={[Styles.text24BlackBold]}>Create an account</Text>
                <View style={{height: 20}} />
                <View style={Styles.flexCenter}>
                  <TextField
                    label="First Name"
                    name="firstName"
                    inputStyle={{
                      borderWidth: 1,
                      borderColor: Colors.PURPLELIGHT,
                    }}
                    tintColor={Colors.BLACK}
                    textColor={Colors.BLACK}
                    baseColor={Colors.BLACK}
                    placeholderTextColor={Colors.GRAY}
                    onChangeText={firstName =>
                      props.setFieldValue('firstName', firstName)
                    }
                    onBlur={() => props.setFieldTouched('firstName')}
                    error={props.touched.firstName && props.errors.firstName}
                    // autoFocus={true}
                    autoCapitalize="none"
                    autoCorrect={false}
                    returnKeyType="next"
                    onSubmitEditing={() => {
                      lastNameFeild.current.focus();
                    }}
                    blurOnSubmit={false}
                    fontSize={14}
                  />
                </View>
                <View style={Styles.flexCenter}>
                  <TextField
                    label="Last Name"
                    name="lastName"
                    inputStyle={{
                      borderWidth: 1,
                      borderColor: Colors.PURPLELIGHT,
                    }}
                    tintColor={Colors.BLACK}
                    textColor={Colors.BLACK}
                    baseColor={Colors.BLACK}
                    placeholderTextColor={Colors.GRAY}
                    onChangeText={lastName =>
                      props.setFieldValue('lastName', lastName)
                    }
                    onBlur={() => props.setFieldTouched('lastName')}
                    error={props.touched.lastName && props.errors.lastName}
                    autoCapitalize="none"
                    autoCorrect={false}
                    returnKeyType="next"
                    onSubmitEditing={() => {
                      emailField.current.focus();
                    }}
                    ref={lastNameFeild}
                    blurOnSubmit={false}
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
                      contactNumberField.current.focus();
                    }}
                    ref={emailField}
                    blurOnSubmit={false}
                    fontSize={14}
                  />
                </View>
                <View style={Styles.flexCenter}>
                  <TextField
                    label="Contact Number"
                    name="contactNumber"
                    inputStyle={{
                      borderWidth: 1,
                      borderColor: Colors.PURPLELIGHT,
                    }}
                    tintColor={Colors.BLACK}
                    textColor={Colors.BLACK}
                    baseColor={Colors.BLACK}
                    placeholderTextColor={Colors.GRAY}
                    onChangeText={contactNumber =>
                      props.setFieldValue('contactNumber', contactNumber)
                    }
                    onBlur={() => props.setFieldTouched('contactNumber')}
                    error={
                      props.touched.contactNumber && props.errors.contactNumber
                    }
                    returnKeyType="next"
                    autoCapitalize="none"
                    autoCorrect={false}
                    onSubmitEditing={() => {
                      addressField.current.focus();
                    }}
                    ref={contactNumberField}
                    blurOnSubmit={false}
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
                <Text style={[Styles.text12Black, {marginBottom: 10}]}>
                  Date Of Birth
                </Text>
                <DateTimePicker
                  style={[Styles.DateTimePicker]}
                  zIndex={5004}
                  check={true}
                  maxDate={new Date()}
                  date={props.values.dob || null}
                  mode="datetime"
                  placeholder="Select Date Time"
                  confirmBtnText="OK"
                  cancelBtnText="CANCEL"
                  format="YYYY-MM-DD HH:mm"
                  onDateChange={date => {
                    props.setFieldValue('dob', date);
                  }}
                  iconComponent={
                    <AIcon
                      name="calendar"
                      color={Colors.PURPLELIGHT}
                      size={22}
                      style={[Styles.DateIconComponent]}
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
                  <TouchableOpacity
                    style={[Styles.eyeView]}
                    onPress={() => setHidePassword(!hidePassword)}
                    activeOpacity={0.6}>
                    <FIcon
                      name={hidePassword ? 'eye-slash' : 'eye'}
                      size={15}
                      color={
                        hidePassword ? Colors.GRAYLIGHT : Colors.PURPLELIGHT
                      }
                    />
                  </TouchableOpacity>
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
                  <TouchableOpacity
                    style={[Styles.eyeView]}
                    onPress={() => setConfirmHidePassword(!confirmHidePassword)}
                    activeOpacity={0.6}>
                    <FIcon
                      name={confirmHidePassword ? 'eye-slash' : 'eye'}
                      size={15}
                      color={
                        confirmHidePassword
                          ? Colors.GRAYLIGHT
                          : Colors.PURPLELIGHT
                      }
                    />
                  </TouchableOpacity>
                </View>
                <Text style={[Styles.text12Black, {marginBottom: 10}]}>
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
                    changeVisibility();
                    setSecurityQuestionsVisibility(true);
                  }}
                  onClose={() => setSecurityQuestionsVisibility(false)}
                  placeholder="Select Security Question"
                  containerStyle={styles.containerStyle}
                  activeItemStyle={styles.activeItemStyle}
                  style={styles.dropDownContainerStyle}
                  itemStyle={styles.itemStyle}
                  arrowColor={Colors.PURPLELIGHT}
                  labelStyle={styles.labelStyle}
                  activeLabelStyle={styles.activeLabelStyle}
                  selectedLabelStyle={styles.activeLabelStyle}
                  placeholderStyle={styles.placeholderStyle}
                  dropDownStyle={styles.dropDownStyle}
                  onChangeItem={item => {
                    props.setFieldValue('securityQuestion', item.value);
                  }}
                  zIndex={5000}
                />
                <View style={Styles.flexCenter}>
                  <TextField
                    label="Answer"
                    name="securityAnswer"
                    inputStyle={{
                      borderWidth: 1,
                      borderColor: Colors.PURPLELIGHT,
                    }}
                    tintColor={Colors.BLACK}
                    textColor={Colors.BLACK}
                    baseColor={Colors.BLACK}
                    placeholderTextColor={Colors.GRAY}
                    onChangeText={answer =>
                      props.setFieldValue('securityAnswer', answer)
                    }
                    onBlur={() => props.setFieldTouched('securityAnswer')}
                    error={
                      props.touched.securityAnswer &&
                      props.errors.securityAnswer
                    }
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
                  <TouchableOpacity
                    onPress={() => {
                      setTermSelected(!isTermSelected);
                      alert('Terms & Conditions');
                    }}>
                    <Text style={[Styles.text12Black]}>
                      Agree to terms and conditions
                    </Text>
                  </TouchableOpacity>
                </View>
                <View style={[Styles.authButtonWrapper]}>
                  <TouchableOpacity
                    style={[
                      Styles.authButtonMargin,
                      Styles.flexCenter,
                      styles.TouchableOpacity,
                    ]}
                    disabled={
                      !props.isValid ||
                      !props.dirty ||
                      props.isSubmitting ||
                      loading
                    }
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
                    {loading && (
                      <Spinner
                        size={30}
                        type={'ThreeBounce'}
                        color={Colors.PRIMARY}
                      />
                    )}
                  </TouchableOpacity>

                  <View style={[Styles.rowFlexEnd, {paddingTop: 2}]}>
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
