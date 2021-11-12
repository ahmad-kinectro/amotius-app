import React, {useState} from 'react';
import {View, TextInput, StyleSheet} from 'react-native';
import {Mixins, Colors, Text} from '../styles';
import MIcon from 'react-native-vector-icons/MaterialIcons';
const TextField = React.forwardRef((props, ref) => {
  const {
    label,
    tintColor,
    baseColor,
    error,
    textColor,
    leftIcon,
    fontSize,
    errorColor,
    defaultValue,
    numberOnly,
    transparent,
    hideLabel = false,
    hideError = false,
    inputStyle = {},
    clearIcon = false,
    search = false,
    halfField = false,
    leftField = false,
    rightField = false,
    type = 'field',
    fieldWidth,
    reset = false,
  } = props;
  const [text, changeText] = useState(defaultValue ? defaultValue : '');
  const [height, changeHeight] = useState(type === 'textArea' ? 80 : 40);
  const FontSize = Mixins.scaleFont(fontSize ? fontSize : 12);
  React.useEffect(() => {
    if (defaultValue) {
      changeText(defaultValue);
    }
  }, [props.defaultValue]);
  React.useEffect(() => {
    if (reset) {
      changeText(defaultValue ? defaultValue : '');
    }
  }, [props.reset]);
  const onChangeText = text => {
    const {onChangeText} = props;
    if (numberOnly) {
      changeText(text.replace(/[^0-9.]/g, ''));
      onChangeText(text.replace(/[^0-9.]/g, ''));
    } else {
      changeText(text);
      onChangeText(text);
    }
  };
  const onFocus = event => {
    let {onFocus} = props;
    if (typeof onFocus === 'function') {
      onFocus(event);
    }
  };
  const onBlur = event => {
    let {onBlur} = props;
    if (typeof onBlur === 'function') {
      onBlur(event);
    }
  };
  let FieldHeight = hideLabel ? 65 : 85;
  FieldHeight = hideError ? 55 : FieldHeight;
  FieldHeight = type === 'textArea' ? 120 : FieldHeight;
  let FieldWidth = halfField ? '49%' : '100%';
  if (fieldWidth) {
    FieldWidth = fieldWidth;
  }
  return (
    <View
      style={[
        styles.fieldContainer,
        {height: FieldHeight},
        halfField ? {width: FieldWidth} : {},
        leftField ? {marginRight: '1%'} : {},
        rightField ? {marginLeft: '1%'} : {},
      ]}>
      {!hideLabel ? (
        <Text
          color={baseColor}
          style={[styles.labelText, {marginBottom: transparent ? 0 : 20}]}>
          {label}
        </Text>
      ) : null}
      <View
        style={[
          styles.fieldRow,
          {
            borderBottomColor: transparent ? baseColor : 0,
          },
        ]}>
        {leftIcon}
        <TextInput
          selectionColor={tintColor}
          autoCapitalize="none"
          placeholder={transparent ? '' : label}
          style={[
            {
              color: textColor,
              fontSize: FontSize,
              marginTop: transparent ? 0 : 10,
              paddingLeft: leftIcon ? 10 : transparent ? 0 : 10,
              height: height,
              backgroundColor: transparent
                ? 'transparent'
                : Colors.WHISPERLIGHT,
              borderRadius: transparent ? 0 : 5,
              borderWidth: transparent ? 0 : 0.5,
              borderColor: Colors.PURPLELIGHT,
              paddingRight: 25,
            },
            type === 'textArea' ? {textAlignVertical: 'top'} : {},
            styles.inputField,
            inputStyle,
          ]}
          autoCompleteType="off"
          placeholderTextColor={textColor}
          {...props}
          allowFontScaling={false}
          onChangeText={text => onChangeText(text)}
          value={text}
          onFocus={onFocus}
          onBlur={onBlur}
          ref={ref}
        />
        {text.length > 0 && clearIcon ? (
          <MIcon
            onPress={() => {
              onChangeText('');
            }}
            name="clear"
            size={20}
            color={Colors.WHITE}
            style={[{position: 'absolute', right: 5, top: search ? 17 : 12}]}
          />
        ) : null}
      </View>
      {!hideError && (
        <Text
          style={[
            styles.errorText,
            {color: errorColor ? errorColor : Colors.DANGER},
          ]}>
          {error ? error : ''}
        </Text>
      )}
    </View>
  );
});
const styles = StyleSheet.create({
  fieldRow: {
    flex: 1,
    borderBottomWidth: 1,
    flexDirection: 'row',
    paddingBottom: 6,
    alignItems: 'center',
    marginBottom: 5,
  },
  fieldContainer: {marginBottom: 0, height: 85},
  errorText: {
    color: Colors.LIGHT_BLACK_5,
    marginBottom: 0,
    fontSize: Mixins.scaleFont(12),
  },
  inputField: {
    width: '100%',
  },
  labelText: {
    fontSize: Mixins.scaleFont(12),
  },
});
export default TextField;
