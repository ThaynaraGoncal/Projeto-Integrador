import { useContext } from 'react';

import AnuncioContext from '../contexts/AnunciosContext';

const useAnuncio = () => {
  const contexto = useContext(AnuncioContext);
  return contexto;
}

export default useAnuncio;