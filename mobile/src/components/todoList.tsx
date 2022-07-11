import React, { useState } from 'react'
import { StyleSheet, FlatList } from 'react-native'
import { ITodo, ITodoList } from '../interfaces/todo'
import TodoElement from './todoElement'
import TodoService from '../service/todos.service'
import { useQuery } from 'react-query'
import { todos } from '../config/QUERY_KEYS'
import { ITodoProps } from './todoElement'


const TodoList = () => {
  const todoService = new TodoService()

  const { data } = useQuery(todos, () => todoService.getAllTodos())


  console.log(data)
  return (
    <FlatList
      style={styles.container}
      data={data}
      renderItem={(todo: ITodoProps) => <TodoElement {...todo} />}
      keyExtractor={(todo) => todo._id}
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