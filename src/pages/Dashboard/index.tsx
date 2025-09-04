import { useState } from 'react'

import AsyncStorage
  from "@react-native-async-storage/async-storage"

import { Alert, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { styles } from './styles';
import { Picker } from '@react-native-picker/picker';
import { spendingCreate } from '../../storage/spending/spendingCreate';
import { spendingGetAll } from '../../storage/spending/spendingGetAll';
export function Dashboard() {

  const [vendedor, setVendedor] = useState('')
  const [amount, setAmount] = useState('')
  const [quantidade, setQuantidade] = useState('')
  const [regiao, setRegiao] = useState('')
  const [produto, setProduto] = useState('')
  const total = Number(quantidade) * Number(amount);


  async function handleAddNewSpending() {

    // limpa o AsyncStorage no ios
    // AsyncStorage.getAllKeys().then(AsyncStorage.multiRemove)
    // alert('O programa sera finalizado')
    // return

    // limpa o AsyncStorage no android
    // await AsyncStorage.clear()
    // alert('O programa sera finalizado')
    // return

    if (vendedor.trim() === '' || amount.trim() === ''
      || quantidade.trim() === '' ||
      regiao.trim() === '' || produto.trim() === '') {
      return Alert.
        alert('Gastos', 'Favor preencha todos os campos')
    }     

    const data = {
      vendedor,
      amount,
      quantidade,
      regiao,
      produto,
      total: total.toFixed(2)
    }

    await spendingCreate(data)
    const result = await spendingGetAll()
    console.log(result)

    setVendedor('')
    setAmount('')
    setProduto('')
    setRegiao('')
    setQuantidade('')
  }


  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Controle de Gastos</Text>
      </View>

      <ScrollView>
        <View style={styles.inputContainer}>
          <View style={styles.input}>
            <Picker
              selectedValue={vendedor}
              onValueChange={(itemValue) => setVendedor(itemValue)}
            >
              <Picker.Item label="Selecione o vendedor" value="" />
              <Picker.Item label="Joao" value="Joao" />
              <Picker.Item label="Pedro" value="Pedro" />
              <Picker.Item label="Maria" value="Maria" />
              <Picker.Item label="Rosa" value="Rosa" />
            </Picker>
          </View>

          <View style={styles.input}>
            <Picker
              selectedValue={regiao}
              onValueChange={(itemValue) => setRegiao(itemValue)}
            >
              <Picker.Item label="Selecione a região" value="" />
              <Picker.Item label="Norte" value="Norte" />
              <Picker.Item label="Nordeste" value="Nordeste" />
              <Picker.Item label="Sudeste" value="Sudeste" />
              <Picker.Item label="Sul" value="Sul" />
            </Picker>
          </View>

          <TextInput
            style={styles.input}
            placeholder='Produto:'
            value={produto}
            onChangeText={value => setProduto(value)}
          />

          <TextInput
            style={styles.input}
            placeholder='Quantidade: '
            value={quantidade}
            onChangeText={value => setQuantidade(value)}
            keyboardType='numeric'
          />

          <TextInput
            style={styles.input}
            placeholder='Valor: '
            keyboardType='numeric'
            value={amount}
            onChangeText={value => setAmount(value)}
          />

          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={styles.button}
              onPress={handleAddNewSpending}
            >
              <Text style={styles.buttonText}>
                Enviar
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}


