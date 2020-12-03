import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  ScrollView,
  KeyboardAvoidingView,
  TouchableOpacity,
  ActivityIndicator
} from 'react-native';
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import AsyncStorage from '@react-native-community/async-storage';
import { FontAwesome } from '@expo/vector-icons';

import * as color from '../../../Colors';

import Header from '../../../components/Header';
import Input from '../../../components/input';
import InputText from '../../../components/InputText';
import Button from '../../../components/Button';

import useAuth from '../../../hooks/useAuth';

import api from '../../../services/api';

import styles from './styles';

function MinhaConta() {
  const { navigate } = useNavigation();
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [telefone, setTelefone] = useState('');

  let usuario = {};

  useFocusEffect(() => {
    AsyncStorage.getItem("Dadosuser").then((res) => {
      //console.log('res do then', res);
      if (res) {
        usuario = JSON.parse(res);
        setNome(usuario.apelido);
        setEmail(usuario.email);
        setTelefone(usuario.telefone);
        //console.log('usuario', usuario.apelido)
      }
    }).catch((err) => {
      console.log(err)
    });
  }, []);

  const handleAnuncios = () => {
    navigate('MeusAnuncios', usuario)
  }

  const handleFavoritos = () => {
    navigate('MeusFavoritos')
  }

  const logoff = async () => {
    console.log('veio para o logoff')
    await AsyncStorage.clear();
    //setUser({});
    //setLogado(false);
    navigate('TelaHome');
  }



  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding" >
      <Header title='Minha Conta' />
      <View style={styles.containerDados}>
        <View style={{ margin: 10, marginRight: 40, alignItems: 'center', }}>
          <FontAwesome name="user-circle" size={60} color={color.CINZA_LABEL} />
        </View>
        <View style={{ marginTop: 5 }}>
          <Text style={styles.dadosTitulo}>{nome}</Text>
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
        <View  style={styles.line}/>
        <TouchableOpacity style={styles.button}
          onPress={handleFavoritos}
        >
          <Text style={styles.textButton}>Meus Favoritos</Text>
        </TouchableOpacity >
        <View  style={styles.line}/>
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