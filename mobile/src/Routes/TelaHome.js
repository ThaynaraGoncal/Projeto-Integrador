import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TouchableHighlight, TextInput, Alert, KeyboardAvoidingView, Image, TouchableWithoutFeedback, Keyboard, } from 'react-native';
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';
import { FontAwesome5, Feather } from '@expo/vector-icons';
import AsyncStorage from '@react-native-community/async-storage';

import useAuth from '../hooks/useAuth';

import Modal from '../components/ViewModal';
import api from '../services/api';
import Logo from '../images/logo.png';
import * as color from '../Colors';

export default function TelaHome() {
  const { user, logado, setLogado, setUser } = useAuth();

  const [visibleSenha, setVisibleSenha] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { navigate } = useNavigation();

  useFocusEffect(() => {
    AsyncStorage.getItem("Dadosuser").then((res) => {
      if (!res) {
        setLogado(false);
      }
      if (res) {
        setUser(JSON.parse(res));
        setLogado(true);
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

      if (res.data?.info) {
        Alert.alert('Atenção', res.data.info)
        return null
      }

      if (res.data) {
        AsyncStorage.setItem("Dadosuser", JSON.stringify(res.data))

        setLogado(true);
        setUser(res.data);
        limpaCampos();
        navigate('Navigation');
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
        <View style={styles.ViewLogado}>
          <Image source={Logo} style={styles.logo} />
          <View style={styles.viewWelcome}>
            <Text style={styles.title}>
              Que bom te ver de volta
              </Text>
            <Text style={styles.textUsuario}>
              {user.apelido}
            </Text>
          </View>
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
      )
        :
        <KeyboardAvoidingView
          behavior={Platform.OS == "ios" ? "padding" : "height"}
        >
          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={styles.inner}>
              <Image source={Logo} style={styles.logo} />
              <View style={styles.viewInput}>
                <FontAwesome5 name='user' size={28} color='rgba(255,255,255, 0.6)' />
                <TextInput
                  style={styles.textInput}
                  placeholder="email@email.com"
                  placeholderTextColor='rgba(255,255,255, 0.6)'
                  value={email}
                  onChangeText={setEmail}
                  color={color.CINZA_TITULO}
                />
              </View>
              <View style={styles.viewInput}>
                <FontAwesome5 name='lock' size={28} color='rgba(255,255,255, 0.6)' />
                <TextInput
                  style={styles.textInput}
                  placeholder='*************'
                  keyboardType='numeric'
                  placeholderTextColor='rgba(255,255,255, 0.6)'
                  value={password}
                  onChangeText={setPassword}
                  color={color.CINZA_TITULO}
                  secureTextEntry={visibleSenha}

                />
                <TouchableOpacity
                  onPress={() => setVisibleSenha(!visibleSenha)}
                >
                  {
                    visibleSenha ?
                      <Feather name='eye' size={25} color='#5c8599' />
                      : <Feather name='eye-off' size={25} color='#5c8599' />
                  }
                </TouchableOpacity>
              </View >
              <View style={styles.viewButtonSenha}>
                <TouchableOpacity style={styles.buttonSenha}
                  onPress={() => {
                    navigate('EsqueciSenha')
                  }}
                >
                  <Text style={styles.textEsqueciSenha}>Esqueci a senha...</Text>
                </TouchableOpacity>
              </View>
              <TouchableOpacity style={styles.buttonLogar}
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
          </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
      }
      <LinearGradient
        colors={['transparent', 'rgba(0,0,0,0.4)']}
        style={styles.linearGradient}
      />
    </View >
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.AZUL_CIANETO,
    alignItems: 'center',
    justifyContent: 'center',
  },

  ViewLogado: {
    flex: 1,
    padding: 10,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center'
  },

  viewWelcome: {
    marginTop: 40,
    flexDirection: 'row',
    alignItems: 'center',
    height: 30,
    width: '100%'
  },

  title: {
    fontFamily: 'Nunito_600SemiBold',
    fontSize: 18,
    color: '#fff',
  },

  textUsuario: {
    fontFamily: 'Nunito_800ExtraBold',
    fontSize: 20,
    color: '#fff',
    marginLeft: 2
  },

  box: {
    flex: 1,
    width: '100%',
  },

  inner: {
    padding: 10,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  logo: {
    width: 200,
    height: 213,
  },

  viewInput: {
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
    width: '100%',
    height: 50,
    borderRadius: 5,
    paddingLeft: 10,
    marginTop: 20,
    flexDirection: 'row',
    // justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#fff',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    //elevation: 2
  },

  textInput: {
    width: '80%',
    height: 50,
    marginLeft: 10,
  },

  buttonLogar: {
    width: '100%',
    height: 50,
    borderRadius: 5,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    marginBottom: 5,
  },

  titleButton: {
    fontFamily: 'Nunito_800ExtraBold',
    fontSize: 24,
    color: color.CINZA_TITULO
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

  linearGradient: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    height: 100,
  },

  viewButtonSenha: {
    width: '100%',
    paddingLeft: 5
  },

  buttonSenha: {
    width: 200,
    height: 30,
    //alignItems: 'center',
    justifyContent: "center"
  },

  textEsqueciSenha: {
    fontFamily: 'Nunito_800ExtraBold',
    fontSize: 20,
    color: color.AMARELO
  }
})