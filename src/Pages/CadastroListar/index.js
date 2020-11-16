import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';

import Button from '../../components/Button';
import Input from '../../components/input';
import InputText from '../../components/InputText';

import styles from './styles';

function CadastroHome() {
  const route = useRoute();
  const { navigate } = useNavigation();

  const [email, setEmail] = useState('');

  function listarMeusDados() {
    navigate('Cadastro')
  }

  function fazerCadastro() {
    navigate('Cadastro')
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Minha Conta</Text>
      <View style={styles.containerInputs}>
        <Text style={styles.labelInput}> Nome</Text>
        <InputText
          onChangeText={setEmail} value={email}
        />
      </View>

      <Button
        titleButton="Buscar"
        onPress={fazerCadastro}
      >
      </Button>
    </View>
  );
}

export default CadastroHome;