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

function Categoria() {
  const { navigate, goBack } = useNavigation();

  return (
    <View style={styles.container}>
      <Header title="Escolha uma categoria" buttonBack route="Anuncio" />
      <ScrollView>
        <RectButton style={styles.categoriaButton}
          onPress={() => navigate('Comida')}
        >
          <Icon name='food' size={34} color={'#15c3d6'} />
          <Text style={styles.textButton}>Comida</Text>
          <AntDesign name="arrowright" size={27} color={'#8fa7b3'} />
        </RectButton>
        <RectButton style={styles.categoriaButton}
          onPress={() => navigate('Decoracao')}
        >
          <FontAwesome name='star-half-empty' size={34} color={'#15c3d6'} />
          <Text style={styles.textButton}>Decoração</Text>
          <AntDesign name="arrowright" size={27} color={'#8fa7b3'} />
        </RectButton>
        <RectButton style={styles.categoriaButton}
          onPress={() => navigate('Musica')}
        >
          <Fontisto name='music-note' size={30} color={'#15c3d6'} />
          <Text style={styles.textButton}>Música</Text>
          <AntDesign name="arrowright" size={27} color={'#8fa7b3'} />
        </RectButton>
        <RectButton style={styles.categoriaButton}
          onPress={() => navigate('SubCategoria', 'fotos')}
        >
          <FontAwesome name='camera-retro' size={30} color={'#15c3d6'} />
          <Text style={styles.textButton}>Fotos</Text>
          <AntDesign name="arrowright" size={27} color={'#8fa7b3'} />
        </RectButton>
        <RectButton style={styles.categoriaButton}
          onPress={() => navigate('Lembrancas')}
        >
          <FontAwesome name='gift' size={34} color={'#15c3d6'} />
          <Text style={styles.textButton}>Lembranças</Text>
          <AntDesign name="arrowright" size={27} color={'#8fa7b3'} />
        </RectButton>
        <RectButton style={styles.categoriaButton}
          onPress={() => navigate('Entretenimento')}
        >
          <Entypo name='game-controller' size={34} color={'#15c3d6'} />
          <Text style={styles.textButton}>Entretenimento</Text>
          <AntDesign name="arrowright" size={27} color={'#8fa7b3'} />
        </RectButton>
        <RectButton style={styles.categoriaButton}
          onPress={() => navigate('Convites')}
        >
          <FontAwesome name='envelope-o' size={34} color={'#15c3d6'} />
          <Text style={styles.textButton}>Convites</Text>
          <AntDesign name="arrowright" size={27} color={'#8fa7b3'} />
        </RectButton>
        <RectButton style={styles.categoriaButton}
          onPress={() => navigate('Local')}
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