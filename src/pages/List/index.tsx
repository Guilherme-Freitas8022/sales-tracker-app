// hooks
import { useState, useCallback } from 'react'
import { useFocusEffect } from '@react-navigation/native'
import { FlatList, View, Text } from 'react-native'

import { styles } from './styles'

import { spendingGetAll }
  from '../../storage/spending/spendingGetAll'

import { SpendingStorageDTO }
  from '../../storage/spending/SpendingStorageDTO'

import { TransactionExpenses }
  from '../../components/TransactionExpenses'


export function List() {
  const [dataExpenses, setDataExpenses] =
    useState<SpendingStorageDTO[]>([])

  async function loadDataSpending() {
    const data: SpendingStorageDTO[] = await spendingGetAll()
    setDataExpenses(data)
  }

  useFocusEffect(useCallback(() => {
    loadDataSpending()
  }, []))

  return (
    <View style={styles.container}>

      <View style={styles.header}>
        <Text style={styles.title}>Listagem de Gastos</Text>
      </View>


      <View style={styles.transactions}>
        <FlatList
          data={dataExpenses}
          renderItem={({ item }) =>
            <TransactionExpenses data={item} />
          }
          showsVerticalScrollIndicator={false}
        />
      </View>

    </View>
  )
}
