import React, { useState } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { useFocusEffect, useRoute } from '@react-navigation/native';

import Header from '../../../components/Header';

import styles from './styles';

export default function AnuncioAvaliacoes() {
  const { params } = useRoute();
  const [vazio, setVazio] = useState(true);

  useFocusEffect(() => {
    if (params.length > 0) {
      setVazio(false);
    }
  }, [])

  return (
    <View style={styles.container}>
      <Header title='Avaliações' buttonBack route='AnuncioDetalhes' />
      <View style={{ flex: 1, alignItems: 'center' }}>
        <ScrollView showsVerticalScrollIndicator={false} style={{ width: '100%', }}>
          {vazio ?
            <View style={styles.viewInfo}>
              <Text style={styles.info}>Ops... Sem Avaliações no momento!</Text>
            </View>
            :
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