import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';

import api from '../../services/api';
import Button from '../../components/Button';
import Container from '../../components/Container';

import styles from './styles';

function Home() {
  const [anuncios, setAnuncios] = useState([]);

  function listaAnuncios() {

    api.get(`/anuncios`).then(res => {
      console.log(res.data)
      const { anuncios } = res.data;
      console.log('anuncios', anuncios)
    }).catch(error => {
      console.log(error);
    });
  }

  return (
    <Container buttonBack title="Anuncíos" >
      <Button
        titleButton="Listar Anúncios"
        onPress={listaAnuncios}
      >
      </Button>
    </Container>

  )
}

export default Home;