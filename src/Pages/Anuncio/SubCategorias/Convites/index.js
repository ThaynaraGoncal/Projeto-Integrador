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

function Convites() {
  const { navigate } = useNavigation();

  return (
    <View style={styles.container}>
      <Header title="Escolha uma categoria" buttonBack route="CategoriaAnuncio" />
      <ScrollView>
        <RectButton style={styles.categoriaButton}
          onPress={() => navigate('Anuncio', { name: 'Digital' })}
        >
          <Text style={styles.textButton}>Digital</Text>
        </RectButton>
        <RectButton style={styles.categoriaButton}
          onPress={() => navigate('Anuncio', { name: 'Carta' })}
        >
          <Text style={styles.textButton}>Carta</Text>
        </RectButton>
        <RectButton style={styles.categoriaButton}
          onPress={() => navigate('Anuncio', { name: 'Papel' })}
        >
          <Text style={styles.textButton}>Papel</Text>
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

export default Convites;