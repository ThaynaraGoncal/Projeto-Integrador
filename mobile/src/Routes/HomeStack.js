import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Home from '../Pages/Home';
import AnuncioDetalhes from '../Pages/Anuncio/AnuncioDetalhes';
import ModalFiltro from '../Pages/Home/Filtro';

const { Navigator, Screen } = createStackNavigator();

function CadastroStack() {
  return (
    <Navigator screenOptions={{ headerShown: false }} initialRouteName="Home">
      <Screen name="Home" component={Home} />
      <Screen name="AnuncioDetalhes" component={AnuncioDetalhes} />
      <Screen name="ModalFiltro" component={ModalFiltro} />
    </Navigator>
  );
}

export default CadastroStack;