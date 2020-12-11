import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import { ContextAuth } from '../contexts/AuthContext';

import TelaHome from '../Routes/TelaHome';
import Navigation from '../Routes/Navigation';
import Cadastro from '../Pages/Conta/Cadastro';
import CadastroDetalhes from '../Pages/Conta/CadastroDetalhes';
import EsqueciSenha from '../Pages/Conta/EsqueciSenha';

const { Navigator, Screen } = createStackNavigator();

function NavigationBottom() {
  return (
    <ContextAuth>
      <NavigationContainer>
        <Navigator screenOptions={{ headerShown: false }}>
          <Screen name="TelaHome" component={TelaHome} />
          <Screen name="EsqueciSenha" component={EsqueciSenha} />
          <Screen name="Navigation" component={Navigation} />
          <Screen name="Cadastro" component={Cadastro} />
          <Screen name="CadastroDetalhes" component={CadastroDetalhes} />
        </Navigator>
      </NavigationContainer>
    </ContextAuth>
  );
}

export default NavigationBottom;