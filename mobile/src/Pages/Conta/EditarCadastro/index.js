import React, { useState, useEffect } from 'react';
import { View, TextInput, Text, KeyboardAvoidingView, ScrollView, Alert } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';

import Header from '../../../components/Header';
import Button from '../../../components/Button';
import api from '../../../services/api';

import styles from './styles';

export default function EditarCadastro() {
  const { params } = useRoute();
  const { goBack } = useNavigation();

  const [cd_pessoa, setCdPessoa] = useState('');
  const [nome, setNome] = useState('');
  const [apelido, setApelido] = useState('');
  const [email, setEmail] = useState('');
  const [dt_nascimento, setDtNascimento] = useState('');
  const [telefone, setTelefone] = useState('');
  const [cpf, setCPF] = useState('');

  useEffect(() => {
    setCdPessoa(params.cd_pessoa_fisica)
    setNome(params.nome);
    setApelido(params.apelido);
    setEmail(params.email);
    setDtNascimento(params.dt_nascimento);
    setTelefone(params.telefone);
    setCPF(params.cpf);
  }, [])

  async function editaCadastro() {
    const dados = {
      cd_pessoa, nome, apelido, email, dt_nascimento, telefone, cpf
    }

    const { data } = await api.put('/usuario', dados);
    if (data) {
      createAlert(data.info)
    }
  }

  const createAlert = (info) =>
    Alert.alert(
      "Informação",
      info,
      [
        {
          text: "OK", onPress: () => goBack()
        }
      ],
      { cancelable: false }
    );

  return (
    <View style={styles.container}>
      <Header title='Editar Cadastro' buttonBack route='MinhaConta' />
      <KeyboardAvoidingView style={styles.box}
        behavior={Platform.OS == "ios" ? "padding" : "height"}
      >
        <ScrollView >
          <Text style={styles.labelInput}>Apelido</Text>
          <TextInput style={styles.input}
            returnKeyType='done'
            placeholder='clique para digitar'
            onChangeText={setApelido} value={apelido}
          />
          <Text style={styles.labelInput}>Nome</Text>
          <TextInput style={styles.input}
            returnKeyType='done'
            placeholder='clique para digitar'
            onChangeText={setNome} value={nome}
          />
          <Text style={styles.labelInput}>Data Nascimento</Text>
          <TextInput style={styles.input}
            returnKeyType='done'
            placeholder='clique para digitar'
            onChangeText={setDtNascimento} value={dt_nascimento}
          />
          <Text style={styles.labelInput}>CPF</Text>
          <TextInput style={styles.input}
            returnKeyType='done'
            placeholder='clique para digitar'
            onChangeText={setCPF} value={cpf}
          />
          <Text style={styles.labelInput}>E-mail</Text>
          <TextInput style={styles.input}
            returnKeyType='done'
            placeholder='clique para digitar'
            onChangeText={setEmail} value={email}
          />
          <Text style={styles.labelInput}>Telefone</Text>
          <TextInput style={styles.input}
            returnKeyType='done'
            placeholder='clique para digitar'
            onChangeText={setTelefone} value={telefone}
          />
          <Button
            titleButton="Continuar"
            onPress={editaCadastro}
          >
          </Button>
        </ScrollView>
      </KeyboardAvoidingView>
    </View>
  )
}