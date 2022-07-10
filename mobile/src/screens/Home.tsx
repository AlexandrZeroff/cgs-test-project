import React from 'react'
import { StyleSheet, Text, SafeAreaView } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import TodoList from '../components/todoList'
import { colors, fontSizes, paddings, radiuses } from '../theme/themes'
import Button from '../components/StyledButton'
import { createTodo } from '../config/ROUTER_KEYS'

export default function Home() {
  const navigation = useNavigation()
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>Task List App</Text>
      <TodoList />
      <Button title="Add task" onPress={() => {navigation.navigate(createTodo)}} />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 40,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: colors.secondary,
    height: '100%',
    width: '100%',
    flex: 1,
  },
  text: {
    margin: 10,
    textAlign: 'center',
    fontSize: fontSizes.f24,
    fontWeight: 'bold',
    color: 'white',
  },
})
