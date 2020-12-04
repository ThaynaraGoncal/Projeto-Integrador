import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { RectButton } from 'react-native-gesture-handler';
import {
  Text,
  StyleSheet,
  ScrollView,
  KeyboardAvoidingView,
  TextInput,
  Alert,
  View,
} from "react-native";

import Icon from '@expo/vector-icons/MaterialCommunityIcons';
import { AntDesign } from '@expo/vector-icons';

import * as color from '../../../Colors';

import Header from '../../../components/Header';
import styles from './styles';
import Categoria from '../Categorias';

function SubCategoria({ route }) {
  const categoria = route.params;

  const comida = ['Doces', 'Salgados', 'Buffet'];
  const decoracao = ['Mesas', 'Temas', 'Flores', 'Balões'];
  const musica = ['Acústico', 'DJ', 'Carro de Som', 'Caixa de Som'];
  const lembrancas = ['Mesas', 'Aninversário', 'Casamento'];
  const entretenimento = ['Brinquedos', 'Dança', 'Games'];
  const convites = ['Digital', 'Carta', 'Papel'];
  const local = ['Salão', 'Clube', 'Club']

  let stateInical = [];

  switch (categoria) {
    case 'comida': stateInical = comida;
      break;
    case 'decoracao': stateInical = decoracao;
      break;
    case 'musica': stateInical = musica;
      break;
    case 'lembrancas': stateInical = lembrancas;
      break;
    case 'entretenimento': stateInical = entretenimento;
      break;
    case 'convites': stateInical = convites;
      break;
    case 'local': stateInical = local;
    default:
  }

  const [subComida, setSubComida] = useState(stateInical);
  const { navigate, goBack } = useNavigation();

  function concluiCategoria(item) {
    navigate("Anuncio", item)
  }

  return (
    <View style={styles.container}>
      <Header title="Escolha uma categoria" buttonBack route="CategoriaAnuncio" />
      <ScrollView>
        {subComida.map((item) => {
          let itemCategoria = item;
          return (
            <RectButton style={styles.categoriaButton}
              key={itemCategoria}
              onPress={() => concluiCategoria(itemCategoria)}
            >
              <Text style={styles.textButton}>{item}</Text>
            </RectButton>
          )
        })}

      </ScrollView>
    </View>

  );
}

export default SubCategoria;