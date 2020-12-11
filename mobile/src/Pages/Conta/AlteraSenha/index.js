import React, { useState } from 'react';
import { View, Text, TextInput, Alert, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';

import Button from '../../../components/Button';
import Header from '../../../components/Header';
import api from '../../../services/api';
import styles from './styles';

export default function AlteraSenha() {
  const [senha_atual, setSenha_atual] = useState('');
  const [nova_senha, setNova_senha] = useState('');
  const [confirma_senha, setConfirma_senha] = useState('');
  const [visibleSenha, setVisibleSenha] = useState(true);
  const [visibleNova, setVisibleNova] = useState(true);
  const [visibleConfirma, setVisibleConfirma] = useState(true);

  const { goBack } = useNavigation();

  const alteraSenha = async () => {

    if (senha_atual === '' || nova_senha === '' || confirma_senha === '') {
      Alert.alert('Atenção', 'Insira todos os campos!');
      return null
    }

    if (nova_senha != confirma_senha) {
      Alert.alert('Atenção', 'Senhas não conferem!');
      return null
    }

    const { data } = await api.put(`/altera_senha?senha_atual=${senha_atual}&nova_senha=${nova_senha}`);
    if (data) {
      if (data.msg) {
        Alert.alert('Atenção', data.msg);
      } else {
        createAlert(data.info);
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
      <Header title='Esqueci Senha' buttonBack route='MinhaConta' />
      <ScrollView>
        <View style={styles.viewCenter}>
          <Text style={styles.titulo}>Escolha uma nova senha</Text>
          <Text style={styles.labelInput}>Senha atual</Text>
          <View style={styles.viewInput}>
            <TextInput
              style={styles.input}
              returnKeyType='done'
              keyboardType="numeric"
              placeholder='**************'
              onChangeText={setSenha_atual}
              value={senha_atual}
              placeholderTextColor='#5c8599'
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

          </View>
          <Text style={styles.labelInput}>Nova senha</Text>
          <View style={styles.viewInput}>
            <TextInput
              style={styles.input}
              returnKeyType='done'
              keyboardType="numeric"
              placeholder='**************'
              onChangeText={setNova_senha}
              value={nova_senha}
              placeholderTextColor='#5c8599'
              secureTextEntry={visibleNova}
            />
            <TouchableOpacity
              onPress={() => setVisibleNova(!visibleNova)}
            >
              {
                visibleNova ?
                  <Feather name='eye' size={25} color='#5c8599' />
                  : <Feather name='eye-off' size={25} color='#5c8599' />
              }
            </TouchableOpacity>
          </View>
          <Text style={styles.labelInput}>Confirme a senha</Text>
          <View style={styles.viewInput}>
            <TextInput
              style={styles.input}
              returnKeyType='done'
              keyboardType="numeric"
              placeholder='**************'
              onChangeText={setConfirma_senha}
              value={confirma_senha}
              placeholderTextColor='#5c8599'
              secureTextEntry={visibleConfirma}
            />
            <TouchableOpacity
              onPress={() => setVisibleConfirma(!visibleConfirma)}
            >
              {
                visibleConfirma ?
                  <Feather name='eye' size={25} color='#5c8599' />
                  : <Feather name='eye-off' size={25} color='#5c8599' />
              }
            </TouchableOpacity>
          </View>
          <Button
            titleButton="Enviar"
            onPress={alteraSenha}
          >
          </Button>
        </View>
      </ScrollView>
    </View>
  )
}