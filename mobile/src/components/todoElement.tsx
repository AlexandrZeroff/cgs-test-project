import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { ITodo } from '../interfaces/todo'
import BouncyCheckbox from 'react-native-bouncy-checkbox'
import {
  colors,
  radiuses,
  fontSizes,
  spacings,
  commonStyles
} from '../theme/themes'
import IconButton from './IconButton'
import { useMutation } from 'react-query'
import TodoService from '../service/todos.service'
import { todos } from '../config/QUERY_KEYS'
import { queryClient } from '../../App'
import { useNavigation } from '@react-navigation/native'
import { editTodo } from '../config/ROUTER_KEYS'

export interface ITodoProps {
  index: number
  item: ITodo
  separators: {}
}

const TodoElement = (props: ITodoProps) => {

  const navigation = useNavigation()
  const todoService = new TodoService()

   const deleteTask = useMutation(
    todoService.deleteTodo.bind(todoService),
    {
      onSuccess: () => {queryClient.invalidateQueries(todos)}
    }
    ) 

  const { item } = props
  return (
    <>
      <View style={[commonStyles.columnContainer, styles.mainContainer]}>
        <View
          style={[commonStyles.rowContainer, commonStyles.rowContainerBetween]}
        >
          <View style={[commonStyles.columnContainer, styles.textBox]}>
            <Text style={styles.itemTitle}>{item.todoTitle}</Text>
            <Text style={styles.itemText}>{item.todoDescription}</Text>
          </View>
          <View
            style={[commonStyles.rowContainer, commonStyles.rowContainerCenter]}
          >
            <IconButton
              iconName={'edit'}
              size={30}
              color={colors.light}
              onPress={() => navigation.navigate(editTodo, item)}
            />
            <IconButton
              iconName={'trash'}
              size={30}
              color={colors.light}
              onPress={() => deleteTask.mutate(item._id)}
            />
          </View>
        </View>
        <View style={commonStyles.rowContainer}>
          <BouncyCheckbox
            size={30}
            fillColor={colors.secondary}
            unfillColor={colors.primary}
            text="Completed"
            iconStyle={{ borderColor: colors.secondary }}
            textStyle={{
              marginRight: margins.m16,
              textDecorationLine: 'none',
              color: colors.white,
            }}
            disableBuiltInState
            isChecked={item.isCompleted}
          />
          <BouncyCheckbox
            size={30}
            fillColor={colors.secondary}
            unfillColor={colors.primary}
            text="Public"
            iconStyle={{ borderColor: colors.secondary }}
            textStyle={{ textDecorationLine: 'none', color: colors.white }}
            disableBuiltInState
            isChecked={item.isPublic}
          />
        </View>
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: colors.primary,
    borderRadius: radiuses.r10,
    marginVertical: spacings.s4,
    paddingVertical: spacings.s20,
    paddingHorizontal: spacings.s20,
  },

  textBox: {
    width: '75%',
    marginBottom: spacings.s8,
  },
  itemTitle: {
    color: colors.white,
    fontSize: fontSizes.f20,
    fontWeight: 'bold',
  },
  itemText: {
    color: colors.white,
    marginTop: spacings.s8,
    fontSize: fontSizes.f16,
  },
})

export default TodoElement
