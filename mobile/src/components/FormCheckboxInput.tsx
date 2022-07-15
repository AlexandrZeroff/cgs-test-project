import React from 'react'
import BouncyCheckbox from 'react-native-bouncy-checkbox'
import { View, Text, StyleSheet, StyleProp, TextStyle } from 'react-native'
import { commonStyles, colors, fontSizes, spacings } from '../theme/themes'

interface CheckboxProps {
  name: string
  label: string
  value: boolean
  setFieldValue(field: string, value: any, shouldValidate?: boolean): void
  size?: number
  fillColor?: string
  unfillColor?: string
  iconStyle?: StyleProp<TextStyle>
}

export const FormCheckboxInput: React.FC<CheckboxProps> = ({
  name,
  label,
  value,
  setFieldValue,
  size,
  fillColor,
  unfillColor,
  iconStyle,
}) => {
  return (
    <View style={[commonStyles.rowContainer, commonStyles.rowContainerBetween]}>
      <Text style={styles.inputTitle}>{label}</Text>
      <BouncyCheckbox
        isChecked={value}
        onPress={(val) => setFieldValue(name, val)}
        size={size}
        fillColor={fillColor}
        unfillColor={unfillColor}
        iconStyle={iconStyle}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  inputTitle: {
    color: colors.white,
    fontSize: fontSizes.f20,
    fontWeight: 'bold',
    marginVertical: spacings.s8,
  },
})
