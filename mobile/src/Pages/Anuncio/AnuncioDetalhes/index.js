import React, { useContext } from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';
import Header from '../../../components/Header';
import { RectButton } from 'react-native-gesture-handler';
import { AntDesign, Entypo } from '@expo/vector-icons';

import DataContext from '../../../contexts/Anuncios';

import styles from './styles';
import * as color from '../../../Colors';

export default function AnuncioDetalhes({ route }) {
  const imagens = route.params.path;
  const { categoria, descricao, valor, titulo } = route.params;

  return (
    <View style={styles.container}>
      <Header title="Detalhes Anúncio" buttonBack route="Home" />
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
        <View style={styles.viewButtons}>
          <RectButton style={styles.button}>
            <AntDesign name="heart" size={40} color={color.VERMELHO_CLARO} />
          </RectButton>
          <RectButton style={styles.button}>
            <Entypo name='chat' size={40} color={color.CINZA_TITULO} />
          </RectButton>
        </View>
      </ScrollView>
    </View>

  );
};