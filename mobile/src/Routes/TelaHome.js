import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Alert, KeyboardAvoidingView } from 'react-native';
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import AsyncStorage from '@react-native-community/async-storage';

import api from '../services/api';

import useAuth from '../hooks/useAuth';
import * as color from '../Colors';

export default function TelaHome() {
  //const { user, logado, setLogado, setUser } = useAuth();
  const [logado, setLogado] = useState(false);
  const [user, setUser] = useState({});
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { navigate } = useNavigation();

  useFocusEffect(() => {
    AsyncStorage.getItem("Dadosuser").then((res) => {
      //console.log('res do then', res)
      if(!res) {
        setLogado(false);
      }
      if (res) {
        setUser(JSON.parse(res));
        setLogado(true);
        //setLogado(true)
        //console.log('JSON.parse(res)', JSON.parse(res))
        //return user;
        //console.log('usuario do asyncStorage', user)
      }
    }).catch((err) => {
      console.log(err)
    });
  },[])

  function limpaCampos() {
    setEmail('');
    setPassword('');
  }

  function handleLogin() {
    api.get(`/usuario?email=${email}&password=${password}`).then((res) => {
      console.log('data', res.data);

      if (res.data?.info) {
        Alert.alert('Atenção', res.data.info)
        return null
      }

      if (res.data) {
        console.log('setItem LocalStorage')
        AsyncStorage.setItem("Dadosuser", JSON.stringify(res.data))
        // .then(() => {
        setLogado(true);
        setUser(res.data);
        limpaCampos();
        navigate('Navigation')
        // }).catch((err) => {
        //   console.log(err)
        // });
      }
    }).catch((error) => {
      console.log(error);
    });
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
          : <KeyboardAvoidingView style={{
            width: '100%', 
            alignItems: 'center' 
            }} behavior="padding" >
          {/* <View style={{
              width: '100%', 
              alignItems: 'center' 
              }}
            > */}
            <Text
              style={{
                fontFamily: 'Nunito_800ExtraBold',
                fontSize: 22,
                lineHeight: 24,
                color: '#fff',
              }}
            >Faça Login e tenha uma melhor experiência</Text>
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
          {/* </View> */}
          </KeyboardAvoidingView>
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
    marginTop: 10,
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
    marginTop: 10,
  }
})