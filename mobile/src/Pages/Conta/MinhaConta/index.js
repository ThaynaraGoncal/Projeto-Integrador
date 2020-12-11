import React, { useState } from 'react';
import {
  View,
  Text,
  KeyboardAvoidingView,
  TouchableOpacity,
} from 'react-native';
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import AsyncStorage from '@react-native-community/async-storage';
import { FontAwesome } from '@expo/vector-icons';

import * as color from '../../../Colors';

import Header from '../../../components/Header';

import styles from './styles';

function MinhaConta() {
  const { navigate } = useNavigation();
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [telefone, setTelefone] = useState('');
  const [dt_nascimento, setDt_nascimento] = useState('');
  const [cpf, setCPF] = useState('');

  let usuario = {};

  useFocusEffect(() => {
    AsyncStorage.getItem("Dadosuser").then((res) => {
      if (res) {
        usuario = JSON.parse(res);

        setNome(usuario.nome);
        setEmail(usuario.email);
        setTelefone(usuario.telefone);
        setDt_nascimento(usuario.dt_nascimento)
        setCPF(usuario.cpf)
      }
    }).catch((err) => {
      console.log(err)
    });
  }, []);

  const handleAnuncios = () => {
    navigate('MeusAnuncios', usuario)
  }

  const logoff = async () => {
    await AsyncStorage.clear();
    navigate('TelaHome');
  }

  const handleFavoritos = () => {
    navigate('MeusFavoritos')
  }

  function handleEditar() {
    navigate('EditarCadastro', usuario)
  }

  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding" >
      <Header title='Minha Conta' />
      <View style={styles.containerDados}>
        <View style={{ marginLeft: 30, marginRight: 30, alignItems: 'center', justifyContent: 'center' }}>
          <FontAwesome name="user-circle" size={70} color={color.CINZA_LABEL} />
        </View>
        <View style={{ marginTop: 5 }}>
          <Text style={styles.dadosTitulo}>{nome}</Text>
          <Text style={styles.dados}>Data Nascimento: {dt_nascimento}</Text>
          <Text style={styles.dados}>CPF: {cpf}</Text>
          <Text style={styles.dados}>Email: {email}</Text>
          <Text style={styles.dados}>Telefone: {telefone}</Text>
        </View>
      </View>

      <View style={styles.containerButtons}>
        <TouchableOpacity style={styles.button}
          onPress={handleAnuncios}
        >
          <Text style={styles.textButton}>Meus Anúncios</Text>
        </TouchableOpacity >
        <View style={styles.line} />
        <TouchableOpacity style={styles.button}
          onPress={handleEditar}
        >
          <Text style={styles.textButton}>Editar Cadastro</Text>
        </TouchableOpacity >
        <View style={styles.line} />
        <TouchableOpacity style={styles.button}
          onPress={handleFavoritos}
        >
          <Text style={styles.textButton}>Meus Favoritos</Text>
        </TouchableOpacity >
        <View style={styles.line} />
        <TouchableOpacity style={styles.button}
          onPress={() => navigate('AlteraSenha')}
        >
          <Text style={styles.textButton}>Alterar Senha</Text>
        </TouchableOpacity>
        <View style={styles.line} />
        <TouchableOpacity style={styles.button}
          onPress={logoff}
        >
          <Text style={styles.textButton}>Sair</Text>
        </TouchableOpacity>

      </View>

    </KeyboardAvoidingView>
  );
}

export default MinhaConta;