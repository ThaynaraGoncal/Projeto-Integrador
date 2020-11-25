import React, { useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  KeyboardAvoidingView,
  TouchableOpacity
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
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
  const { logoff } = useAuth();
  const { navigate } = useNavigation();

  const [apelido, setApelido] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');



  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding" >
      <Header title='Minha Conta' />
      <View style={styles.containerDados}>
        <View style={{ margin: 10, marginRight: 40, alignItems: 'center', }}>
          <FontAwesome name="user-circle" size={60} color={color.CINZA_LABEL} />
        </View>
        <View style={{ marginTop: 5 }}>
          <Text style={styles.dadosTitulo}>Thaynara Gonçalves</Text>
          <Text style={styles.dados}>Email: thaynara@gmail.com</Text>
          <Text style={styles.dados}>Telefone: (62) 99562-7245</Text>
        </View>
      </View>

      <View>
        <TouchableOpacity>
          <Text>Meus Anúncios</Text>
        </TouchableOpacity>
        <Text>Meus Anúncios</Text>
        <TouchableOpacity>
          <Text>Botao</Text>
        </TouchableOpacity>

        <Button
          titleButton="Logof"
          onPress={() => logoff(navigate)}
        >
        </Button>

      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.containerInputs}>
          <Text style={styles.labelInput}>Minha conta logada</Text>
          <InputText
            onChangeText={setApelido} value={apelido}
          />

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