import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Header from '../../../components/Header';
import * as color from '../../../Colors';

export default function AnuncioDetalhes({ route }) {
  console.log('Meu item: ', route.params)

  return (
    <View style={styles.container}>
      <Header title="Detalhes Anúncio" />
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.PRETO_BACKGROUND,
  },

  header: {
    height: 70,
    width: '100%',
    backgroundColor: color.AMARELO,
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-around',
    padding: 5,
    marginBottom: 15,
  },

  titleHeader: {
    color: '#fff',
    fontSize: 26,
    fontWeight: 'bold',
    marginRight: 10,
  },

  content: {
    padding: 5,
  }
})
