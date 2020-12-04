import React, { useState } from 'react';
import { View, Text, ScrollView, TextInput, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import Header from '../../../components/Header';
import Button from '../../../components/Button';

import styles from './styles';

function Cadastro() {
  const { navigate } = useNavigation();

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
      navigate('CadastroDetalhes', data);
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
            secureTextEntry={true}
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