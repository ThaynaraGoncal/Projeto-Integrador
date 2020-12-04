import AsyncStorage from '@react-native-community/async-storage';

async function salvaAnuncioFavorito(anuncio) {
  const anuncios = await getAnunciosFavoritos();

  const condicao = anuncios.find((anuncios) => anuncios.id === anuncio.id);
  if (condicao) {
    // Removendo elemento já existende no Storage
    const newAnuncios = anuncios.filter(
      (anuncios) => anuncios.id !== anuncio.id
    );
    return await AsyncStorage.setItem(
      '@anuncio_favorito',
      JSON.stringify(newAnuncios)
    );
  }
  anuncios.push(anuncio);
  await AsyncStorage.setItem('@anuncio_favorito', JSON.stringify(anuncios));
}

async function getAnunciosFavoritos() {
  const anunciosFavoritos = await AsyncStorage.getItem('@anuncio_favorito');
  if (anunciosFavoritos) {
    return JSON.parse(anunciosFavoritos);
  }

  return [];
}

async function isFavorito(id) {
  const anuncios = await getAnunciosFavoritos();
  const condicao = anuncios.find((anuncios) => anuncios.id === id);
  if (condicao) {
    return true;
  }
  return false;
}

async function removeAnunciosFavoritos() {
  await AsyncStorage.removeItem('@anuncio_favorito');
}

export { salvaAnuncioFavorito, getAnunciosFavoritos, isFavorito };
