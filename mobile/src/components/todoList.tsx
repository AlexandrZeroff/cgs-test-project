import React, { useState } from 'react'
import { StyleSheet, FlatList } from 'react-native'
import { ITodo, ITodoList } from '../interfaces/todo'
import TodoElement from './todoElement'


const TodoList = (props: ITodoList) => {
  const renderTodo = (todo: ITodo) => <TodoElement {...todo} />

  return (
    <FlatList
      style={styles.container}
      data={props.data}
      renderItem={renderTodo}
      keyExtractor={(item) => item._id}
    />
  )
}

export default TodoList

const styles = StyleSheet.create({
  container: {
    // height: '100%', maxHeight: '100%',
    height: 500,
    width: '100%',
    flexDirection: 'column',
    padding: 10,
    overflow: 'scroll',
  },
})
