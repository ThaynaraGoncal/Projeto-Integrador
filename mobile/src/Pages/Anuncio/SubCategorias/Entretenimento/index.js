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

function Entretenimento({ route }) {
  const rota = route.params;
  const { navigate } = useNavigation();

  return (
    <View style={styles.container}>
      <Header title="Escolha uma categoria" buttonBack route="CategoriaAnuncio" />
      <ScrollView>
        <RectButton style={styles.categoriaButton}
          onPress={() => navigate(rota, { name: 'Brinquedos' })}
        >
          <Text style={styles.textButton}>Brinquedos</Text>
        </RectButton>
        <RectButton style={styles.categoriaButton}
          onPress={() => navigate(rota, { name: 'Danca' })}
        >
          <Text style={styles.textButton}>Dança</Text>
        </RectButton>
        <RectButton style={styles.categoriaButton}
          onPress={() => navigate(rota, { name: 'Jogos' })}
        >
          <Text style={styles.textButton}>Jogos</Text>
        </RectButton>

      </ScrollView>
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  categoriaButton: {
    height: 50,
    backgroundColor: '#fff',
    borderColor: '#d3e2e6',
    borderWidth: 1.4,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingLeft: 10,
    paddingRight: 10,
    marginBottom: 10,
    marginLeft: 5,
    marginRight: 5
  },

  textButton: {
    fontFamily: 'Nunito_600SemiBold',
    color: '#8fa7b3',
    fontSize: 22,
    marginLeft: 20
  }
});

export default Entretenimento;