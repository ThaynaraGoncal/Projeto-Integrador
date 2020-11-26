import React, { useEffect, useState } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import { NavigationContainer } from '@react-navigation/native';
import AsyncStorage from '@react-native-community/async-storage';

import { ContextAuth } from '../contexts/AuthContext';
import useAuth from '../hooks/useAuth';

import TelaHome from '../Routes/TelaHome';
import Navigation from '../Routes/Navigation';

const { Navigator, Screen } = createStackNavigator();

function NavigationBottom() {
  const { user, logado, setLogado, setUser } = useAuth();

  console.log('usuairo no botom: ', logado)

  useEffect(() => {
    console.log('caiu no useEffect')
    AsyncStorage.getItem("Dadosuser").then((res) => {
      console.log('res do then', res)
      if (res) {
        setUser(JSON.parse(res));
        setLogado(true)
        //console.log('JSON.parse(res)', JSON.parse(res))
        return user;
      }
    }).catch((err) => {
      console.log(err)
    });
  }, []);

  return (
    <ContextAuth>
      <NavigationContainer>
        <Navigator screenOptions={{ headerShown: false }}
          initialRouteName={logado ? 'Navigation' : 'TelaHome'}>
          <Screen name="TelaHome" component={TelaHome} />
          <Screen name="Navigation" component={Navigation} />
        </Navigator>
      </NavigationContainer>
    </ContextAuth>
  );
}

export default NavigationBottom;