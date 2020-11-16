import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { RectButton } from 'react-native-gesture-handler';
import {
  Text,
  StyleSheet,
  ScrollView,
  View,
} from "react-native";

import Header from '../../../../components/Header';
import * as color from '../../../../Colors';

function Decoracao() {
  const { navigate } = useNavigation();

  return (
    <View style={styles.container}>
      <Header title="Escolha uma categoria" buttonBack route="CategoriaAnuncio" />
      <ScrollView>
        <RectButton style={styles.categoriaButton}
          onPress={() => navigate('Anuncio', { name: 'Mesas' })}
        >
          <Text style={styles.textButton}>Mesas</Text>
        </RectButton>
        <RectButton style={styles.categoriaButton}
          onPress={() => navigate('Anuncio', { name: 'Temas' })}
        >
          <Text style={styles.textButton}>Temas</Text>
        </RectButton>
        <RectButton style={styles.categoriaButton}
          onPress={() => navigate('Anuncio', { name: 'Flores' })}
        >
          <Text style={styles.textButton}>Flores</Text>
        </RectButton>
        <RectButton style={styles.categoriaButton}
          onPress={() => navigate('Anuncio', { name: 'Baloes' })}
        >
          <Text style={styles.textButton}>Balões</Text>
        </RectButton>

      </ScrollView>
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.PRETO_BACKGROUND,
  },

  categoriaButton: {
    width: '100%',
    height: 50,
    backgroundColor: '#fff',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    padding: 10,
    marginBottom: 10,
  },

  textButton: {
    fontSize: 24,
    marginLeft: 20
  }
});

export default Decoracao;