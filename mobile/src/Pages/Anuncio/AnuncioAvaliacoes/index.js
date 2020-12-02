import React, { useContext, useState, useRef } from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TextInput, KeyboardAvoidingView, TouchableOpacity, Alert } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { AntDesign, Entypo } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';
import Textarea from 'react-native-textarea';

import Header from '../../../components/Header';
import api from '../../../services/api';

import styles from './styles';
import * as color from '../../../Colors';

export default function AnuncioAvaliacoes() {
  const { params } = useRoute();

  console.log('params', params)

  return (
    <View style={styles.container}>
      <Header title='Avaliações' buttonBack route='AnuncioDetalhes' />
      <View style={{ flex: 1, alignItems: 'center' }}>
        <ScrollView showsVerticalScrollIndicator={false} style={{ width: '100%', }}>
          {
            params.map(item => {
              return (
                <View key={item.id}
                  style={styles.viewAvaliacoes}
                >
                  <View style={styles.header}>
                    <Text style={styles.usuario}>{item.nome}</Text>
                    <Text>{item.like ?
                      <AntDesign name='like1' size={20} color='green' />
                      : <AntDesign name='dislike1' size={20} color='red' />}
                    </Text>
                  </View>
                  <View style={styles.line} />
                  <Text style={styles.titulo}>{item.titulo}</Text>
                  <Text style={styles.texto}>{item.texto}</Text>
                </View>
              )
            })

          }
        </ScrollView>
      </View>
    </View>
  )
};