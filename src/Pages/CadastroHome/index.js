import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';

import Button from '../../components/Button';

import styles from './styles';

function CadastroHome() {
  const route = useRoute();
  const { navigate } = useNavigation();

  function listarMeusDados() {
    navigate('CadastroListar')
  }

  function fazerCadastro() {
    navigate('Cadastro')
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Minha Conta</Text>
      <Button
        titleButton="Fazer Login"
        onPress={listarMeusDados}
      >
      </Button>
      <Button
        titleButton="Cadastrar"
        onPress={fazerCadastro}
      >
      </Button>
    </View>
  );
}

export default CadastroHome;