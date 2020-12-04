import React, { useState } from 'react';
import { View, Text, ScrollView, KeyboardAvoidingView, TextInput, Alert } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';

import Header from '../../../components/Header';
import Input from '../../../components/input';
import Button from '../../../components/Button';

import api from '../../../services/api';

import styles from './styles';

function CadastroDetalhes() {
  const { navigate } = useNavigation();
  const { params } = useRoute();

  const [nome, setNome] = useState('');
  const [dt_nascimento, setDtNascimento] = useState('');
  const [cpf, setCPF] = useState('');
  const [telefone, setTelefone] = useState('');

  const apelido = params.apelido;
  const email = params.email;
  const password = params.password;

  function validaCamposNull() {
    let validado = true;

    if (nome == '' || cpf == '') {
      Alert.alert('Atenção', 'Preencha todos os campos')
      validado = false;
    }

    return validado;
  }

  const createAlert = (info) =>
    Alert.alert(
      "Informação",
      info,
      [
        { text: "OK", onPress: () => navigate('TelaHome') }
      ],
      { cancelable: false }
    )

  function handleSubmit() {

    const data = {
      nome, apelido, email, password, cpf, dt_nascimento, telefone
    }

    let validaCampos = validaCamposNull();

    if (validaCampos) {
      api.post(`/usuario`, data).then(res => {
        if (res.data.info) {
          Alert.alert('Atenção', res.data.info)
        } else {
          createAlert('Cadastrado com sucesso, faça login!');
        }
      }).catch(error => {
        console.log(error);
      });
    }
  }

  return (
    <View style={styles.container}>
      <Header title='Cadastro' buttonBack route='Cadastro' />
      <KeyboardAvoidingView
        behavior={Platform.OS == "ios" ? "padding" : "height"}
        style={{ paddingTop: 20, flex: 1 }}>
        <ScrollView>
          <Text style={styles.labelInput}>Nome</Text>
          <TextInput style={styles.input}
            returnKeyType='done'
            placeholder='clique para digirar'
            onChangeText={setNome} value={nome}
          />
          <Text style={styles.labelInput}>Data Nascimento</Text>
          <Input type={'custom'}
            options={{ mask: '99/99/9999' }}
            keyboardType='numeric'
            onChangeText={setDtNascimento}
            value={dt_nascimento}
          />
          <Text style={styles.labelInput}> CPF</Text>
          <Input type={'custom'}
            options={{ mask: '999.999.999-99' }}
            keyboardType='numeric'
            onChangeText={setCPF} value={cpf}
          />
          <Text style={styles.labelInput}>Telefone</Text>
          <Input type={'custom'}
            options={{ mask: '(99) 99999-9999' }}
            keyboardType='numeric'
            onChangeText={setTelefone}
            value={telefone}
          />
          <Button
            titleButton="Continuar"
            onPress={handleSubmit}
          >
          </Button>
        </ScrollView>
      </KeyboardAvoidingView>
    </View>
  );
}

export default CadastroDetalhes;