import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { StyleSheet, Text, View, SafeAreaView } from 'react-native'
import TodoList from './src/components/todoList'

const DATA = [
  {
    _id: '62c516a9d88edd2ebd7e0e33',
    userID: '',
    todoTitle: 'Tested task #1',
    todoDescription: 'Description to tested task #1',
    todoYear: 2022,
    isCompleted: true,
    isPublic: true,
  },
  {
    _id: '62c516bdd88edd2ebd7e0e35',
    userID: '',
    todoTitle: 'Tested task #2',
    todoDescription: 'Description to tested task #2',
    todoYear: 2021,
    isCompleted: true,
    isPublic: false,
  },
  {
    _id: '62c516ced88edd2ebd7e0e37',
    userID: '',
    todoTitle: 'Tested task #3',
    todoDescription: 'Description to tested task #3',
    todoYear: 2021,
    isCompleted: true,
    isPublic: true,
  },
]

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>Task List App</Text>
      <TodoList data={DATA} />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 40,
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#6075c3',
    height: '100%',
    width: '100%',
  },
  text: {
    margin: 10,
    textAlign: 'center',
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white'
  }
})
