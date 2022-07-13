import React from 'react'
import Icon from 'react-native-vector-icons/Feather'

interface ButtonProps {
  iconName: string
  size: number
  color: string
  backgroundColor?: string
  onPress(): any
  styles?: {}
}

const IconButton: React.FC<ButtonProps> = ({
  iconName,
  size,
  color,
  backgroundColor = 'transparent',
  onPress,
  styles = {},
}) => {
  return (
    <Icon.Button
      name={iconName}
      size={size}
      color={color}
      backgroundColor={backgroundColor}
      onPress={onPress}
      iconStyle={{ marginRight: 0 }}
      style={styles}
    />
  )
}

export default IconButton
