import { ActivityIndicator, StyleSheet } from "react-native";
import { colors } from "../styles/color";
import { fontFamily } from "../styles/font-family";
export function Loading() {
  return (
    <ActivityIndicator style={styles.load} size="large" />
  )
}

export const styles = StyleSheet.create({
  load: {
    flex: 1,
    backgroundColor: colors.gray[100],
    color: colors.gray[300],
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 48,
    fontFamily: fontFamily.regular
  }
})