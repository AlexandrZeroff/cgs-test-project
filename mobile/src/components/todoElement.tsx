import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { ITodo } from '../interfaces/todo'
import BouncyCheckbox from 'react-native-bouncy-checkbox';


const TodoElement = (todo: any) => {

  console.log(todo)

  return (
    <>
      <View style={styles.todoContainer}>
        <Text style={styles.itemTitle}>{todo.item.todoTitle}</Text>
        <BouncyCheckbox 
          size={25}
          fillColor='#6075c3'
          isChecked={todo.item.isCompleted}
          text="Completed"
          onPress={() => {}}
        />
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  todoContainer: {
    width: '100%',
    minHeight: 50,
    height: 'auto',
    backgroundColor: '#ffffff',
    borderRadius: 5,
    marginVertical: 3,
    paddingHorizontal: 10,
    justifyContent: 'center'
  },
  itemTitle: {
    color: '#000',
    fontSize: 16,
    fontWeight: 'normal'
  },
})

export default TodoElement
