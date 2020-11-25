import React, { useEffect } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { useNavigation, useFocusEffect } from '@react-navigation/native';

import ContaHome from '../Pages/Conta';
import MinhaConta from '../Pages/Conta/MinhaConta';
import Cadastro from '../Pages/Conta/Cadastro';

import { ContextAuth } from '../contexts/AuthContext';
import useAuth from '../hooks/useAuth';

const { Navigator, Screen } = createStackNavigator();

function CadastroStack() {
  const { logado } = useAuth();
  console.log('logado na stack', logado)

  const { navigate } = useNavigation();

  useEffect(() => {
    console.log('logado?', logado);
    if (!logado) {
      return navigate('ContaHome')
    }
  }, [])

  return (
    <ContextAuth>
      <Navigator screenOptions={{ headerShown: false }}
        initialRouteName={logado ? 'MinhaConta' : 'ContaHome'}>
        <Screen name="ContaHome" component={ContaHome} />
        <Screen name="MinhaConta" component={MinhaConta} />
        <Screen name="Cadastro" component={Cadastro} />
      </Navigator>
    </ContextAuth>
  );
}

export default CadastroStack;