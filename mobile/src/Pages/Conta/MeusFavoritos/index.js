
import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import Header from '../../../components/Header';
import MeusFavoritosLista from '../../../components/MeusFavoritosLista';
import { getAnunciosFavoritos } from '../../../storage/anunciosFavoritos';

import styles from './styles';
import { ActivityIndicator } from 'react-native-paper';

export default function MeusFavoritos() {
  const [favoritos, setFavoritos] = useState([]);

  useFocusEffect(() => {
    async function handleFavoritos() {
      const dataFavoritos = await getAnunciosFavoritos();
      setFavoritos(dataFavoritos);
    }
    handleFavoritos();
  }, []);


  // if (favoritos.length === 0) {
  //   return (
  //     <View style={{ flex: 1, justifyContent: 'center'}}>
  //     <ActivityIndicator />
  //     </View>
  //   )
  // }

  return (
    <View style={styles.container}>
      <Header title="Meus Favoritos" buttonBack route="MinhaConta" />
      <View style={{ flex: 1 }}>
        {favoritos.length > 0 ? (
          <MeusFavoritosLista favoritos={favoritos} />
        ) : (
          <View style={styles.view}>
            <Text style={styles.info}>Ops... Sem favoritos no momento!</Text>
          </View>
        )}
      </View>
    </View>
  );
}
