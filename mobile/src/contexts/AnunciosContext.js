import React, { createContext, useEffect, useState } from 'react';
import api from '../services/api';

const AnuncioContext = createContext();

export const ContextAnuncio = ({ children }) => {
  const [anuncios, setAnuncios] = useState([]);
  const [anunciosInicial, setAnunciosInicial] = useState([]);
  const [count, setCount] = useState(0);

  const getAnuncios = () => {
    api.get(`/anuncios`).then((res) => {
      setAnuncios(res.data);
      setAnunciosInicial(res.data)
    }).catch((error) => {
      console.log(error);
    });
  }

  useEffect(() => {
    getAnuncios();
  }, [])

  return (
    <AnuncioContext.Provider value={{ anuncios, setAnuncios, count, setCount, anunciosInicial }}>
      {children}
    </AnuncioContext.Provider>
  )

}

export default AnuncioContext;