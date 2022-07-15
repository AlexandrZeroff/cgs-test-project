import React from 'react'
import { Text, StyleSheet, TouchableOpacity } from 'react-native'
import { colors, spacings, radiuses, fontSizes } from '../theme/themes'

interface IButtonProps {
  title: string
  onPress(): any
  isValid?: boolean
}

export default function CustomButton(props: IButtonProps) {
  const { onPress, title } = props
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    width: 120,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: spacings.s4,
    paddingHorizontal: spacings.s8,
    borderRadius: radiuses.r5,
    backgroundColor: colors.light,
    marginVertical: spacings.s16,
  },
  text: {
    fontSize: fontSizes.f20,
    lineHeight: 21,
    fontWeight: 'bold',
    color: colors.white,
  },
})
