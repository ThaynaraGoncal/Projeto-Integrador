import React, { useEffect, useState } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import { NavigationContainer } from '@react-navigation/native';
import AsyncStorage from '@react-native-community/async-storage';

import { ContextAuth } from '../contexts/AuthContext';
import useAuth from '../hooks/useAuth';

import TelaHome from '../Routes/TelaHome';
import Navigation from '../Routes/Navigation';
import Cadastro from '../Pages/Conta/Cadastro';
import CadastroDetalhes from '../Pages/Conta/CadastroDetalhes';

const { Navigator, Screen } = createStackNavigator();

function NavigationBottom() {
  return (
    <ContextAuth>
      <NavigationContainer>
        <Navigator screenOptions={{ headerShown: false }}>
          <Screen name="TelaHome" component={TelaHome} />
          <Screen name="Navigation" component={Navigation} />
          <Screen name="Cadastro" component={Cadastro} />
          <Screen name="CadastroDetalhes" component={CadastroDetalhes} />
        </Navigator>
      </NavigationContainer>
    </ContextAuth>
  );
}

export default NavigationBottom;