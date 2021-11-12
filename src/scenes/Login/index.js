/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import {Formik} from 'formik';
import React from 'react';
import {
  SafeAreaView,
  Image,
  StatusBar,
  StyleSheet,
  Text,
  View,
  Platform,
  TouchableOpacity,
  Alert,
} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import TextField from '../../components/TextField';
import * as Yup from 'yup';
import {Colors, Mixins, Spinner, Styles} from '../../styles';
import styles from './styles'
import Logo from '../../assets/Logo.png'
import FIcon from 'react-native-vector-icons/FontAwesome5';


const validationSchema = Yup.object().shape({
  email: Yup.string()
    .required('Please enter your email.')
    .email('Please enter a valid email.'),
  password: Yup.string().required('Please enter your password.'),

});
const Login = props => {
  const {navigation} = props
  const passwordField = React.useRef(null);
  const [loading, setLoading] = React.useState(false);
  const [hidePass, setHidePass] = React.useState(true);
  const handleChange = (formData, formik) => {
    setLoading(true);
    console.log('formdata', formData)
    if (formData) {
      setLoading(false)
      Alert.alert('hi' + formData.email)
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
      <KeyboardAwareScrollView keyboardShouldPersistTaps={'always'}>
        <Formik onSubmit={handleChange}
          validationSchema={validationSchema}>
          {props => (

            <View style={[Styles.flex, styles.mainWrapper,]}>
              <View style={[Styles.flexCenter, styles.logoWrapper]}>
                <Image source={Logo} style={Styles.authLogo} />
              </View>
              <Text
                style={[Styles.text24BlackBold]}>
                Login to your account
              </Text>
              <View style={{height: 20}} />
              <View style={Styles.flexCenter}>
                <TextField
                  label="Email Address"
                  name="email"
                  tintColor={Colors.BLACK}
                  textColor={Colors.BLACK}
                  baseColor={Colors.BLACK}
                  placeholderTextColor={Colors.GRAY}
                  onChangeText={(email) => props.setFieldValue('email', email)}
                  onBlur={() => props.setFieldTouched('email')}
                  error={props.touched.email && props.errors.email}
                  keyboardType="email-address"
                  autoFocus={true}
                  autoCapitalize="none"
                  autoCorrect={false}
                  autoCompleteType="email"
                  returnKeyType="next"
                  onSubmitEditing={() => {
                    passwordField.current.focus();
                  }}
                  blurOnSubmit={false}
                  fontSize={14}
                />
              </View>
              <View style={[Styles.flexCenter]}>
                <TextField
                  label="Password"
                  name="password"
                  tintColor={Colors.BLACK}
                  textColor={Colors.BLACK}
                  baseColor={Colors.BLACK}
                  placeholderTextColor={Colors.GRAY}
                  secureTextEntry={hidePass}
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
                  returnKeyType="done"
                  ref={passwordField}
                  fontSize={14}
                  onSubmitEditing={props.handleSubmit}
                />
                <View style={[Styles.eyeView]}>
                  <FIcon
                    name={hidePass ? 'eye-slash' : 'eye'}
                    size={15}
                    color={hidePass ? Colors.GRAYLIGHT : Colors.PURPLELIGHT}
                    onPress={() => setHidePass(!hidePass)}
                  />
                </View>

              </View>
              <TouchableOpacity style={{}} onPress={() => {navigation.navigate('ForgetPassword')}}>
                <Text
                  style={[Styles.text12Black]}>
                  Forget Password?
                </Text>
              </TouchableOpacity>
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
                  onPress={() => props.handleSubmit()}
                >
                  {!loading && (
                    <Text
                      style={[Styles.textAuthButton, {paddingRight: loading ? 15 : 0, },]}>
                      LOGIN
                    </Text>
                  )}
                  {loading && (
                    <Spinner
                      type={'ThreeBounce'}
                      size={30}
                      color={Colors.PRIMARY}
                    />
                  )}
                </TouchableOpacity>
                <View style={Styles.rowFlexEnd}>
                  <TouchableOpacity
                    style={Styles.flexDirectionRow}
                    activeOpacity={0.6}
                    onPress={() => {
                      console.log('jjjj')
                      navigation.navigate('Register');
                    }}>
                    <Text style={[Styles.text12Black]}>
                      Don't have an account? | <Text style={[Styles.text12BlackBold]}>Sign Up</Text>
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          )}
        </Formik>
      </KeyboardAwareScrollView>

    </SafeAreaView>
  );
};

export default Login;
