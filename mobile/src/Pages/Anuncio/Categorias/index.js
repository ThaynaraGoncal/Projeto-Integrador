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
import { AntDesign, Fontisto, Entypo, FontAwesome } from '@expo/vector-icons';
import * as color from '../../../Colors';

import Header from '../../../components/Header';
import styles from './styles';

function Categoria({ route, }) {
  const { navigate } = useNavigation();

  let rota = 'Anuncio';
  if (route.params) {
    rota = route.params
  }

  return (
    <View style={styles.container}>
      <Header title="Escolha uma categoria" buttonBack route={rota} />
      <ScrollView>
        <RectButton style={styles.categoriaButton}
          onPress={() => navigate('Comida', rota)}
        >
          <Icon name='food' size={34} color={'#15c3d6'} />
          <Text style={styles.textButton}>Alimentação</Text>
          <AntDesign name="arrowright" size={27} color={'#8fa7b3'} />
        </RectButton>
        <RectButton style={styles.categoriaButton}
          onPress={() => navigate('Decoracao', rota)}
        >
          <FontAwesome name='star-half-empty' size={34} color={'#15c3d6'} />
          <Text style={styles.textButton}>Decoração</Text>
          <AntDesign name="arrowright" size={27} color={'#8fa7b3'} />
        </RectButton>
        <RectButton style={styles.categoriaButton}
          onPress={() => navigate('Musica', rota)}
        >
          <Fontisto name='music-note' size={30} color={'#15c3d6'} />
          <Text style={styles.textButton}>Música</Text>
          <AntDesign name="arrowright" size={27} color={'#8fa7b3'} />
        </RectButton>
        <RectButton style={styles.categoriaButton}
          onPress={() => navigate('Fotos', rota)}
        >
          <FontAwesome name='camera-retro' size={30} color={'#15c3d6'} />
          <Text style={styles.textButton}>Fotos e Filmagem</Text>
          <AntDesign name="arrowright" size={27} color={'#8fa7b3'} />
        </RectButton>

        <RectButton style={styles.categoriaButton}
          onPress={() => navigate('Lembrancas', rota)}
        >
          <FontAwesome name='gift' size={34} color={'#15c3d6'} />
          <Text style={styles.textButton}>Lembranças</Text>
          <AntDesign name="arrowright" size={27} color={'#8fa7b3'} />
        </RectButton>

        <RectButton style={styles.categoriaButton}
          onPress={() => navigate('Entretenimento', rota)}
        >
          <Entypo name='game-controller' size={34} color={'#15c3d6'} />
          <Text style={styles.textButton}>Entretenimento</Text>
          <AntDesign name="arrowright" size={27} color={'#8fa7b3'} />
        </RectButton>
        <RectButton style={styles.categoriaButton}
          onPress={() => navigate('Convites', rota)}
        >
          <FontAwesome name='envelope-o' size={34} color={'#15c3d6'} />
          <Text style={styles.textButton}>Convites</Text>
          <AntDesign name="arrowright" size={27} color={'#8fa7b3'} />
        </RectButton>
        <RectButton style={styles.categoriaButton}
          onPress={() => navigate('Local', rota)}
        >
          <FontAwesome name='home' size={34} color={'#15c3d6'} />
          <Text style={styles.textButton}>Local</Text>
          <AntDesign name="arrowright" size={27} color={'#8fa7b3'} />
        </RectButton>
      </ScrollView>
    </View>

  );
}

export default Categoria;