import { useState } from 'react'
import {
  Alert,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  FlatList
} from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { styles } from './styles';
import { spendingGetAll }
  from '../../storage/spending/spendingGetAll';
import { SpendingStorageDTO } from '../../storage/spending/SpendingStorageDTO';

import { TransactionExpenses }
  from '../../components/TransactionExpenses';

export function Search() {
  const [vendedor, setVendedor] = useState('')
  const [regiao, setRegiao] = useState('');
  const [listExpenses, setListExpenses] =
    useState<SpendingStorageDTO[]>([])

 async function handleSearch() {
  if (vendedor === '' && regiao === '') {
    return Alert.alert('Pesquisa de Gastos', 'Selecione ao menos um campo.');
  }

    const data = await spendingGetAll();

  const filtered = data.filter(item => {
    const matchVendedor = vendedor ? item.vendedor === vendedor : true;
    const matchRegiao = regiao ? item.regiao === regiao : true;
    return matchVendedor && matchRegiao;
  });

  if (filtered.length === 0) {
    return Alert.alert('Pesquisa de Gastos', 'Nenhum resultado encontrado.');
  }

  setListExpenses(filtered);
}

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Controle de Gastos</Text>
      </View>

      {/* <ScrollView> */}
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

        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={handleSearch}
          >
            <Text style={styles.buttonText}>
              Enviar
            </Text>
          </TouchableOpacity>
        </View>

        <FlatList
          data={listExpenses}
          renderItem={({ item }) =>
            <TransactionExpenses data={item} />
          }
        />
      </View>
      {/* </ScrollView> */}
    </View>
  );
}
