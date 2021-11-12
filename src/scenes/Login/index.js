import {Formik} from 'formik';
import React from 'react';
import {
  SafeAreaView,
  Image,
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
import styles from './styles';
import Logo from '../../assets/amotius.png';
import FIcon from 'react-native-vector-icons/FontAwesome5';
import FastImage from 'react-native-fast-image';
import {UserLogin} from './networkCall';
import {showMessage} from 'react-native-flash-message';

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .required('Please enter your email.')
    .email('Please enter a valid email.'),
  password: Yup.string().required('Please enter your password.'),
});
const Login = props => {
  const {navigation} = props;
  const passwordField = React.useRef(null);
  const [loading, setLoading] = React.useState(false);
  const [hidePassword, setHidePassword] = React.useState(true);
  const handleChange = (formData, formik) => {
    setLoading(true);
    UserLogin(formData).then(res => {
      if (res.status === 200) {
        if (res.role === 'admin') {
          navigation.navigate('Dashboard');
          showMessage({
            visible: true,
            key: Math.random().toString(36).substring(7),
            type: 'success',
            message: '',
            description: 'Login Successfully!',
          });
        }
        if (res.role === 'customer') {
          navigation.navigate('Dashboard');
        }
      } else {
        showMessage({
          visible: true,
          key: Math.random().toString(36).substring(7),
          type: 'danger',
          message: res.message,
        });
      }
      setLoading(false);
    });
    formik.setSubmitting(false);
  };

  return (
    <SafeAreaView style={[Styles.flex, Styles.primaryBackground]}>
      <KeyboardAwareScrollView keyboardShouldPersistTaps={'always'}>
        <Formik
          onSubmit={handleChange}
          validationSchema={validationSchema}
          initialValues={{email: '', password: ''}}>
          {props => (
            <View style={[Styles.flex, styles.mainWrapper]}>
              <View style={[Styles.flexCenter]}>
                <FastImage
                  source={Logo}
                  style={Styles.authLogo}
                  resizeMode={FastImage.resizeMode.contain}
                />
              </View>
              <Text style={[Styles.text24BlackBold]}>
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
                  onChangeText={email => props.setFieldValue('email', email)}
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
                  returnKeyType="done"
                  ref={passwordField}
                  fontSize={14}
                  onSubmitEditing={props.handleSubmit}
                />
                <TouchableOpacity
                  style={[Styles.eyeView]}
                  onPress={() => setHidePassword(!hidePassword)}
                  activeOpacity={0.6}>
                  <FIcon
                    name={hidePassword ? 'eye-slash' : 'eye'}
                    size={15}
                    color={hidePassword ? Colors.GRAYLIGHT : Colors.PURPLELIGHT}
                  />
                </TouchableOpacity>
              </View>
              <TouchableOpacity
                style={{}}
                onPress={() => {
                  navigation.navigate('ForgetPassword');
                }}>
                <Text style={[Styles.text12Black]}>Forget Password?</Text>
              </TouchableOpacity>
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
                  onPress={() => props.handleSubmit()}>
                  {!loading && (
                    <Text
                      style={[
                        Styles.textAuthButton,
                        {paddingRight: loading ? 15 : 0},
                      ]}>
                      LOGIN
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
                <View style={[Styles.rowFlexEnd, {paddingTop: 5}]}>
                  <TouchableOpacity
                    style={Styles.flexDirectionRow}
                    activeOpacity={0.6}
                    onPress={() => {
                      navigation.navigate('Register');
                    }}>
                    <Text style={[Styles.text12Black]}>
                      Don't have an account? |{' '}
                      <Text style={[Styles.text12BlackBold]}>Sign Up</Text>
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
