import React, { useEffect, useState } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { useNavigation, useFocusEffect } from '@react-navigation/native';

import ContaHome from '../Pages/Conta';
import MinhaConta from '../Pages/Conta/MinhaConta';
import Cadastro from '../Pages/Conta/Cadastro';

const { Navigator, Screen } = createStackNavigator();

function ContaStack() {

  return (
    <Navigator screenOptions={{ headerShown: false }}
      initialRouteName='MinhaConta'>
      <Screen name="ContaHome" component={ContaHome} />
      <Screen name="MinhaConta" component={MinhaConta} />
      <Screen name="Cadastro" component={Cadastro} />
    </Navigator>
  );
}

export default ContaStack;