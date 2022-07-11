import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { ITodo } from '../interfaces/todo'
import BouncyCheckbox from 'react-native-bouncy-checkbox'
import { colors, radiuses, fontSizes, paddings, margins } from '../theme/themes'
import IconButton from './IconButton'

export interface ITodoProps {
  index: number
  item: ITodo
  separators: {}
}

const TodoElement = (props: ITodoProps) => {
  const { item } = props
  console.log(item)
  return (
    <>
      <View style={[styles.columnContainer, styles.mainContainer]}>
        <View style={[styles.rowContainer, styles.rowContainerBetween]}>
          <View style={[styles.columnContainer, styles.textBox]}>
            <Text style={styles.itemTitle}>{item.todoTitle}</Text>
            <Text style={styles.itemText}>{item.todoDescription}</Text>
          </View>
          <View style={[styles.rowContainer, styles.rowContainerCenter]}>
            <IconButton
              iconName={'edit'}
              size={30}
              color={colors.light}
              onPress={() => {}}
            />
            <IconButton
              iconName={'trash'}
              size={30}
              color={colors.light}
              onPress={() => {}}
            />
          </View>
        </View>
        <View style={styles.rowContainer}>
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
    marginVertical: margins.m4,
    paddingVertical: paddings.p20,
    paddingHorizontal: paddings.p20,
  },
  columnContainer: {
    display: 'flex',
    flexDirection: 'column',
  },
  rowContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  rowContainerBetween: {
    justifyContent: 'space-between',
  },
  rowContainerCenter: {
    justifyContent: 'center',
  },
  rowContainerStart: {
    justifyContent: 'flex-start',
  },
  textBox: {
    width: '75%',
    marginBottom: margins.m8,
  },
  itemTitle: {
    color: colors.white,
    fontSize: fontSizes.f20,
    fontWeight: 'bold',
  },
  itemText: {
    color: colors.white,
    marginTop: margins.m8,
    fontSize: fontSizes.f16,
  },
})

export default TodoElement
