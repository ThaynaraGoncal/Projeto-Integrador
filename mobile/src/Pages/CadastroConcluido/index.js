import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';

import Button from '../../components/Button';

import styles from './styles';

function CadastroConcluido() {
  const route = useRoute();
  const { navigate } = useNavigation();

  const { usuario } = route.params;
  console.log(route.params);

  function handleSubmit() {
    navigate('Cadastro')
  }

  return (
    <View style={styles.container}>
      <View style={styles.containerInputs}>
        <Text style={styles.title}>Usuário Cadastrado!</Text>
        <Text style={styles.labelInput}>Nome: {usuario.nome}</Text>
        <Text style={styles.labelInput}>Data Nascimento: {usuario.dt_nascimento}</Text>
        <Text style={styles.labelInput}>Email: {usuario.email}</Text>
        <Text style={styles.labelInput}>Telefone: {usuario.telefone}</Text>
      </View>
      <Button
        titleButton="Ok"
        onPress={handleSubmit}
      >
      </Button>
    </View>
  );
}

export default CadastroConcluido;