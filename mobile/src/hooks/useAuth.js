import { useContext } from 'react';

import AuthContext from '../contexts/AuthContext';

const useAuth = () => {
  const contexto = useContext(AuthContext);
  return contexto;
}

export default useAuth;