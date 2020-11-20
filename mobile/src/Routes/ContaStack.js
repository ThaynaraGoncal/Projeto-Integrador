import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import ContaHome from '../Pages/Conta';
import MinhaConta from '../Pages/Conta/MinhaConta';

const { Navigator, Screen } = createStackNavigator();

function CadastroStack() {
  return (
    <Navigator screenOptions={{ headerShown: false }} initialRouteName="ContaHome">
      <Screen name="ContaHome" component={ContaHome} />
      <Screen name="MinhaConta" component={MinhaConta} />
    </Navigator>
  );
}

export default CadastroStack;