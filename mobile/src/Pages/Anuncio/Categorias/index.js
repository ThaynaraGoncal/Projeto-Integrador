import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { RectButton } from 'react-native-gesture-handler';
import {
  Text,
  ScrollView,
  KeyboardAvoidingView,
  TextInput,
  Alert,
  View,
} from "react-native";

import Container from '../../../components/Container';
import styles from './styles';

function Anuncio() {
  const { navigate, goBack } = useNavigation();

  return (
    <View>

    </View>
  );
}

export default Anuncio;