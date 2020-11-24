import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { View, Text, StyleSheet, TextInput, Modal, TouchableHighlight, ScrollView } from 'react-native';
import { RectButton, BorderlessButton, TouchableOpacity } from 'react-native-gesture-handler';
import { AntDesign, Feather, MaterialIcons } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';

import Button from '../../components/Button';

import styles from './styles';
import api from '../../services/api';

export default function Filtro({ route }) {
  const [categoria, setCategoria] = useState('');
  const [precoMin, setPrecoMin] = useState('');
  const [precoMax, setPrecoMax] = useState('');

  const { navigate } = useNavigation();
  const rotas = useRoute();

  useMemo(() => {

    if (categoria) {
      api.get(`/anuncio?categoria=${categoria}&precoMin=${precoMin}&precoMax=${precoMax}`).then(res => {
        const data = res.data.anuncios;
        //console.log('data', data)
        navigate('Home', { teste: data })
        // if (data) {
        //   setCategoria('')
        //   navigate('Home', data)
        // }

      }).catch(error => {
        console.log(error);
      });
    }

    console.log('categoria selecionada: ', categoria)
    console.log(precoMin)
    console.log(precoMax)
  }, [categoria])

  function handleSubmit() {
    if (route.params) {
      setCategoria(route.params.name);
    } else {
      setCategoria('');
      navigate('Home')
    }

  }

  return (
    <View style={styles.centeredView}>
      <View style={styles.header}>
        <TouchableOpacity>
          <Text style={styles.textStyle}>Limpar</Text>
        </TouchableOpacity>
        <Text style={styles.titleHeader}>Filtros</Text>

        <BorderlessButton style={styles.button}
          onPress={() => navigate('Home')}
        >
          <Feather name="x" size={28} color="#ff669d" />
        </BorderlessButton>
      </View>

      <ScrollView style={styles.container}>
        <Text style={styles.titleOpcoes}>Categorias</Text>
        <RectButton style={styles.buttonCategoria}
          onPress={() => navigate('Categoria', 'Filtro')}
          value={categoria}
        // onChangeText={setCategoria}
        >
          <Text style={styles.textButton}>{rotas.params ? rotas.params.name : 'Selecione uma categoria'}</Text>
          <AntDesign name="arrowright" size={24} color="#c1bccc" />
        </RectButton>
        <Text style={styles.titleOpcoes}>Preço(R$)</Text>
        <View style={styles.viewInputPrecos}>
          <TextInput placeholder="Valor Mínimo" style={styles.inputPrecos}
            value={precoMin}
            onChangeText={setPrecoMin}
          />
          <TextInput placeholder="Valor Máximo" style={styles.inputPrecos}
            value={precoMax}
            onChangeText={setPrecoMax}
          />
        </View>
        <Button
          titleButton="Filtrar"
          onPress={handleSubmit}
        >
        </Button>
      </ScrollView>
    </View>
  );
}