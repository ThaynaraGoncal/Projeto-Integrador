import React, { useContext, useState } from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TextInput } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { AntDesign, Entypo } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';

import Header from '../../../components/Header';

import styles from './styles';
import * as color from '../../../Colors';

export default function AnuncioAvaliacao() {
  const { params } = useRoute();
  const [checked, setChecked] = useState(false);

  console.log('meus params', params)
return (
    <View style={styles.container}>
        <Header title='Avaliação' buttonBack route='AnuncioDetalhes'/>
        <View style={{ alignItems: 'center' }}>
          <Text style={styles.title}>Compartilhe com todos a sua opnião!</Text>
          <View style={styles.viewText}>
          <Text style={styles.anuncio}>{params.titulo}</Text>
          <Text>{params.categoria}</Text>
          </View>
          <TextInput
            style={styles.input}
            placeholder='Diga o que achou'
          >
          </TextInput>
          <RectButton style={styles.button}>
            <Text style={styles.textButton}>Avaliar</Text>
          </RectButton>
      </View>
    </View>
)
}