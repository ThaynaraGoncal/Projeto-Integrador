import React, { useState, useEffect } from 'react';
import { useFocusEffect } from '@react-navigation/native'
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack';

import Home from '../Pages/Home';
import AnuncioDetalhes from '../Pages/Anuncio/AnuncioDetalhes';
import Filtro from '../Pages/Filtro';
import Categoria from '../Pages/Anuncio/Categorias';
import SubCategoria from '../Pages/Anuncio/SubCategorias';
import Comida from '../Pages/Anuncio/SubCategorias/Comida';
import Decoracao from '../Pages/Anuncio/SubCategorias/Decoracao';
import Musica from '../Pages/Anuncio/SubCategorias/Musica';
import Fotos from '../Pages/Anuncio/SubCategorias/Fotos';
import Lembrancas from '../Pages/Anuncio/SubCategorias/Lembrancas';
import Entretenimento from '../Pages/Anuncio/SubCategorias/Entretenimento';
import Convites from '../Pages/Anuncio/SubCategorias/Convites';
import Local from '../Pages/Anuncio/SubCategorias/Local';
import api from '../services/api';

import dataContext from '../contexts/Anuncios';

const { Navigator, Screen } = createStackNavigator();

function CadastroStack() {
  const [anuncio, setAnuncios] = useState([])

  let anuncioData = [];
  async function carregaAnuncios() {
    let { data } = await api.get(`/anuncios`);
    //console.log('anuncios contexto', data)
    anuncioData = data.anuncios;
    setTimeout(() => {

      setAnuncios(data.anuncios)
      //console.log('deu settimeout')
    }, 1000)
    //console.log('chamada anuncio', anuncio)
  }

  useEffect(() => {
    carregaAnuncios();
  }, [])

  return (
    <dataContext.Provider value={anuncio}>
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
    </dataContext.Provider>
  );
}

export default CadastroStack;