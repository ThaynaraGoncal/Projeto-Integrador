import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { View, Text, StyleSheet, TextInput, Modal, TouchableHighlight, ScrollView, Alert } from 'react-native';
import { RectButton, BorderlessButton, TouchableOpacity } from 'react-native-gesture-handler';
import { AntDesign, Feather, MaterialIcons } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';

import useAnuncio from '../../hooks/useAnuncio';

import Button from '../../components/Button';
import styles from './styles';
import api from '../../services/api';

export default function Filtro({ route }) {
  const { setAnuncios } = useAnuncio();

  const [precoMin, setPrecoMin] = useState('');
  const [precoMax, setPrecoMax] = useState('');

  const { navigate } = useNavigation();
  const { params } = useRoute();
  console.log('rota que veio do filtro', params)

  let categoria = '';
  if (params != undefined) {
    const { name } = params;
    console.log('categoria', name)
    categoria = name;
  }

  function validaFiltros(categoria, precoMin, precoMax) {
    if (precoMin != '' || precoMax != '') {
      if (categoria === '') {
        Alert.alert('Atenção!', 'Selecione uma categoria');
        return false
      }
    }
    if (precoMin != '' && precoMax === '') {
      Alert.alert('Atenção!', 'Informe um preço Máximo');
      return false
    }

    if (precoMin === '' && precoMax != '') {
      Alert.alert('Atenção!', 'Informe um preço Máximo');
      return false
    }
    return true
  }


  function limpaCampos() {
    params.categoria = 'oii';
    setPrecoMin('');
    setPrecoMax('');
  }

  function handleSubmit() {
    console.log('categoria', categoria)
    console.log('precoMin', precoMin)
    console.log('precoMax', precoMax)

    let ok = validaFiltros(categoria, precoMin, precoMax);
    console.log('ok', ok)
    if (ok) {
      if (categoria === '') {
        console.log('informe uma categoria')
        api.get(`/anuncios`).then(res => {
          const data = res.data;
          console.log('data', data)
          //navigate('Home', { teste: data })
          if (data) {
            setAnuncios(data)
            navigate('Home')
          }

        }).catch(error => {
          console.log(error);
        });
      } else {
        console.log('Rota com parametro')
        api.get(`/anuncio?categoria=${categoria}&precoMin=${precoMin}&precoMax=${precoMax}`).then(res => {
          const data = res.data.anuncios;
          console.log('data', data)
          //navigate('Home', { teste: data })
          if (data) {
            setAnuncios(data)
            navigate('Home')
          }

        }).catch(error => {
          console.log(error);
        });
      }
    }

  }

  return (
    <View style={styles.centeredView}>
      <View style={styles.header}>
        <TouchableOpacity onPress={limpaCampos}>
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
          <Text style={styles.textButton}>{params ? params.name : 'Selecione uma categoria'}</Text>
          <AntDesign name="arrowright" size={24} color="#c1bccc" />
        </RectButton>
        <Text style={styles.titleOpcoes}>Preço(R$)</Text>
        <View style={styles.viewInputPrecos}>
          <TextInput placeholder="Mínimo" style={styles.inputPrecos}
            returnKeyType='done'
            keyboardType="numeric"
            value={precoMin}
            onChangeText={setPrecoMin}
          />
          <TextInput placeholder="Máximo" style={styles.inputPrecos}
            returnKeyType='done'
            keyboardType="numeric"
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