import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { StyleSheet, Text, View } from 'react-native'
import { colors, commonStyles, spacings } from '../theme/themes'
import CreateTodoForm from '../components/CreateTodoForm'
import IconButton from '../components/IconButton'
import { useNavigation } from '@react-navigation/native'

export default function CreateTodoScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <IconButton
        iconName="arrow-left"
        size={25}
        color={colors.light}
        styles={{marginLeft: spacings.s24}}
        onPress={() => navigation.push('Home')}
      />
      <Text style={commonStyles.screenHeader}>Let`s do something!</Text>
      <View style={styles.formContainer}>
        <CreateTodoForm />
      </View>
      
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingTop: spacings.s40,
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: colors.secondary,
    height: '100%',
    width: '100%',
    flex: 1,
  },
  formContainer: {
    flex: 1,
    width: '80%',
    marginHorizontal: 'auto'
  },
})
