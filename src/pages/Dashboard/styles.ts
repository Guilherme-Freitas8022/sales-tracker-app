import { StyleSheet } from "react-native";
import { colors } from "../../styles/color";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: colors.gray[100]
  },
  header: {
    marginTop: 70,
    width: '100%',
    height: 40,
    //backgroundColor: colors.gray[200],
    alignItems: 'center',
    justifyContent: 'center',

  },
  title: {
    color: colors.gray[500],
    fontWeight: 'bold',
    fontSize: 24,

  },
  inputContainer: {
    width: '100%',
    padding: 10,
  },
  input: {
    width: '100%',
    backgroundColor: colors.gray[200],
    padding: 10,
    fontSize: 14,
    marginTop: 20,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    marginBottom: 10,
    height: 50,
    justifyContent: 'center',

  },
  buttonContainer: {
    width: '100%',
    padding: 10,
  },
  button: {
    width: '100%',
    padding: 10,
    fontSize: 10,
    backgroundColor: colors.green.base,
    marginTop: 15,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: colors.green.soft,
    fontSize: 24,
    fontWeight: 'bold',
  }
  
})