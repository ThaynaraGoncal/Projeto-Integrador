import React from 'react';
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack';

import Home from '../Pages/Home';
import AnuncioDetalhes from '../Pages/Anuncio/AnuncioDetalhes';
import AnuncioAvaliar from '../Pages/Anuncio/AnuncioAvaliar';
import AnuncioAvaliacoes from '../Pages/Anuncio/AnuncioAvaliacoes';
import Filtro from '../Pages/Filtro';
import Categoria from '../Pages/Anuncio/Categorias';
import Comida from '../Pages/Anuncio/SubCategorias/Comida';
import Decoracao from '../Pages/Anuncio/SubCategorias/Decoracao';
import Musica from '../Pages/Anuncio/SubCategorias/Musica';
import Fotos from '../Pages/Anuncio/SubCategorias/Fotos';
import Lembrancas from '../Pages/Anuncio/SubCategorias/Lembrancas';
import Entretenimento from '../Pages/Anuncio/SubCategorias/Entretenimento';
import Convites from '../Pages/Anuncio/SubCategorias/Convites';
import Local from '../Pages/Anuncio/SubCategorias/Local';

import { ContextAnuncio } from '../contexts/AnunciosContext';

const { Navigator, Screen } = createStackNavigator();

export default function HomeStack() {

  return (
    <ContextAnuncio>
      <Navigator
        screenOptions={{
          headerShown: false
        }}
        initialRouteName="Home">
        <Screen name="Home" component={Home} />
        <Screen name="AnuncioDetalhes" component={AnuncioDetalhes} />
        <Screen name="Filtro" component={Filtro}
          options={{ cardStyleInterpolator: CardStyleInterpolators.forVerticalIOS }}
        />
        <Screen name="AnuncioAvaliar" component={AnuncioAvaliar}
          options={{ cardStyleInterpolator: CardStyleInterpolators.forVerticalIOS }}
        />
        <Screen name="AnuncioAvaliacoes" component={AnuncioAvaliacoes} />
        <Screen name="Categoria" component={Categoria} />
        <Screen name="Comida" component={Comida} />
        <Screen name="Decoracao" component={Decoracao} />
        <Screen name="Musica" component={Musica} />
        <Screen name="Fotos" component={Fotos} />
        <Screen name="Lembrancas" component={Lembrancas} />
        <Screen name="Entretenimento" component={Entretenimento} />
        <Screen name="Convites" component={Convites} />
        <Screen name="Local" component={Local} />
      </Navigator>
    </ContextAnuncio>
  );
}