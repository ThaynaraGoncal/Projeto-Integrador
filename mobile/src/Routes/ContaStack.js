import React, { useEffect, useState } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import AsyncStorage from '@react-native-community/async-storage';

import ContaHome from '../Pages/Conta';
import MinhaConta from '../Pages/Conta/MinhaConta';
import Cadastro from '../Pages/Conta/Cadastro';

import { ContextAuth } from '../contexts/AuthContext';

const { Navigator, Screen } = createStackNavigator();

function CadastroStack() {
  // const [user, setUser] = useState({});

  // useEffect(() => {
  //   async function loadStorage() {
  //     const storageUser = await AsyncStorage.getItem('@RSFest:user');
  //     console.log('storageUser', storageUser)
  //     setUser(JSON.parse(storageUser))
  //   }

  //   loadStorage();
  // });

  return (
    <ContextAuth>
      <Navigator screenOptions={{ headerShown: false }}
        initialRouteName='ContaHome'>
        <Screen name="ContaHome" component={ContaHome} />
        <Screen name="MinhaConta" component={MinhaConta} />
        <Screen name="Cadastro" component={Cadastro} />
      </Navigator>
    </ContextAuth>
  );
}

export default CadastroStack;