import React, { useEffect, useState } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { useNavigation, useFocusEffect } from '@react-navigation/native';

import ContaHome from '../Pages/Conta';
import MinhaConta from '../Pages/Conta/MinhaConta';
import Cadastro from '../Pages/Conta/Cadastro';
import CadastroDetalhes from '../Pages/Conta/CadastroDetalhes';
import MeusAnuncios from '../Pages/Conta/MeusAnuncios';
import AnuncioDetalhesPrestador from '../Pages/Conta/MeusAnuncios/AnuncioDetalhesPrestador';
import EditarAnuncio from '../Pages/Conta/MeusAnuncios/EditarAnuncio';
import EditarCadastro from '../Pages/Conta/EditarCadastro';

import CategoriaAnuncio from '../Pages/Anuncio/Categorias';

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
      <Screen name="EditarCadastro" component={EditarCadastro} />
      <Screen name="AnuncioDetalhesPrestador" component={AnuncioDetalhesPrestador} />
      <Screen name="EditarAnuncio" component={EditarAnuncio} />
      <Screen name="CategoriaAnuncio" component={CategoriaAnuncio} />
    </Navigator>
  );
}

export default ContaStack;