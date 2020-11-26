import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Alert } from 'react-native';
import { useNavigation, useFocusEffect } from '@react-navigation/native';

import Navigation from '../Routes/Navigation';

import useAuth from '../hooks/useAuth';
import * as color from '../Colors';

export default function TelaHome() {
  const { user, logado, login, infoLogin } = useAuth();
  const [email, setEmail] = useState(user.apelido);
  const [password, setPassword] = useState('');

  const { navigate } = useNavigation();


  api.get(`/usuario?email=${email}&password=${password}`).then((res) => {
    console.log('data', res.data);

    if (res.data?.info) {
      setInfoLogin(res.data?.info);
      return res.data?.info;
    }

    if (res.data) {
      //console.log('setItem LocalStorage')
      AsyncStorage.setItem("Dadosuser", JSON.stringify(res.data.user));
      //AsyncStorage.setItem("name", JSON.stringify(res.data.user.apelido));
      setLogado(true);
      setUser(res.data);
    }
  }).catch((error) => {
    console.log(error);
  });

  async function handleNavigation() {
    console.log('botao navigation');
    login(email, password);

    console.log('user depois de logado', user)
    console.log('infoLogin.lenght', infoLogin.lenght)
    if (infoLogin.lenght > 0) {
      console.log('meu login', infoLogin)
      alert('Atenção')
      navigate('Navigation')
    }

  }

  function handleEntrar() {
    navigate('Navigation')
  }

  return (
    <View style={styles.container}>
      {
        logado
          ? (
            <View>
              <Text> Que bom te ver de volta {user.apelido}, faça login!</Text>
              <TouchableOpacity style={[styles.buttonLogar]}
                onPress={
                  handleEntrar
                }
              >
                <Text style={styles.titleButton}>Entrar</Text>
              </TouchableOpacity>
            </View>
          )
          : <View>
            <Text> Faça Login e tenha uma melhor experiência</Text>
            <TextInput style={styles.input}
              value={email}
              onChangeText={setEmail}
              placeholder="email@email.com">

            </TextInput>
            <TextInput style={styles.input}
              value={password}
              onChangeText={setPassword}
              placeholder="****************">

            </TextInput>
            <TouchableOpacity style={[styles.buttonLogar]}
              onPress={
                handleLogin
              }
            >
              <Text style={styles.titleButton}>Entrar</Text>
            </TouchableOpacity>
          </View>
      }
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.AZUL_CIANETO,
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingBottom: 40,
  },

  buttonLogar: {
    width: '90%',
    height: 50,
    borderRadius: 10,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  titleButton: {
    fontFamily: 'Nunito_800ExtraBold',
    fontSize: 24,
    color: color.CINZA_TITULO
  },

  input: {
    width: '90%',
    height: 50,
    backgroundColor: '#fff',
    borderColor: '#d3e2e6',
    borderWidth: 1.4,
    borderRadius: 10,
    borderRadius: 8,
    justifyContent: 'center',
    paddingHorizontal: 16,
    paddingHorizontal: 16,
  }
})