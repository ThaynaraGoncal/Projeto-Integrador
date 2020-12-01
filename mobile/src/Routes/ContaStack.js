import React, { useEffect, useState } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { useNavigation, useFocusEffect } from '@react-navigation/native';

import ContaHome from '../Pages/Conta';
import MinhaConta from '../Pages/Conta/MinhaConta';
import Cadastro from '../Pages/Conta/Cadastro';
import CadastroDetalhes from '../Pages/Conta/CadastroDetalhes';
import MeusAnuncios from '../Pages/Conta/MeusAnuncios';
import AnuncioDetalhesPrestador from '../Pages/Conta/MeusAnuncios/AnuncioDetalhesPrestador';

const { Navigator, Screen } = createStackNavigator();

function ContaStack() {

  return (
    <Navigator screenOptions={{ headerShown: false }}
      initialRouteName='MinhaConta'>
      <Screen name="MinhaConta" component={MinhaConta} />
      <Screen name="MeusAnuncios" component={MeusAnuncios} />
      <Screen name="ContaHome" component={ContaHome} />
      <Screen name="Cadastro" component={Cadastro} />
      <Screen name="CadastroDetalhes" component={CadastroDetalhes} />
      <Screen name="AnuncioDetalhesPrestador" component={AnuncioDetalhesPrestador} />
    </Navigator>
  );
}

export default ContaStack;