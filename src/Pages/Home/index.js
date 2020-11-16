import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer, useFocusEffect } from '@react-navigation/native';

import api from '../../services/api';
import Button from '../../components/Button';
import Header from '../../components/Header';
import ListaAnuncio from '../../components/ListaAnuncios';

import styles from './styles';

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
      <Header title="Anúncios" />
      <ListaAnuncio anuncios={anuncios} />
    </View>
  );
}

export default Home;