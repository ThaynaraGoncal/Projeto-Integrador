import React from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { RectButton } from 'react-native-gesture-handler';
import * as color from '../../Colors';

import ImageFundo from '../../images/default.jpg';

const Item = ({ data }) => {
  const { navigate } = useNavigation();

  function handleDetalhes(item) {
    navigate('AnuncioDetalhes', item)
  }

  return (
    <RectButton style={styles.item} onPress={() => handleDetalhes(data)}>
      <View style={styles.containerItens}>
        <View style={styles.containerImage}>
          <Image source={ImageFundo} style={styles.image} />
        </View>
        <View style={styles.containerText}>
          <Text style={styles.label}>{data.titulo}</Text>
          <Text style={styles.title}>Valor</Text>
          <Text style={styles.label}>R$: {data.valor}</Text>
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
    <SafeAreaView style={styles.container}>
      <FlatList
        data={anuncios}
        renderItem={renderItem}
        keyExtractor={item => item.path}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    //marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: '#605C3C',
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 5,
    height: 150,
  },
  title: {
    fontSize: 16,
  },

  label: {
    fontSize: 22,
    color: '#fff',
    fontWeight: 'bold'
  },

  containerItens: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: 10
  },

  containerImage: {
    alignItems: 'center'
  },

  image: {
    width: 90,
    height: 90,
  },

  containerText: {
    margin: 10,
  }
});

export default listaAnuncios;