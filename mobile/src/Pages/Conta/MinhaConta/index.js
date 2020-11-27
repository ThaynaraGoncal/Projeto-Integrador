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

  let usuario = {};

  useEffect(() => {
    AsyncStorage.getItem("Dadosuser").then((res) => {
      console.log('res do then', res);
      if (res) {
        usuario = JSON.parse(res);
        setNome(usuario.apelido);
        setEmail(usuario.email);
        console.log('usuario', usuario.apelido)
      }
    }).catch((err) => {
      console.log(err)
    });
  }, []);

  const handleAnuncios = () => {
    navigate('MeusAnuncios')
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
          <Text style={styles.dados}>Telefone: (62) 99562-7245</Text>
        </View>
      </View>

      <View>
        <ActivityIndicator size="large" color="#0000ff" animating={true} />
        <TouchableOpacity
          onPress={handleAnuncios}>
          <Text>Meus Anúncios</Text>
        </TouchableOpacity>
        <Text>Meus Anúncios</Text>
        <TouchableOpacity onPress={ActivityIndicator}>
          <Text>Ativa</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text>Desativa</Text>
        </TouchableOpacity>

        <Button
          titleButton="Logof"
          onPress={logoff}
        >
        </Button>

      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.containerInputs}>
          <Text style={styles.labelInput}>Minha conta logada</Text>
          {/* <InputText
            onChangeText={setNome} value={nome}
          /> */}

          {/* <Button
                        titleButton="Continuar"
                        onPress={handleSubmit}
                    >
                    </Button> */}
        </View>
      </ScrollView>

    </KeyboardAvoidingView>
  );
}

export default MinhaConta;