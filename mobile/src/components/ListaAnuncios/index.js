import React, { useState } from 'react';
import { SafeAreaView, View, FlatList, Text, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { RectButton } from 'react-native-gesture-handler';
import { FontAwesome } from '@expo/vector-icons';
import AsyncStorage from '@react-native-community/async-storage';

import styles from './styles';

const Item = ({ data }) => {
  const [pessoa, setPessoa] = useState({});
  const [isPessoa, setIspessoa] = useState(false);

  const { navigate } = useNavigation();

  function handleDetalhes(item) {
    getPessoa(item);
    navigate('AnuncioDetalhes', [item, isPessoa])
  }

  function getPessoa(item) {
    AsyncStorage.getItem("Dadosuser").then((res) => {
      if (res) {
        setPessoa(JSON.parse(res));
        if (pessoa.cd_pessoa_fisica === item.cd_pessoa_fisica) {
          setIspessoa(true);
        }
      }
    }).catch((err) => {
      console.log(err)
    });
  }

  return (
    <RectButton style={styles.item} onPress={() => handleDetalhes(data)}>
      <Image source={{ uri: data.path[0] }} style={styles.image} />
      <View style={styles.containerText}>
        <Text style={styles.label}>{data.titulo}</Text>

        {Number(data.gostei) === 0 &&
          (<>
            <Text style={{ color: 'gray' }}>★★★★★</Text>
          </>)
        }

        {Number(data.gostei) > 0 && Number(data.gostei) < 2 &&
          (
            <View style={{ flexDirection: 'row' }}>
              <Text style={{ color: '#fcbf49', fontWeight: 'bold' }}>★</Text>
              <Text style={{ color: 'gray' }}>★★★★</Text>
            </View>

          )
        }

        {Number(data.gostei) > 1 && Number(data.gostei) < 4 &&
          (
            <View style={{ flexDirection: 'row' }}>
              <Text style={{ color: '#fcbf49', fontWeight: 'bold' }}>★★</Text>
              <Text style={{ color: 'gray' }}>★★★</Text>
            </View>

          )
        }

        {Number(data.gostei) > 3 && Number(data.gostei) < 6 &&
          (
            <View style={{ flexDirection: 'row' }}>
              <Text style={{ color: '#fcbf49', fontWeight: 'bold' }}>★★★</Text>
              <Text style={{ color: 'gray' }}>★★</Text>
            </View>

          )
        }

        {Number(data.gostei) > 5 &&
          (
            <View style={{ flexDirection: 'row' }}>
              <Text style={{ color: '#fcbf49', fontWeight: 'bold' }}>★★★★★</Text>
            </View>

          )
        }

        <Text style={styles.label}>R$: {data.valor}</Text>
        <View style={{ flexDirection: 'row' }}>
          <Text style={styles.textCategoria}>Categoria: </Text>
          <Text style={styles.categoria}>{data.categoria}</Text>
        </View>
      </View>
    </RectButton>
  )
};

const listaAnuncios = ({ anuncios }) => {

  const renderItem = ({ item }) => (
    <Item data={item} />
  );

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FlatList
        data={anuncios}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
      />
    </SafeAreaView>
  );
}

export default listaAnuncios;
