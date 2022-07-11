import React from 'react'
import Icon from 'react-native-vector-icons/Feather'

interface ButtonProps {
  iconName: string
  size: number
  color: string
  onPress(): any
}

const IconButton: React.FC<ButtonProps> = ({iconName, size, color, onPress}) => {
  return (
    <Icon.Button
      name={iconName}
      size={size}
      color={color}
      backgroundColor={'transparent'}
      onPress={onPress}
      iconStyle={{marginRight: 0}}
    />
  )
}

export default IconButton
