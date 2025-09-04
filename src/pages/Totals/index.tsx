import { useCallback, useState } from 'react';
import { useFocusEffect } from '@react-navigation/native';
import { View, Text, ScrollView } from 'react-native';
import { styles } from './styles';
import { spendingGetAll } from '../../storage/spending/spendingGetAll';

type RegionTotal = {
  regiao: string;
  total: number;
};

type VendedorData = {
  vendedor: string;
  regioes: RegionTotal[];
  totalGeral: number;
};

export function Totals() {
  const [totalByCategories, setTotalByCategories] = useState<VendedorData[]>([]);
  const [totalByRegion, setTotalByRegion] = useState<RegionTotal[]>([]);

  async function loadData() {
    const data = await spendingGetAll();

    const vendedoresUnicos = Array.from(new Set(data.map(d => d.vendedor)));

    const resultado: VendedorData[] = vendedoresUnicos.map(vendedor => {
      const dadosDoVendedor = data.filter(d => d.vendedor === vendedor);

      const regioesUnicas = Array.from(new Set(dadosDoVendedor.map(d => d.regiao)));

      const regioes: RegionTotal[] = regioesUnicas.map(regiao => {
        const totalRegiao = dadosDoVendedor
          .filter(d => d.regiao === regiao)
          .reduce((acc, cur) => acc + Number(cur.total), 0);

        return {
          regiao,
          total: totalRegiao
        };
      });

      const totalGeral = regioes.reduce((acc, cur) => acc + cur.total, 0);

      return {
        vendedor,
        regioes,
        totalGeral
      };
    });

    setTotalByCategories(resultado);

    const regioesUnicas = Array.from(new Set(data.map(d => d.regiao)));

    const totalPorRegiao: RegionTotal[] = regioesUnicas.map(regiao => {
      const total = data
        .filter(d => d.regiao === regiao)
        .reduce((acc, cur) => acc + Number(cur.total), 0);

      return { regiao, total };
    });

    setTotalByRegion(totalPorRegiao);
  }

  useFocusEffect(
    useCallback(() => {
      loadData();
    }, [])
  );

  return (
    <ScrollView>
      <View style={styles.header}>
        <Text style={styles.title}>Totais por Vendedor</Text>
      </View>

      <View style={styles.transactions}>
        {totalByCategories.map(item => (
          <View key={item.vendedor} style={styles.card}>
            <Text style={styles.vendedorName}>{item.vendedor}</Text>
            {item.regioes.map(regiao => (
              <Text key={regiao.regiao} style={styles.regiaoText}>
                - {regiao.regiao}: R$ {regiao.total.toFixed(2).replace('.', ',')}
              </Text>
            ))}
            <Text style={styles.totalText}>
              Total: R$ {item.totalGeral.toFixed(2).replace('.', ',')}
            </Text>
          </View>
        ))}
      </View>

      <View style={styles.header}>
        <Text style={styles.title}>Totais por Região</Text>
      </View>

      <View style={styles.transactions}>
        {totalByRegion.map(regiao => (
          <View key={regiao.regiao} style={styles.card}>
            <Text style={styles.vendedorName}>{regiao.regiao}</Text>
            <Text style={styles.totalText}>
              Total: R$ {regiao.total.toFixed(2).replace('.', ',')}
            </Text>
          </View>
        ))}
      </View>
    </ScrollView>
  );
}
