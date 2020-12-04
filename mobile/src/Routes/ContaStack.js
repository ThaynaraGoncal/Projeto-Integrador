import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import ContaHome from '../Pages/Conta';
import MinhaConta from '../Pages/Conta/MinhaConta';
import CadastroDetalhes from '../Pages/Conta/CadastroDetalhes';
import MeusAnuncios from '../Pages/Conta/MeusAnuncios';
import MeusFavoritos from '../Pages/Conta/MeusFavoritos';
import AnuncioDetalhesPrestador from '../Pages/Conta/MeusAnuncios/AnuncioDetalhesPrestador';
import EditarAnuncio from '../Pages/Conta/MeusAnuncios/EditarAnuncio';
import EditarCadastro from '../Pages/Conta/EditarCadastro';

const { Navigator, Screen } = createStackNavigator();

function ContaStack() {

  return (
    <Navigator screenOptions={{ headerShown: false }}
      initialRouteName='MinhaConta'>
      <Screen name="MinhaConta" component={MinhaConta} />
      <Screen name="MeusAnuncios" component={MeusAnuncios} />
      <Screen name="MeusFavoritos" component={MeusFavoritos} />
      <Screen name="CadastroDetalhes" component={CadastroDetalhes} />
      <Screen name="EditarCadastro" component={EditarCadastro} />
      <Screen name="AnuncioDetalhesPrestador" component={AnuncioDetalhesPrestador} />
      <Screen name="EditarAnuncio" component={EditarAnuncio} />
    </Navigator>
  );
}

export default ContaStack;