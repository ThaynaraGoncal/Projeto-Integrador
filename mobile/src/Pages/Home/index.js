import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';

import api from '../../services/api';
import HeaderHome from '../../components/HeaderHome';
import ListaAnuncio from '../../components/ListaAnuncios';
import * as color from '../../Colors';

function Home() {
  const [anuncios, setAnuncios] = useState([]);

  useFocusEffect(() => {
    listaAnuncios();
  }, [anuncios])

  function listaAnuncios() {

    api.get(`/anuncios`).then(res => {
      const anunciosResp = res.data.anuncios;

      setAnuncios(anunciosResp)
    }).catch(error => {
      console.log(error);
    });
  }

  return (
    <View style={styles.container}>
      <HeaderHome />
      {anuncios.length > 0 ?
        (
          <ListaAnuncio anuncios={anuncios} />
        ) :
        <View style={styles.view}>
          <Text style={styles.info}>Ops... Sem anúncios no momento!</Text>
        </View>
      }
    </View>
  );
}

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  view: {
    height: 200,
    backgroundColor: color.INPUT_LAVEL,
    borderRadius: 5,
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },

  info: {
    fontFamily: 'Nunito_800ExtraBold',
    fontSize: 30,
    color: color.CINZA_TITULO
  }

});