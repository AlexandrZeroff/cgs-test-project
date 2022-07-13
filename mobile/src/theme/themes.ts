import { StyleSheet } from "react-native"

export const colors = {
  primary: '#041955',
  secondary: '#3450a1',
  light: '#eb06ff',
  white: '#fff',
  blue: '#1759c3',
  error: '#FF2A4E'
}

export const margins = {
  m4: 4,
  m6: 6,
  m8: 8,
  m12: 12,
  m16: 16,
  m20: 20,
  m24: 24,
  m28: 28,
  m32: 32
}

export const paddings = {
  p4: 4,
  p8: 8,
  p12: 12,
  p16: 16,
  p20: 20,
  p24: 24,
  p28: 28,
  p32: 32
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
    margin: 10,
    textAlign: 'center',
    fontSize: fontSizes.f24,
    fontWeight: 'bold',
    color: 'white',
  },
})
