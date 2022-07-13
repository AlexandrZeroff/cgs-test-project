import React from 'react'
import { StyleSheet, Text, SafeAreaView } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import TodoList from '../components/todoList'
import { colors, commonStyles } from '../theme/themes'
import CustomButton from '../components/CustomButton'
import { createTodo } from '../config/ROUTER_KEYS'

export default function HomeScreen() {
  const navigation = useNavigation()
  return (
    <SafeAreaView style={styles.container}>
      <Text style={commonStyles.screenHeader}>Task List App</Text>
      <TodoList />
      <CustomButton title="Add task" onPress={() => {navigation.navigate(createTodo)}} />
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
})
