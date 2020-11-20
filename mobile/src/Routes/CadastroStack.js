import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import ContaHome from '../Pages/Conta';
import Cadastro from '../Pages/Cadastro';
import CadastroDetalhe from '../Pages/CadastroDetalhes';
import CadastroConcluido from '../Pages/CadastroConcluido';
import CadastroListar from '../Pages/CadastroListar';

const { Navigator, Screen } = createStackNavigator();

function CadastroStack() {
  return (
    <Navigator screenOptions={{ headerShown: false }} initialRouteName="ContaHome">
      <Screen name="ContaHome" component={ContaHome} />
      <Screen name="Cadastro" component={Cadastro} />
      <Screen name="CadastroDetalhes" component={CadastroDetalhe} />
      <Screen name="CadastroConcluido" component={CadastroConcluido} />
      <Screen name="CadastroListar" component={CadastroListar} />
    </Navigator>
  );
}

export default CadastroStack;