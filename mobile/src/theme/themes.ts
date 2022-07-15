import { StyleSheet } from "react-native"

export const colors = {
  primary: '#041955',
  secondary: '#3450a1',
  light: '#eb06ff',
  white: '#fff',
  blue: '#1759c3',
  error: '#FF2A4E'
}

export const spacings = {
  s4: 4,
  s6: 6,
  s8: 8,
  s12: 12,
  s16: 16,
  s20: 20,
  s24: 24,
  s28: 28,
  s32: 32,
  s40: 40
}

export const fontSizes = {
  f12: 12,
  f14: 14,
  f16: 16,
  f18: 18,
  f20: 20,
  f24: 24
}

export const radiuses = {
  r5: 5,
  r10: 10
}

export const commonStyles = StyleSheet.create({
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
  screenHeader: {
    margin: spacings.s12,
    textAlign: 'center',
    fontSize: fontSizes.f24,
    fontWeight: 'bold',
    color: 'white',
  },
})
