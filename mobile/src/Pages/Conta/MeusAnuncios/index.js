import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  ScrollView,
  KeyboardAvoidingView,
  TouchableOpacity
} from 'react-native';
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import AsyncStorage from '@react-native-community/async-storage';

import api from '../../../services/api';
import Header from '../../../components/Header';

import styles from './styles';

export default function MeusAnuncios() {

  useFocusEffect(() => {
    api.pos(`/usuario?email=${email}&password=${password}`)
  }, [])

  return (
    <View style={styles.container}>
      <Header title='Meus Anúncios' />
      <Text>Meus Anuncios</Text>
    </View>
  )
}