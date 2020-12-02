import React, { useState } from 'react';
import { SafeAreaView, View, FlatList, Text, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { RectButton } from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-community/async-storage';

import styles from './styles';

const Item = ({ data }) => {
  const [pessoa, setPessoa] = useState({});
  const [isPessoa, setIspessoa] = useState(false);

  const { navigate } = useNavigation();

  function handleDetalhes(item) {
    console.log('meu anuncio', item)
    getPessoa(item);
    //console.log('item', item)
    navigate('AnuncioDetalhes', [item, isPessoa])
  }

  function getPessoa(item) {
    //console.log('item', item)
    AsyncStorage.getItem("Dadosuser").then((res) => {
      //console.log('resposta do async', res)
      if (res) {
        setPessoa(JSON.parse(res));
        //console.log('pessoa do async: ', pessoa.cd_pessoa_fisica)
        //console.log('pessoa do anuncio: ', item.cd_pessoa_fisica)
        if (pessoa.cd_pessoa_fisica === item.cd_pessoa_fisica) {
          setIspessoa(true);
          //console.log('mesma pessoa', isPessoa)
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
