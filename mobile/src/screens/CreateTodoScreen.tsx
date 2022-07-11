import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { StyleSheet, Text } from 'react-native'
import {colors} from '../theme/themes'
import CreateTodo from '../components/CreateTodo'
import Button from '../components/StyledButton'
import { useNavigation } from '@react-navigation/native'

export default function CreateTodoScreen({navigation}){

    return(
        <SafeAreaView style={styles.container}>
            <Text>Create new task</Text>
            <Button title='Back' onPress={() => navigation.push('Home')}/>
            <CreateTodo />
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
}
)  
