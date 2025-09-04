import { View, Text } from 'react-native'

import { styles } from './styles';

import { SpendingStorageDTO }
  from "../../storage/spending/SpendingStorageDTO";

type Props = {
  data: SpendingStorageDTO
}


export function TransactionExpenses({ data }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.description}>Vendedor:{data.vendedor}</Text>
      <Text style={styles.amount}>{data.produto}</Text>
      <Text style={styles.local}>{data.amount}</Text>
      <Text style={styles.local}>{data.total}</Text>
      <View style={styles.footer}>
        <Text style={styles.category}>{data.quantidade}</Text>
        <Text style={styles.date}>{data.regiao}</Text>
      </View>
    </View>
  )
}