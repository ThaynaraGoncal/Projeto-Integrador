import React, { useState } from 'react';
import { View, Text, StyleSheet, Alert, TextInput, KeyboardAvoidingView } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';
import { FontAwesome } from '@expo/vector-icons';

import * as color from '../../Colors';

import Header from '../../components/Header';
import Button from '../../components/Button';
//import Input from '../../components/input';
//import InputText from '../../components/InputText';
import api from '../../services/api';

function ContaHome() {
  const route = useRoute();
  const { navigate } = useNavigation();

  const [inputEmail, setInputEmail] = useState(false);
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  function validaCamposNull() {
    let validado = true;

    if (email === '') {
      setInputEmail(true);
      Alert.alert('Informação', 'Informe os dados')
      validado = false;
    }

    return validado;
  }

  function fazerLogin() {

    const validado = validaCamposNull();

    if (validado) {

      api.get(`/usuario?email=${email}&password=${senha}`).then(res => {
        console.log(res.data)
        // if (res.data.info) {
        //     alert(res.data.info)
        // } else {
        //     //alert(res.data.sucess)
        //     navigate("CadastroConcluido", res.data);
        // }
        if (res.data) {
          if (res.data.info) {
            Alert.alert('Atenção', res.data.info);
          } else {
            navigate('MinhaConta', res.data)
          }
        }

      }).catch(error => {
        console.log(error);
      });
    }

  }

  return (
    <KeyboardAvoidingView style={styles.container} >
      <Header title='Minha Conta' />
      <View style={{ alignItems: 'center' }}>
        <FontAwesome name="user-circle" size={150} color={color.CINZA_LABEL} style={{ marginTop: 20 }} />
      </View>

      <View style={styles.containerInputs}>
        <Text style={styles.labelInput}> Email</Text>
        <TextInput
          placeholder='email@email.com'
          style={inputEmail ? styles.inputRed : styles.input}
          value={email}
          onChangeText={setEmail}
        />
        <Text style={styles.labelInput}> Senha</Text>
        <TextInput
          placeholder='******************'
          style={styles.input}
          onChangeText={setSenha} value={senha}
        />
      </View>

      <Button
        titleButton="Enviar"
        onPress={fazerLogin}
      >
      </Button>
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