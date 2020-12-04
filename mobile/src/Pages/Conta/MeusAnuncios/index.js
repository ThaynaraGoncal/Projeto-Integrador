import React, { useState, useEffect } from 'react';
import {
  View,
  Text
} from 'react-native';
import { useFocusEffect, useRoute } from '@react-navigation/native';
import AsyncStorage from '@react-native-community/async-storage';

import api from '../../../services/api';
import Header from '../../../components/Header';
import MeusAnunciosLista from '../../../components/MeusAnunciosLista';

import styles from './styles';

export default function MeusAnuncios() {
  const [anuncios, setAnuncios] = useState([]);

  const { params } = useRoute();

  useFocusEffect(() => {
    if (params?.origin === 'delete') {
      setAnuncios(params.data)
    }
  }, [])


  useEffect(() => {

    api.get(`/anuncio_prestador?cd_pessoa_fisica=${params.cd_pessoa_fisica}`).then((res) => {

      if (res.data?.anuncios) {
        setAnuncios(res.data?.anuncios);
        AsyncStorage.setItem("AnunciosPrestador", JSON.stringify(res.data.anuncios));
      }
    }).catch((error) => {
      console.log(error)
    })
  }, [])

  return (
    <View style={styles.container}>
      <Header title='Meus Anúncios' buttonBack route='MinhaConta' />
      <View style={{ flex: 1 }}>
        {anuncios?.length > 0 ?
          (
            <MeusAnunciosLista anuncios={anuncios} />
          ) :
          <View style={styles.view}>
            <Text style={styles.info}>Ops... Sem anúncios no momento!</Text>
          </View>
        }
      </View>
    </View>
  )
}