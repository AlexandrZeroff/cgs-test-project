import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { ITodo } from '../interfaces/todo'
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import {colors, radiuses} from '../theme/themes'

const TodoElement = (todo: any) => {


  return (
    <>
      <View style={styles.todoContainer}>
        <Text style={styles.itemTitle}>{todo.item.todoTitle}</Text>
        <BouncyCheckbox 
          size={25}
          fillColor={colors.light}
          isChecked={todo.item.isCompleted}
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
    backgroundColor: colors.primary,
    borderRadius: radiuses.r5,
    marginVertical: 3,
    paddingRight: 10,
    paddingLeft: 20,
    justifyContent: 'space-between',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center'
  },
  itemTitle: {
    color: colors.white,
    fontSize: 16,
    fontWeight: 'normal'
  },
})

export default TodoElement
