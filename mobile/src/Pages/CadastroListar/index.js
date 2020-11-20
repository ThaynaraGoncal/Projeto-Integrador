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
  const [senha, setSenha] = useState('');

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
        <Text style={styles.labelInput}> Email</Text>
        <InputText
          onChangeText={setEmail} value={email}
        />
        <Text style={styles.labelInput}> Senha</Text>
        <InputText
          onChangeText={setSenha} value={senha}
        />
      </View>

      <Button
        titleButton="Enviar"
        onPress={fazerCadastro}
      >
      </Button>
    </View>
  );
}

export default CadastroHome;