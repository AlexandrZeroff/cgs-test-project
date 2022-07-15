import React from 'react'
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  SafeAreaView
} from 'react-native'
import { useMutation } from 'react-query'
import {
  colors,
  fontSizes,
  spacings,
  radiuses,
  commonStyles
} from '../theme/themes'
import { Formik } from 'formik'
import TodoService from '../service/todos.service'
import { ITodo } from '../interfaces/todo'
import BouncyCheckbox from 'react-native-bouncy-checkbox'
import { todoValidationSchema } from '../validation/todos.validation.schema'
import { queryClient } from '../../App'
import { todos } from '../config/QUERY_KEYS'
import IconButton from './IconButton'
import { home } from '../config/ROUTER_KEYS'
import { useNavigation } from '@react-navigation/native'

const CreateTodoForm = () => {

  const navigation = useNavigation()
  const todoService = new TodoService()

  const invalidateQueries = { onSuccess: () => queryClient.invalidateQueries(todos) }
  const addTodo = useMutation(
    todoService.createTodo.bind(todoService),
    invalidateQueries,
  )

  return (
    <SafeAreaView>
      <Formik
        initialValues={{
          userID: '1',
          todoTitle: '',
          todoDescription: '',
          todoYear: new Date().getFullYear(),
          isCompleted: false,
          isPublic: false,
        }}
        validationSchema={todoValidationSchema}
        onSubmit={(values) => {
          addTodo.mutate(values)
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
          isValid,
          errors,
          touched,
        }) => (
          <View style={styles.formContainer}>
            <Text style={styles.inputTitle}>Task title</Text>
            <TextInput
              style={styles.textInput}
              name="todoTitle"
              placeholder="Title"
              onChangeText={handleChange('todoTitle')}
              onBlur={handleBlur('todoTitle')}
              value={values.todoTitle}
            />
            {errors.todoTitle && touched.todoTitle && (
              <Text style={{ color: colors.error, fontSize: fontSizes.f14 }}>
                {errors.todoTitle}
              </Text>
            )}
            <Text style={styles.inputTitle}>Task description</Text>
            <TextInput
              style={[styles.textInput, styles.multilineInput]}
              name="todoDescription"
              placeholder="Start typing here"
              onChangeText={handleChange('todoDescription')}
              onBlur={handleBlur('todoDescription')}
              multiline={true}
              value={values.todoDescription}
            />
            {errors.todoDescription && touched.todoDescription && (
              <Text style={{ color: colors.error, fontSize: fontSizes.f14 }}>
                {errors.todoDescription}
              </Text>
            )}
            <Text style={styles.inputTitle}>Year</Text>
            <TextInput
              style={styles.textInput}
              name="todoYear"
              placeholder="2022"
              onChangeText={handleChange('todoYear')}
              onBlur={handleBlur('todoYear')}
              value={values.todoYear.toString()}
              keyboardType="numeric"
              maxLength={4}
            />
            {errors.todoYear && touched.todoYear && (
              <Text style={{ color: colors.error, fontSize: fontSizes.f14 }}>
                {errors.todoYear}
              </Text>
            )}
            <View
              style={[
                commonStyles.rowContainer,
                commonStyles.rowContainerBetween,
              ]}
            >
              <Text style={styles.inputTitle}>Public</Text>
              <BouncyCheckbox
                isChecked={values.isPublic}
                onPress={(value) => setFieldValue('isPublic', value)}
                size={30}
                fillColor={colors.secondary}
                unfillColor={colors.primary}
                iconStyle={{ borderColor: colors.light }}
              />
            </View>
            <View
              style={[
                commonStyles.rowContainer,
                commonStyles.rowContainerBetween,
              ]}
            >
              <Text style={styles.inputTitle}>Completed</Text>
              <BouncyCheckbox
                isChecked={values.isCompleted}
                onPress={(value) => setFieldValue('isCompleted', value)}
                size={30}
                fillColor={colors.secondary}
                unfillColor={colors.primary}
                iconStyle={{ borderColor: colors.light }}
              />
            </View>
            <View
              style={[
                commonStyles.rowContainer,
                commonStyles.rowContainerCenter,
                styles.buttonContainer
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
  textInput: {
    minHeight: 30,
    height: 'auto',
    marginBottom: spacings.s12,
    padding: spacings.s8,
    borderColor: colors.light,
    borderWidth: 1,
    backgroundColor: colors.primary,
    color: colors.white,
    borderRadius: radiuses.r10,
    fontSize: fontSizes.f16,
  },
  inputTitle: {
    color: colors.white,
    fontSize: fontSizes.f20,
    fontWeight: 'bold',
    marginVertical: spacings.s8,
  },
  multilineInput: {
    minHeight: 160,
    textAlignVertical: 'top',
  },
  buttonContainer: {
    marginTop: spacings.s16,
  },
})

export default CreateTodoForm
