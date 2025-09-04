import { StyleSheet } from "react-native"
import { colors } from "../../styles/color"
import { fontFamily } from "../../styles/font-family"

export const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.gray[300],
    borderRadius: 5,
    padding: 17,
    marginBottom: 14
  },
  description: {
    fontFamily: fontFamily.bold,
    fontSize: 14,
    color: colors.gray[500]
  },
  amount: {
    fontFamily: fontFamily.bold,
    fontSize: 20,
    marginTop: 2,
    color: colors.gray[500]
  },
  local: {
    fontFamily: fontFamily.bold,
    fontSize: 14,
    marginTop: 2,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 19
  },
  category: {
    fontSize: 14,
    fontFamily: fontFamily.bold,
    color: colors.gray[500]
  },
  date: {
    fontSize: 14,
    fontFamily: fontFamily.bold,
    color: colors.gray[500]
  }
})

