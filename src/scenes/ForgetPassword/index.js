/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import {Formik} from 'formik';
import React from 'react';
import {
  SafeAreaView,
  Text,
  View,
  TouchableOpacity,
  Alert,
  Keyboard,
} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import TextField from '../../components/TextField';
import * as Yup from 'yup';
import {Colors, Mixins, Spinner, Styles} from '../../styles';
import styles from './styles'


const validationSchema = Yup.object().shape({
  email: Yup.string()
    .required('Please enter your email.')
    .email('Please enter a valid email.'),
})
//   password: Yup.string()
//     .matches(/\w*[a-z]\w*/, 'Password must have a small letter')
//     .matches(/\w*[A-Z]\w*/, 'Password must have a capital letter')
//     .matches(/\d/, 'Password must have a number')
//     .min(8, 'Password should be at least 8 character long.').required('Please enter your password.'),
//   confirmPassword: Yup.string()
//     .required('Confirm Password is required.')
//     .oneOf([Yup.ref('password')], 'Password not match.'),
// });
const ForgetPassword = props => {
  const passwordField = React.useRef(null);
  const ConfirmPasswordField = React.useRef(null);
  const lastNameFeild = React.useRef(null);
  const emailField = React.useRef(null);

  const [loading, setLoading] = React.useState(false);
  const [hidePassword, sethidePassword] = React.useState(true);
  const [confirmHidePassword, setConfirmHidePassword] = React.useState(true);

  const changeVisibility = () => {
    Keyboard.dismiss()
  }
  const handleChange = (formData, formik) => {
    const {navigation} = props;
    setLoading(true);
    console.log('formdata', formData)
    if (formData) {
      setLoading(false)
      Alert.alert('Check Your Email ' + formData.email)
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
      <TouchableOpacity style={[Styles.flex]} onPress={() => {changeVisibility()}} activeOpacity={1}>
        <KeyboardAwareScrollView keyboardShouldPersistTaps={'always'}>
          <Formik onSubmit={handleChange}
            validationSchema={validationSchema}>
            {props => (

              <View style={[Styles.flex, styles.mainWrapper,]}>
                {console.log('the props', props)}
                <Text
                  color={Colors.BLACK}

                  style={{
                    fontSize: Mixins.scaleFont(24),
                    fontWeight: 'bold', color: Colors.BLACK
                  }}
                >
                  Forget Password
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
                    autoCapitalize="none"
                    autoCorrect={false}
                    autoCompleteType="email"
                    returnKeyType="done"
                    autoFocus={true}
                    onSubmitEditing={() => {
                      props.handleSubmit()
                    }}
                    // ref={emailField}
                    blurOnSubmit={false}
                    fontSize={14}
                  />
                </View>

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
                    onPress={() => {props.handleSubmit()}}
                  >
                    {!loading && (
                      <Text
                        style={[
                          {
                            fontSize: Mixins.scaleFont(16), fontWeight: 'bold',
                            color: Colors.BLACK,
                            paddingRight: loading ? 15 : 0,
                          },
                        ]}>
                        Submit
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
                        alert('login')
                        // navigation.navigate('Login');
                      }}>
                      <Text style={[{
                        color: Colors.BLACK,
                        fontSize: Mixins.scaleFont(12),
                        fontWeight: 'bold',
                      }]}>Back To Login?</Text>
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

export default ForgetPassword;
