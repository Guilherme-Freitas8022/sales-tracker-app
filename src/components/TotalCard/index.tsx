import { View, Text } from 'react-native'

import { styles } from './styles';

type Props = {
  name: string;
  total: number;
}
export function TotalCard({ name, total }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.description}>{name}</Text>
      <Text style={styles.amount}>{total}</Text>
    </View>
  )
}