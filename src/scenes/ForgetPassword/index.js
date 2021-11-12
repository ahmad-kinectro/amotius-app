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
import styles from './styles';

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .required('Please enter your email.')
    .email('Please enter a valid email.'),
});
const ForgetPassword = props => {
  const [loading, setLoading] = React.useState(false);
  const {navigation} = props;

  const changeVisibility = () => {
    Keyboard.dismiss();
  };
  const handleChange = (formData, formik) => {
    setLoading(true);
    console.log('formdata', formData);
    if (formData) {
      setLoading(false);
      Alert.alert('Check Your Email ' + formData.email);
    }
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
          <Formik onSubmit={handleChange} validationSchema={validationSchema}>
            {props => (
              <View style={[Styles.flex, styles.mainWrapper]}>
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
                    autoCapitalize="none"
                    autoCorrect={false}
                    autoCompleteType="email"
                    returnKeyType="done"
                    autoFocus={true}
                    onSubmitEditing={() => {
                      props.handleSubmit();
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
                    onPress={() => {
                      props.handleSubmit();
                    }}>
                    {!loading && (
                      <Text
                        style={[
                          Styles.text12BlackBold,
                          {
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
                        navigation.navigate('Login');
                      }}>
                      <Text style={[Styles.text12BlackBold]}>
                        Back To Login?
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

export default ForgetPassword;
