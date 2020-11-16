import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Anuncio from '../Pages/Anuncio/InserirAnuncio';
import CategoriaAnuncio from '../Pages/Anuncio/Categorias';
import MeusAnuncios from '../Pages/MeusAnuncios';
import SubCategoria from '../Pages/Anuncio/SubCategorias';
import AnuncioDetalhes from '../Pages/Anuncio/AnuncioDetalhes';

const { Navigator, Screen } = createStackNavigator();

function AnuncioStack() {
  return (
    <Navigator screenOptions={{ headerShown: false }} initialRouteName="Anuncio">
      <Screen name="Anuncio" component={Anuncio} />
      <Screen name="MeusAnuncios" component={MeusAnuncios} />
      <Screen name="CategoriaAnuncio" component={CategoriaAnuncio} />
      <Screen name="SubCategoria" component={SubCategoria} />
    </Navigator>
  );
}

export default AnuncioStack;