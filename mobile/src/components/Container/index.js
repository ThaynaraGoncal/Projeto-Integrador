import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Header from '../../components/Header';
import * as color from '../../Colors';


export default function Container({ children, title, buttonBack, route }) {

  return (
    <View style={styles.container}>
      <Header title={title} buttonBack={buttonBack} route={route} />
      <View style={styles.content}>
        {children}
      </View>
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
