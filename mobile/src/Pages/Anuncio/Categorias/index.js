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

function Anuncio() {
  const { navigate, goBack } = useNavigation();

  return (
    <Container title="Escolha uma categoria">
      <Text>Festa</Text>
    </Container>
  );
}

export default Anuncio;