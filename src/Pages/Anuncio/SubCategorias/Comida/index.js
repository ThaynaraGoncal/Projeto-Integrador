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

function Comida() {
  const { navigate } = useNavigation();

  return (
    <View style={styles.container}>
      <Header title="Escolha uma categoria" buttonBack route="CategoriaAnuncio" />
      <ScrollView>
        <RectButton style={styles.categoriaButton}
          onPress={() => navigate('Anuncio', { name: 'Doces' })}
        >
          <Text style={styles.textButton}>Doces</Text>
        </RectButton>
        <RectButton style={styles.categoriaButton}
          onPress={() => navigate('Anuncio', { name: 'Salgados' })}
        >
          <Text style={styles.textButton}>Salgados</Text>
        </RectButton>
        <RectButton style={styles.categoriaButton}
          onPress={() => navigate('Anuncio', { name: 'Buffet' })}
        >
          <Text style={styles.textButton}>Buffet</Text>
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

export default Comida;