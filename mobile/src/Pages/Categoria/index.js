import React, { useState } from 'react';

import { View, Text, ScrollView, KeyboardAvoidingView, TextInput, Alert } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

import Input from '../../components/input';
import styles from './styles';
import api from '../../services/api';

function Categoria() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Serviço</Text>
      <View style={styles.options}>
        <Text>Nome</Text>
        <Input type='cpf'></Input>
      </View>
    </View>
  )
}

export default Categoria;