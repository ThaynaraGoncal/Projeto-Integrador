import React, { useState } from 'react';
import { View, Text, TextInput, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Entypo } from '@expo/vector-icons';

import Button from '../../../components/Button';
import Header from '../../../components/Header';
import api from '../../../services/api';
import styles from './styles';

export default function EsqueciSenha() {
  const [email, setEmail] = useState('');

  const { goBack } = useNavigation();

  const redefineSenha = async () => {

    if (email === '') {
      Alert.alert('Atenção', 'Digite seu e-mail!');
      return null
    }

    const { data } = await api.put(`/usuario_senha?email=${email}`);
    if (data) {
      if (data.msg) {
        Alert.alert('Atenção', data.msg)
      } else {
        createAlert(data.info)
      }
    }

  }

  const createAlert = (info) =>
    Alert.alert(
      "Atenção",
      info,
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        {
          text: "OK", onPress: () => { goBack() }
        }
      ],
      { cancelable: false }
    );

  return (
    <View style={styles.container}>
      <Header title='Esqueci Senha' buttonBack route='TelaHome' />
      <View style={styles.viewCenter}>
        <Text style={styles.labelInput}>Informe seu e-mail para redefinir a senha</Text>
        <View style={styles.viewInput}>
          <Entypo name='email' size={24} color='#5c8599' />
          <TextInput
            style={styles.input}
            returnKeyType='done'
            keyboardType="email-address"
            placeholder='email@email.com'
            onChangeText={setEmail}
            value={email}
            placeholderTextColor='#5c8599'
          />
        </View>
        <Button
          titleButton="Enviar"
          onPress={redefineSenha}
        >
        </Button>
      </View>
    </View>
  )
}