import React, { createContext, useEffect, useState } from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import api from '../services/api';

const AuthContext = createContext();

export const ContextAuth = ({ children }) => {
  const [logado, setLogado] = useState(false);
  const [user, setUser] = useState({});

  const login = async (email, password) => {
    console.log('Email ', email)
    console.log('password ', password)

    const getApi = (email, password) => {
      api.get(`/usuario?email=${email}&password=${password}`).then((res) => {
        console.log('data', res.data);

        if (res.data) {
          console.log('setItem LocalStorage')
          AsyncStorage.setItem("user", JSON.stringify(res.data.user.email));
          AsyncStorage.setItem("name", JSON.stringify(res.data.user.email));
          setLogado(true);
          setUser(res.data);
        }
      }).catch((error) => {
        console.log(error);
      });

    }

    if (email && password) {
      const userStorage = await AsyncStorage.getItem("user");
      console.log('userStorage', userStorage)

      if (userStorage) {
        console.log('existe userStorage')
        if (userStorage == email) {
          console.log('LocalStorage')
          setUser(JSON.parse(userStorage));
          return user;
        }
        getApi(email, password);
        return user;
      }
      getApi(email, password);
    }


  }

  return (
    <AuthContext.Provider value={{ user, login }}>
      {children}
    </AuthContext.Provider>
  )

}

export default AuthContext;