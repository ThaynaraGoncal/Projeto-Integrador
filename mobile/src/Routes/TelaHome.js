import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Alert, KeyboardAvoidingView, Image } from 'react-native';
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';
import AsyncStorage from '@react-native-community/async-storage';

import useAuth from '../hooks/useAuth';
import api from '../services/api';

import Logo from '../images/logo.png';

import Input from '../components/input';
import * as color from '../Colors';
import { ScrollView } from 'react-native-gesture-handler';

export default function TelaHome() {
  const { user, logado, setLogado, setUser } = useAuth();
  const [visiblePsw, setVisiblePsw] = useState(false);
  //const [user, setUser] = useState({});
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { navigate } = useNavigation();

  useFocusEffect(() => {
    AsyncStorage.getItem("Dadosuser").then((res) => {
      //console.log('res do then', res)
      if (!res) {
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
  }, [])

  function limpaCampos() {
    setEmail('');
    setPassword('');
  }

  const createAlertOk = (info) =>
    Alert.alert(
      "Atenção",
      info,
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        { text: "OK", onPress: () => navigate('TelaHome') }
      ],
      { cancelable: false }
    );

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
        console.log(res.data);

        //createAlertOk('Cadatrado com sucesso');

        setLogado(true);
        setUser(res.data);
        limpaCampos();
        navigate('Navigation');
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

  async function handleOutraConta() {
    await AsyncStorage.clear();
    setLogado(false)
  }

  function handleCadastro() {
    navigate('Cadastro');
  }

  return (
    <View style={styles.container}>
      {logado ? (
        <KeyboardAvoidingView style={{
          flex: 1,
          width: '100%',
          padding: 20
        }} behavior={Platform.OS == "ios" ? "padding" : "height"} >
          {/* <ScrollView style={{ width: '100%', backgroundColor: 'blue' }}
            showsVerticalScrollIndicator={false}
          > */}
          <View style={styles.viewLogado}>
            <Text style={styles.title}>
              Que bom te ver de volta
            </Text>
            <Text style={styles.textUsuario}>
              {user.apelido}
            </Text>
            <TouchableOpacity style={styles.buttonLogar}
              onPress={handleEntrar}
            >
              <Text style={styles.titleButton}>Entrar</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonLogar}
              onPress={handleOutraConta}
            >
              <Text style={styles.titleButton} >
                Entrar com outra conta
              </Text>
            </TouchableOpacity>
            <View style={styles.viewCadastro}>
              <Text style={styles.textCadastro}>
                Não tem cadastro?
                </Text>
              <TouchableOpacity onPress={handleCadastro}>
                <Text style={styles.textCliqueAqui}
                > Clique aqui!</Text>
              </TouchableOpacity>
            </View>

          </View>
          {/* </ScrollView> */}
        </KeyboardAvoidingView>
      ) :

        <KeyboardAvoidingView style={styles.box}
          behavior={Platform.OS == "ios" ? "padding" : "height"}
        >
          <ScrollView style={{ width: '100%', height: '100%', backgroundColor: 'red' }}>
            <View style={styles.viewContainer}>
              <Image source={Logo} style={styles.logo} />
              {/* <Text style={styles.titleLogin}>
                Faça Login e tenha uma melhor experiência
              </Text> */}

              <View style={styles.viewDados}>
                <Text style={styles.textEmail}>Email</Text>
                <TextInput style={styles.input}
                  value={email}
                  onChangeText={setEmail}
                  placeholder="email@email.com">
                </TextInput>
                <Text style={styles.textEmail}>Senha</Text>
                <View style={styles.viewPass}>
                  <TextInput style={styles.inputPass}
                    secureTextEntry={visiblePsw}
                    value={password}
                    onChangeText={setPassword}
                    placeholder="****************"
                  />
                  <TouchableOpacity onPress={() => { setVisiblePsw(!visiblePsw); console.log('visiblePsw', visiblePsw) }}>
                    {visiblePsw ? <Feather name='eye-off' size={25} color={color.AMARELO} /> :
                      <Feather name='eye' size={25} color={color.AMARELO} />
                    }
                  </TouchableOpacity>
                </View>
              </View>
              <TouchableOpacity style={[styles.buttonLogar]}
                onPress={
                  handleLogin
                }
              >
                <Text style={styles.titleButton}>Entrar</Text>
              </TouchableOpacity>
              <View style={styles.viewCadastro}>
                <Text style={styles.textCadastro}>
                  Não tem cadastro?
                </Text>
                <TouchableOpacity onPress={handleCadastro}>
                  <Text style={styles.textCliqueAqui}
                  > Clique aqui!</Text>
                </TouchableOpacity>
              </View>
            </View>
          </ScrollView>
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
    paddingTop: 20,
  },

  box: {
    flex: 1,
    width: '100%',
  },

  titleLogin: {
    fontFamily: 'Nunito_800ExtraBold',
    fontSize: 22,
    lineHeight: 24,
    color: '#fff',
  },

  viewCadastro: {
    flexDirection: 'row',
  },

  textCadastro: {
    fontFamily: 'Nunito_700Bold',
    fontSize: 16,
    color: color.CINZA_TITULO
  },

  textCliqueAqui: {
    fontFamily: 'Nunito_700Bold',
    fontSize: 16,
    color: color.AMARELO
  },

  viewContainer: {
    height: '100%',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 60,
    paddingHorizontal: 20,
  },

  logo: {
    width: 200,
    height: 200
  },

  viewLogado: {
    flex: 1,
    paddingBottom: 120,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },

  title: {
    fontFamily: 'Nunito_800ExtraBold',
    fontSize: 24,
    color: '#fff',
  },

  textUsuario: {
    fontFamily: 'Nunito_800ExtraBold',
    fontSize: 26,
    color: color.AMARELO,
  },

  buttonLogar: {
    width: '100%',
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

  buttonOutraConta: {
    width: '100%',
    height: 30,
  },

  textButton: {
    fontFamily: 'Nunito_700Bold',
    fontSize: 18,
    color: color.AMARELO
  },

  viewDados: {
    alignItems: 'flex-start',
    width: '100%'
  },

  textEmail: {
    fontFamily: 'Nunito_700Bold',
    fontSize: 24,
    color: '#fff',
    marginTop: 5,
  },

  viewPass: {
    width: '100%',
    height: 50,
    backgroundColor: '#fff',
    borderColor: '#d3e2e6',
    borderWidth: 1.4,
    borderRadius: 10,
    borderRadius: 8,
    flexDirection: 'row',
    justifyContent: 'center',
    paddingHorizontal: 20,
    alignItems: 'center'
  },

  inputPass: {
    width: '100%',
    height: 50,
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
  }
})