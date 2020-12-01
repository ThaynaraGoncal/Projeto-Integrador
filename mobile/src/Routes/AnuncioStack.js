import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Anuncio from '../Pages/Anuncio/InserirAnuncio';
import MinhaConta from '../Pages/Conta/MinhaConta';
import CategoriaAnuncio from '../Pages/Anuncio/Categorias';
import MeusAnuncios from '../Pages/Conta/MeusAnuncios';
import AnuncioAvaliacao from '../Pages/Anuncio/AnuncioAvalicao'
import SubCategoria from '../Pages/Anuncio/SubCategorias';
import Comida from '../Pages/Anuncio/SubCategorias/Comida';
import Decoracao from '../Pages/Anuncio/SubCategorias/Decoracao';
import Musica from '../Pages/Anuncio/SubCategorias/Musica';
import Fotos from '../Pages/Anuncio/SubCategorias/Fotos';
import Lembrancas from '../Pages/Anuncio/SubCategorias/Lembrancas';
import Entretenimento from '../Pages/Anuncio/SubCategorias/Entretenimento';
import Convites from '../Pages/Anuncio/SubCategorias/Convites';
import Local from '../Pages/Anuncio/SubCategorias/Local';


const { Navigator, Screen } = createStackNavigator();

function AnuncioStack() {
  return (
    <Navigator screenOptions={{ headerShown: false }} initialRouteName="Anuncio">
      <Screen name="Anuncio" component={Anuncio} />
      <Screen name="MinhaConta" component={MinhaConta} />
      <Screen name="MeusAnuncios" component={MeusAnuncios} />
      <Screen name="CategoriaAnuncio" component={CategoriaAnuncio} />
      <Screen name="AnuncioAvaliacao" component={AnuncioAvaliacao} />
      <Screen name="SubCategoria" component={SubCategoria} />
      <Screen name="Comida" component={Comida} />
      <Screen name="Decoracao" component={Decoracao} />
      <Screen name="Musica" component={Musica} />
      <Screen name="Fotos" component={Fotos} />
      <Screen name="Lembrancas" component={Lembrancas} />
      <Screen name="Entretenimento" component={Entretenimento} />
      <Screen name="Convites" component={Convites} />
      <Screen name="Local" component={Local} />
    </Navigator>
  );
}

export default AnuncioStack;