import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import ContaHome from '../Pages/Conta';
import Cadastro from '../Pages/Conta/Cadastro';

const { Navigator, Screen } = createStackNavigator();

function CadastroStack() {
  return (
    <Navigator screenOptions={{ headerShown: false }} initialRouteName="ContaHome">
      <Screen name="ContaHome" component={ContaHome} />
      <Screen name="Cadastro" component={Cadastro} />
    </Navigator>
  );
}

export default CadastroStack;