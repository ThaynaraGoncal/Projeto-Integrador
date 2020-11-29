import React, { useContext } from 'react';
import { View, Text, StyleSheet, Image, ScrollView, Alert } from 'react-native';
import Header from '../../../../components/Header';
import { RectButton } from 'react-native-gesture-handler';
import { AntDesign, Entypo } from '@expo/vector-icons';
import { useNavigation, useFocusEffect } from '@react-navigation/native';

import api from '../../../../services/api';
import styles from './styles';
import * as color from '../../../../Colors';

export default function AnuncioDetalhesPrestador({ route }) {
  const { goBack, navigate } = useNavigation();
  const imagens = route.params.path;
  const { categoria, descricao, valor, titulo, cd_pessoa_fisica, id} = route.params;

  console.log('id pessoa', cd_pessoa_fisica)
  console.log('id anuncio', id)


  async function deleteAnuncio() {
    api.delete(`/anuncio?cd_pessoa_fisica=${cd_pessoa_fisica}&id_anuncio=${id}`)
      .then((res) => {
        //console.log(res.data)
        Alert.alert('Informação', res.data.info)
      }).catch((error) => {
        console.log(error)
      });
      const resp = await api.get(`/anuncio_prestador?cd_pessoa_fisica=${cd_pessoa_fisica}`)
      //console.log('meus anuncios', resp.data.anuncios)
      const data = resp.data.anuncios;
      const anuncios = {
        data,
        origin: 'delete'
      }
      navigate('MeusAnuncios', anuncios)
    // AsyncStorage.getItem("AnunciosPrestador").then((res) => {
    //   if (res) {
    //     setUser(JSON.parse(res));
    //     setLogado(true)
    //     //console.log('JSON.parse(res)', JSON.parse(res))
    //     return user;
    //   }
    // }).catch((err) => {
    //   console.log(err)
    // });
  }

  return (
    <View style={styles.container}>
      <Header title="Detalhes Anúncio" buttonBack route="MeusAnuncios" />
      <View style={styles.viewButtons}>
          <RectButton style={styles.button}>
            <Text>Editar</Text>
          </RectButton>
          <RectButton style={styles.button}
            onPress={deleteAnuncio}
          >
            <Text>Excluir</Text>
            
          </RectButton>
        </View>
      <ScrollView>
        <ScrollView horizontal={true} style={styles.viewImages}>
          {imagens.map((item) => {
            return (
              <Image source={{ uri: item }} style={styles.image} key={item} />
            )
          })}
        </ScrollView>
        <Text style={styles.titulo}>{titulo}</Text>
        <Text style={styles.labelValor}>R$ {valor}</Text>
        <View style={styles.line} />
        <Text style={styles.labelTitulo}>Descrição</Text>
        <Text style={styles.labelText}>{descricao}</Text>
        <View style={styles.line} />
        <Text style={styles.labelTitulo}>Detalhes</Text>
        <View style={styles.viewInfo}>
          <Text style={styles.tituloCategoria}>Categoria</Text>
          <Text style={styles.labelCategoria}>{categoria}</Text>
        </View>
        <View style={styles.line} />
      </ScrollView>
    </View>

  );
};