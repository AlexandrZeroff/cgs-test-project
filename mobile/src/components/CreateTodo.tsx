import React from 'react'
import { View, Text } from 'react-native'
import { useNavigation } from '@react-navigation/native'


const CreateTodo = () => {

  const navigate = useNavigation()
  return (
    <View> 
        <Text>Add task form</Text>
    </View>
  )
}

export default CreateTodo