import React from 'react'
import { View, StyleSheet, SafeAreaView } from 'react-native'
import { useMutation } from 'react-query'
import {
  colors,
  spacings,
  commonStyles,
} from '../theme/themes'
import { Formik } from 'formik'
import TodoService from '../service/todos.service'
import { ITodo } from '../interfaces/todo'
import { todoValidationSchema } from '../validation/todos.validation.schema'
import { queryClient } from '../../App'
import { todos } from '../config/QUERY_KEYS'
import IconButton from './IconButton'
import { home } from '../config/ROUTER_KEYS'
import { useNavigation } from '@react-navigation/native'
import { FormTextInput } from './FormTextInput'
import { FormCheckboxInput } from './FormCheckboxInput'

interface IEditParams {
  todo: ITodo
}

const EditTodoForm = ({ todo }: IEditParams) => {
  const navigation = useNavigation()
  const todoService = new TodoService()

  const invalidateQueries = {
    onSuccess: () => queryClient.invalidateQueries(todos),
  }

  const updateTodo = useMutation(
    todoService.updateTodo.bind(todoService),
    invalidateQueries,
  )

  return (
    <SafeAreaView>
      <Formik
        initialValues={{
          userID: todo.userID,
          todoTitle: todo.todoTitle,
          todoDescription: todo.todoDescription,
          todoYear: todo.todoYear,
          isCompleted: todo.isCompleted,
          isPublic: todo.isPublic,
        }}
        validationSchema={todoValidationSchema}
        onSubmit={(values) => {
          updateTodo.mutate(todo._id, values)
          navigation.navigate(home)
          console.log(values)
        }}
      >
        {({
          handleChange,
          handleBlur,
          setFieldValue,
          handleSubmit,
          values,
          errors,
        }) => (
          <View style={styles.formContainer}>
            <FormTextInput
              label="Task title"
              name="todoTitle"
              placeholder="Title"
              onChangeText={handleChange('todoTitle')}
              onBlur={handleBlur('todoTitle')}
              value={values.todoTitle}
              error={errors.todoTitle}
            />
            <FormTextInput
              label="Task description"
              name="todoDescription"
              placeholder="Type something"
              onChangeText={handleChange('todoDescription')}
              onBlur={handleBlur('todoDescription')}
              value={values.todoDescription}
              error={errors.todoDescription}
              multiline={true}
              inputStyle={styles.multilineInput}
            />
            <FormTextInput
              label="Year"
              name="todoYear"
              placeholder=""
              onChangeText={handleChange('todoYear')}
              onBlur={handleBlur('todoYear')}
              value={values.todoYear.toString()}
              error={errors.todoYear}
              keyboardType="numeric"
              maxLength={4}
            />
            <FormCheckboxInput
              name="isPublic"
              label="Public"
              value={values.isPublic}
              setFieldValue={setFieldValue}
              size={30}
              fillColor={colors.secondary}
              unfillColor={colors.primary}
              iconStyle={{ borderColor: colors.light }}
            />
            <FormCheckboxInput
              name="isCompleted"
              label="Completed"
              value={values.isCompleted}
              setFieldValue={setFieldValue}
              size={30}
              fillColor={colors.secondary}
              unfillColor={colors.primary}
              iconStyle={{ borderColor: colors.light }}
            />
            <View
              style={[
                commonStyles.rowContainer,
                commonStyles.rowContainerCenter,
                styles.buttonContainer,
              ]}
            >
              <IconButton
                iconName="check"
                size={25}
                color={colors.white}
                backgroundColor={colors.light}
                onPress={() => handleSubmit()}
              />
            </View>
          </View>
        )}
      </Formik>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  formContainer: {},
  multilineInput: {
    minHeight: 160,
    textAlignVertical: 'top',
  },
  buttonContainer: {
    marginTop: spacings.s16,
  },
})

export default EditTodoForm
