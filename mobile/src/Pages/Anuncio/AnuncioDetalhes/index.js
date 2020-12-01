import React, { useContext, useState } from 'react';
import { View, Text, StyleSheet, Image, ScrollView, Linking, BorderlessButton, TouchableHighlight } from 'react-native';
import Header from '../../../components/Header';
import { RectButton } from 'react-native-gesture-handler';
import { AntDesign, Entypo, Feather } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';

import DataContext from '../../../contexts/AnunciosContext';
import Modal from '../../../components/ModalFiltro';
import styles from './styles';
import * as color from '../../../Colors';

export default function AnuncioDetalhes({ route }) {
  const imagens = route.params.path;
  const { categoria, descricao, valor, titulo, telefone } = route.params;
  const { navigate } = useNavigation();

  const [visible, setModalVisible] = useState(false);

  function apiWhats() {
    Linking.openURL(`whatsapp://send?phone=55${telefone}`)
  }

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
        <View style={styles.viewAvaliacao}>
          <Text style={styles.titulo}>{titulo}</Text>
          <Text>Avaliacao</Text>
        </View>
        <View style={styles.viewAvaliacao}>
          <Text style={styles.labelValor}>R$ {valor}</Text>
          <RectButton onPress={() => navigate('AnuncioAvaliacao', route.params)}>
            <Text>Avaliar</Text>
          </RectButton>
        </View>
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
        <Text style={styles.labelTitulo}>Anunciante</Text>
        <Text style={styles.labelText}>{telefone}</Text>
        <View style={styles.viewButtons}>
          <RectButton style={styles.button}>
            <AntDesign name="heart" size={40} color={color.VERMELHO_CLARO} />
          </RectButton>
          <RectButton style={styles.button}
            onPress={apiWhats}
          >
            <Entypo name='chat' size={40} color={color.CINZA_TITULO} />
          </RectButton>
          <View style={styles.line} />
        </View>
      </ScrollView>
    </View>

  );
};