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

function Categoria() {
  const { navigate, goBack } = useNavigation();

  return (
    <View style={styles.container}>
      <Header title="Escolha uma categoria" buttonBack route="Anuncio"/>
      <ScrollView>
      <RectButton style={styles.categoriaButton} 
        onPress={()=> navigate('SubCategoria', 'comida')}
      > 
        <Icon name='food' size={34} color={color.AMARELO} />
        <Text style={styles.textButton}>Comida</Text>
        <AntDesign name="arrowright" size={27} />
      </RectButton>
      <RectButton style={styles.categoriaButton}
        onPress={()=> navigate('SubCategoria', 'decoracao')}
      > 
        <Icon name='food' size={34} color={color.AMARELO} />
        <Text style={styles.textButton}>Decoração</Text>
        <AntDesign name="arrowright" size={27} />
      </RectButton>
      <RectButton style={styles.categoriaButton}
        onPress={()=> navigate('SubCategoria', 'musica')}
      > 
        <Icon name='food' size={34} color={color.AMARELO} />
        <Text style={styles.textButton}>Música</Text>
        <AntDesign name="arrowright" size={27} />
      </RectButton>
      <RectButton style={styles.categoriaButton}
        onPress={()=> navigate('SubCategoria', 'lembrancas')}
      > 
        <Icon name='food' size={34} color={color.AMARELO} />
        <Text style={styles.textButton}>Lembranças</Text>
        <AntDesign name="arrowright" size={27} />
      </RectButton>
      <RectButton style={styles.categoriaButton}
        onPress={()=> navigate('SubCategoria', 'entretenimento')}
      > 
        <Icon name='food' size={34} color={color.AMARELO} />
        <Text style={styles.textButton}>Entretenimento</Text>
        <AntDesign name="arrowright" size={27} />
      </RectButton>
      <RectButton style={styles.categoriaButton}
        onPress={()=> navigate('SubCategoria', 'convites')}
      > 
        <Icon name='food' size={34} color={color.AMARELO} />
        <Text style={styles.textButton}>Convites</Text>
        <AntDesign name="arrowright" size={27} />
      </RectButton>
      <RectButton style={styles.categoriaButton}
        onPress={()=> navigate('SubCategoria', 'local')}
      > 
        <Icon name='food' size={34} color={color.AMARELO} />
        <Text style={styles.textButton}>Local</Text>
        <AntDesign name="arrowright" size={27} />
      </RectButton>
      </ScrollView>
    </View>

  );
}

export default Categoria;