import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Anuncio from '../Pages/Anuncio';
import MeusAnuncios from '../Pages/MeusAnuncios';

const { Navigator, Screen } = createStackNavigator();

function AnuncioStack() {
  return (
    <Navigator screenOptions={{ headerShown: false }} initialRouteName="Anuncio">
      <Screen name="Anuncio" component={Anuncio} />
      <Screen name="MeusAnuncios" component={MeusAnuncios} />
    </Navigator>
  );
}

export default AnuncioStack;