import React, { useReducer, useState } from 'react';
import { View, Text, ScrollView, KeyboardAvoidingView, TextInput, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import Header from '../../../components/Header';
import Input from '../../../components/input';
import InputText from '../../../components/InputText';
import Button from '../../../components/Button';

import api from '../../../services/api';
import useAuth from '../../../hooks/useAuth';

import styles from './styles';

function Cadastro() {
  const { navigate } = useNavigation();

  const [nome, setNome] = useState('');
  const [apelido, setApelido] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function validaCamposNull() {
    let validado = true;

    if (apelido == '' || email == '' || password == '') {
      Alert.alert('Informação', 'Preencha todos os campos')
      validado = false;
    }

    return validado;
  }

  function handleSubmit() {

    const data = {
      apelido, email, password
    }

    let validaCampos = validaCamposNull();

    if (validaCampos) {
      navigate('CadastroDetalhes', data)
      // api.post(`/usuario`, data).then(res => {
      //   console.log(res.data)
      //   if (res.data.info) {
      //       alert(res.data.info)
      //   } else {
      //       //alert(res.data.sucess)
      //       navigate("CadastroConcluido", res.data);
      //     }
      //   }).catch(error => {
      //       console.log(error);
      //   });
    }
  }

  return (
    <View style={styles.container}>
      <Header title='Cadastro' buttonBack route='TelaHome' />
      <View
        behavior={Platform.OS == "ios" ? "padding" : "height"}
        style={{ paddingTop: 20, flex: 1 }}>
        <ScrollView>
          <View style={{ flexDirection: 'row' }}>
            <Text style={styles.labelInput}> Apelido</Text>
            <Text style={styles.infoApelido}>Como aparecerá em seus anúncios.</Text>
          </View>
          <TextInput style={styles.input}
            returnKeyType='done'
            placeholder='clique para digitar'
            onChangeText={setApelido} value={apelido}
          />
          <Text style={styles.labelInput}> E-mail</Text>
          <TextInput style={styles.input}
            returnKeyType='done'
            keyboardType="email-address"
            placeholder='clique para digitar'
            onChangeText={setEmail}
            value={email}
          />
          <Text style={styles.labelInput}> Password</Text>
          <TextInput style={styles.input}
            returnKeyType='done'
            keyboardType='numeric'
            placeholder='clique para digitar'
            onChangeText={setPassword}
            value={password}
          />
          <Button
            titleButton="Continuar"
            onPress={handleSubmit}
          >
          </Button>
        </ScrollView>
      </View>
    </View>
  );
}

export default Cadastro;