import React from 'react'
import {
  View,
  Text,
  TextInput,
  NativeSyntheticEvent,
  TextInputFocusEventData,
  StyleProp,
  TextStyle,
  StyleSheet,
  KeyboardTypeOptions,
} from 'react-native'
import { colors, spacings, fontSizes, radiuses } from '../theme/themes'

interface InputProps {
  label: string
  name: string
  placeholder: string
  value: string
  onChangeText(text: string | React.ChangeEvent<any>): void
  onBlur(e: NativeSyntheticEvent<TextInputFocusEventData>): void
  error?: string
  touched?: boolean
  multiline?: boolean
  secureTextEntry?: boolean
  labelStyle?: StyleProp<TextStyle>
  inputStyle?: StyleProp<TextStyle>
  keyboardType?: KeyboardTypeOptions
  maxLength?: number | undefined
}

export const FormTextInput: React.FC<InputProps> = ({
  label,
  name,
  placeholder,
  value,
  onChangeText,
  onBlur,
  error,
  touched,
  multiline,
  secureTextEntry,
  labelStyle,
  inputStyle,
  keyboardType = 'default',
  maxLength
}) => {
  return (
    <View>
      <Text style={[styles.inputTitle, labelStyle]}>{label}</Text>
      <TextInput
        style={[styles.textInput, inputStyle]}
        name={name}
        placeholder={placeholder}
        onChangeText={onChangeText}
        onBlur={onBlur}
        multiline={multiline}
        secureTextEntry={secureTextEntry}
        value={value}
        keyboardType={keyboardType}
        maxLength={maxLength}
      />
      {error && touched && (
        <Text style={{ color: colors.error, fontSize: fontSizes.f14 }}>
          {error}
        </Text>
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  textInput: {
    minHeight: 30,
    height: 'auto',
    marginBottom: spacings.s12,
    padding: spacings.s8,
    borderColor: colors.light,
    borderWidth: 1,
    backgroundColor: colors.primary,
    color: colors.white,
    borderRadius: radiuses.r10,
    fontSize: fontSizes.f16,
  },
  inputTitle: {
    color: colors.white,
    fontSize: fontSizes.f20,
    fontWeight: 'bold',
    marginVertical: spacings.s8,
  },
})
