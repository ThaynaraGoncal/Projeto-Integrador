import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import { RectButton, BorderlessButton, TouchableOpacity } from 'react-native-gesture-handler';
import { AntDesign, Feather, MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import api from '../../services/api';
import ListaAnuncio from '../../components/ListaAnuncios';
import * as color from '../../Colors';

function Home() {
  const [anuncios, setAnuncios] = useState([]);
  const [filtro, setFiltro] = useState('');

  const { navigate } = useNavigation();

  useEffect(() => {
    listaAnuncios();
  }, [])

  function listaAnuncios() {

    api.get(`/anuncios`).then(res => {
      const anunciosResp = res.data.anuncios;

      setAnuncios(anunciosResp)
    }).catch(error => {
      console.log(error);
    });
  }

  function handleFiltro(filtro) {

    setFiltro(filtro)
    console.log(filtro)

    if (filtro) {
      const anuncios_filtrados = anuncios.filter((item) => {
        return item.titulo.includes(filtro)
      })
      setAnuncios(anuncios_filtrados)
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

        <BorderlessButton style={styles.button} onPress={() => navigate('ModalFiltro')}>
          <AntDesign name='filter' size={25} color={color.BUTTON_IMAGES} />
        </BorderlessButton>
      </View>
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
  },

  headerCenter: {
    height: 80,
    backgroundColor: color.AZUL_CIANETO,
    borderBottomWidth: 1,
    borderColor: '#fff',
    flexDirection: 'row',
    alignItems: 'flex-end',
    paddingHorizontal: 5,
    paddingBottom: 10,
  },

  titleHeader: {
    fontFamily: 'Nunito_600SemiBold',
    color: color.INPUT_LAVEL,
    fontSize: 22,
    marginRight: 10,
  },

  viewInput: {
    flex: 1,
    height: 40,
    backgroundColor: '#fff',
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 5,
    paddingHorizontal: 5
  },

  button: {
    height: 40,
    width: 40,
    backgroundColor: '#fff',
    borderRadius: 5,
    marginRight: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },

  textInput: {
    flex: 1,
    fontFamily: 'Nunito_600SemiBold',
    height: 30,
    fontSize: 18,
    color: color.CINZA_TITULO
  }

});