import React from 'react';
import { SafeAreaView, View, FlatList, Text, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { RectButton } from 'react-native-gesture-handler';

import styles from './styles';

const Item = ({ data }) => {

  const { navigate } = useNavigation();

  function handleDetalhes(item) {
    // navigate('AnuncioDetalhesPrestador', item)
  }

  return (
    <RectButton style={styles.item} onPress={() => handleDetalhes(data)}>
      <Image source={{ uri: data.path[0] }} style={styles.image} />
      <View style={styles.containerText}>
        <Text style={styles.label}>{data.titulo}</Text>
        <Text style={styles.label}>R$: {data.valor}</Text>
      </View>
    </RectButton>
  )
};

const listaAnunciosFavoritos = ({ favoritos }) => {

  const renderItem = ({ item }) => (
    <Item data={item} />
  );

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FlatList
        data={favoritos}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
      />
    </SafeAreaView>
  );
}

export default listaAnunciosFavoritos;
