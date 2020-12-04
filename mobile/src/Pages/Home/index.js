import React, { useState, useEffect, useContext, useMemo } from 'react';
import { View, Text, StyleSheet, TextInput, Modal, TouchableHighlight, ActivityIndicator } from 'react-native';
import { RectButton, BorderlessButton, TouchableOpacity } from 'react-native-gesture-handler';
import { AntDesign, Feather, MaterialIcons } from '@expo/vector-icons';
import { useFocusEffect, useNavigation, useRoute } from '@react-navigation/native';

import useAnuncio from '../../hooks/useAnuncio';

import api from '../../services/api';
import ListaAnuncio from '../../components/ListaAnuncios';
import ModalFiltro from '../../components/ModalFiltro';

import * as color from '../../Colors';
import styles from './styles';

function Home() {
  const { anuncios, setAnuncios, anunciosInicial, setAnunciosInicial } = useAnuncio();
  const [filtro, setFiltro] = useState('');
  const [visible, setModalVisible] = useState(false);
  const [ordenou, setOrdenou] = useState(false);

  const { navigate } = useNavigation();
  const route = useRoute();

  function handleOrdenar() {
    setOrdenou(!ordenou);
    if (ordenou) {
      const ordenados = anuncios.sort(function (a, b) { return Number(b.gostei) - Number(a.gostei) });
      setAnuncios([])
      setTimeout(() => {
        setAnuncios(ordenados)
      }, 1)
    } else {
      const ordenados = anuncios.sort(function (a, b) { return Number(a.gostei) - Number(b.gostei) });
      setAnuncios([])
      setTimeout(() => {
        setAnuncios(ordenados)
      }, 1)
    }
  }

  useMemo(() => {
    //console.log('ordenao', anuncios)
  }, [anuncios])


  function handleAtualizar() {
    api.get(`/anuncios`).then((res) => {
      setAnuncios(res.data);
    }).catch((error) => {
      console.log(error);
    });
  }


  function listaAnuncios() {
    handleAtualizar();
  }

  function handleFiltro(paraFiltrar) {

    setFiltro(paraFiltrar)
    if (paraFiltrar) {
      const anuncios_filtrados = anuncios.filter((item) => {
        return item.titulo.includes(filtro);
      })
      setAnuncios(anuncios_filtrados);
    } else {
      listaAnuncios();
    }
  }

  function limpaFiltro() {
    setFiltro('');
    listaAnuncios();
  }

  return (
    <View style={styles.container}>
      <View style={styles.headerCenter}>
        <View style={styles.viewInput}>
          <MaterialIcons name='search' size={25} color={color.BUTTON_IMAGES} />
          <TextInput
            style={styles.textInput}
            onChangeText={(text) => handleFiltro(text)}
            placeholder='Busca'
            value={filtro}
          />
          <TouchableOpacity onPress={limpaFiltro}>
            <Feather name='x' size={25} color={color.BUTTON_IMAGES} />
          </TouchableOpacity>
        </View>
        <BorderlessButton style={styles.button} onPress={() => navigate('Filtro')}>
          <AntDesign name='filter' size={25} color={color.BUTTON_IMAGES} />
        </BorderlessButton>
        <BorderlessButton style={styles.button} onPress={handleAtualizar}>
          <AntDesign name='reload1' size={25} color={color.BUTTON_IMAGES} />
        </BorderlessButton>
        <BorderlessButton style={styles.button} onPress={handleOrdenar}>
          <Text style={{ fontSize: 25, color: '#96D2F0' }}>↑↓</Text>
          {/* <AntDesign name='filter' size={25} color={color.BUTTON_IMAGES} /> */}
        </BorderlessButton>

      </View>
      {anuncios?.length > 0 ?
        (
          <ListaAnuncio anuncios={anuncios} />
        ) :
        <View style={styles.view}>
          <Text style={styles.info}>Ops... Sem anúncios no momento!</Text>
        </View>
      }

      {/* <Text>{JSON.stringify(anuncios, null, 2)}</Text> */}
    </View>
  );
}

export default Home;