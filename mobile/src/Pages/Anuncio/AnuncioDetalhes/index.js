import React, { useState } from 'react';
import { View, Text, Image, ScrollView, Linking, TouchableOpacity } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';


import api from '../../../services/api';
import Header from '../../../components/Header';
import styles from './styles';
import * as color from '../../../Colors';

export default function AnuncioDetalhes({ route }) {

  const imagens = route.params[0].path;
  const [isPessoa, setIspessoa] = useState(route.params[1]);
  const { categoria, descricao, valor, titulo, telefone, cd_pessoa_fisica, nome } = route.params[0];
  const { navigate } = useNavigation();

  function apiWhats() {
    Linking.openURL(`whatsapp://send?phone=55${telefone}`)
  }

  async function handleAvaliacoes() {
    const { id } = route.params[0];
    const { data } = await api.get(`/avaliacao?id_anuncio=${id}`);
    navigate('AnuncioAvaliacoes', data);
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
        <View style={styles.viewAvaliacaoButtons}>
          {
            !isPessoa &&
            <TouchableOpacity style={styles.buttonAvaliar}
              onPress={() => navigate('AnuncioAvaliar', route.params)}>
              <Text style={styles.textButtonAvaliar}>Avaliar</Text>
            </TouchableOpacity>
          }
          <TouchableOpacity style={styles.buttonAvaliacoes}
            onPress={handleAvaliacoes}
          >
            <Text style={styles.textAvaliacao}>Ver Avaliações</Text>
            <View style={{ flexDirection: 'row' }}>
              <FontAwesome name='star' size={22} color={color.AMARELO} style={{ marginHorizontal: 3 }} />
              <FontAwesome name='star' size={22} color={color.AMARELO} style={{ marginHorizontal: 3 }} />
              <FontAwesome name='star-half-empty' size={22} color={color.AMARELO} style={{ marginHorizontal: 3 }} />
              <FontAwesome name='star-half-empty' size={22} color={color.AMARELO} style={{ marginHorizontal: 3 }} />
              <FontAwesome name='star-o' size={22} color={color.AMARELO} style={{ marginHorizontal: 3 }} />
            </View>

          </TouchableOpacity>
        </View>
        <View style={styles.viewAvaliacao}>
          <Text style={styles.titulo}>{titulo}</Text>
        </View>
        <View style={styles.viewAvaliacao}>
          <Text style={styles.labelValor}>R$ {valor}</Text>
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
        <Text style={styles.labelText}>{nome}</Text>
        <Text style={styles.labelText}>{telefone}</Text>
        <View style={styles.viewButtons}>
          {/* <RectButton style={styles.button}>
            <AntDesign name="heart" size={40} color={color.VERMELHO_CLARO} />
          </RectButton> */}
          <RectButton style={styles.button}
            onPress={apiWhats}
          >
            <FontAwesome name='whatsapp' size={40} color='#fff' />
          </RectButton>
          <View style={styles.line} />
        </View>
      </ScrollView>
    </View>

  );
};