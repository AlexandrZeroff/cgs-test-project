import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { ITodo } from '../interfaces/todo'

const TodoElement = (props: ITodo) => {
  const [isCompleted, setIsCompleted] = React.useState(props.isCompleted)

  return (
    <>
      <View style={styles.container}>
        <Text>{props.todoTitle}</Text>
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    minHeight: '50px',
    height: 'auto',
    color: 'black',
  },
  checkbox: {},
})

export default TodoElement
