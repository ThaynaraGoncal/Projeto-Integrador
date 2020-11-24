import React, { useState } from 'react';
import { View, Text, StyleSheet, Alert, TextInput, KeyboardAvoidingView, ScrollView } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import { useRoute } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';
import { FontAwesome } from '@expo/vector-icons';

import useAuth from '../../hooks/useAuth';

import * as color from '../../Colors';

import Header from '../../components/Header';
import Button from '../../components/Button';
import api from '../../services/api';


function ContaHome() {
  const { user, login } = useAuth();

  const route = useRoute();
  const { navigate } = useNavigation();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function validaCamposNull() {
    let validado = true;

    if (email === '' || password === '') {
      Alert.alert('Informação', 'Informe os dados')
      validado = false;
    }

    return validado;
  }

  function fazerLogin() {

    const validado = validaCamposNull();

    if (validado) {
      //console.log('email', email)
      //console.log('user', user)
      login(email, password);
      console.log('user', user)

    }

  }

  function fazerCadastro() {
    navigate('Cadastro');
  }

  return (
    <KeyboardAvoidingView style={styles.container} >
      <Header title='Minha Conta' />
      <ScrollView>
        <View style={{ alignItems: 'center' }}>
          <FontAwesome name="user-circle" size={150} color={color.CINZA_LABEL} style={{ marginTop: 20 }} />
        </View>

        <View style={styles.containerInputs}>
          <Text style={styles.labelInput}> Email</Text>
          <TextInput
            placeholder='email@email.com'
            style={styles.input}
            value={email}
            onChangeText={setEmail}
          />
          <Text style={styles.labelInput}> Senha</Text>
          <TextInput
            placeholder='******************'
            style={styles.input}
            onChangeText={setPassword} value={password}
          />
        </View>
        <Text>Não tem cadastro?</Text>
        <Button
          titleButton="Fazer cadastro"
          onPress={fazerCadastro}
        >
        </Button>
        <Button
          titleButton="Enviar"
          onPress={fazerLogin}
        >
        </Button>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  containerInputs: {
    marginTop: 20,
    marginHorizontal: 20,
  },

  labelInput: {
    fontFamily: 'Nunito_800ExtraBold',
    fontSize: 20,
    color: color.CINZA_TITULO,
    marginTop: 10,
  },

  input: {
    width: '100%',
    height: 50,
    backgroundColor: '#fff',
    borderColor: '#d3e2e6',
    borderWidth: 1.4,
    borderRadius: 10,
    borderRadius: 8,
    justifyContent: 'center',
    paddingHorizontal: 16,
    paddingHorizontal: 16,
  },

  inputRed: {
    width: '100%',
    height: 50,
    backgroundColor: '#fff',
    borderColor: color.VERMELHO_CLARO,
    borderWidth: 1.4,
    borderRadius: 10,
    borderRadius: 8,
    justifyContent: 'center',
    paddingHorizontal: 16,
    paddingHorizontal: 16,
  }


});

export default ContaHome;