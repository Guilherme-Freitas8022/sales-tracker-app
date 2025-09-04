import { StyleSheet } from "react-native"
import { colors } from "../../styles/color"

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        backgroundColor: colors.gray[200]
    },
    content: {
        width: '100%',
        padding: 6,
        borderRadius: 10,
    },
    textCard: {
        color: colors.gray[200],
        fontSize: 18,
        fontWeight: 'bold',
    },
    transactions: {
        flex: 1,
        padding: 24,
        marginTop: 3,
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
    card: {
  backgroundColor: '#fff',
  padding: 15,
  marginBottom: 10,
  borderRadius: 8,
  elevation: 2
},
vendedorName: {
  fontSize: 18,
  fontWeight: 'bold',
  marginBottom: 6
},
regiaoText: {
  fontSize: 14,
  marginLeft: 10
},
totalText: {
  fontWeight: 'bold',
  marginTop: 8,
  fontSize: 15,
  color: '#333'
}
})
