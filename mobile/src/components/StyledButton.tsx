import React from 'react'
import { Text, StyleSheet, Pressable } from 'react-native'
import { colors, paddings, radiuses, fontSizes, margins } from '../theme/themes'

interface IButtonProps {
  title: string
  onPress(): any
}

export default function Button(props: IButtonProps) {
  const { onPress, title } = props
  return (
    <Pressable style={styles.button} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  button: {
    width: 120,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: paddings.p4,
    paddingHorizontal: paddings.p8,
    borderRadius: radiuses.r5,
    backgroundColor: colors.light,
    marginBottom: margins.m16
  },
  text: {
    fontSize: fontSizes.f20,
    lineHeight: 21,
    fontWeight: 'bold',
    color: colors.white,
  },
})
