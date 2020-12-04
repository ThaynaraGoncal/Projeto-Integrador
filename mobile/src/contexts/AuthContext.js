import React, { createContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import api from '../services/api';

const AuthContext = createContext();

export const ContextAuth = ({ children }) => {
  const [logado, setLogado] = useState(false);
  const [user, setUser] = useState({});
  const [infoLogin, setInfoLogin] = useState('');

  useEffect(() => {
    AsyncStorage.getItem("Dadosuser").then((res) => {
      if (res) {
        setUser(JSON.parse(res));
        setLogado(true)
        return user;
      }
    }).catch((err) => {
      console.log(err)
    });
  }, []);

  const login = async (email, password) => {

    if (email && password) {
      const userStorage = await AsyncStorage.getItem("Dadosuser");

      if (userStorage) {
        setUser(JSON.parse(userStorage));
        setLogado(true);
        return user;
      }

      api.get(`/usuario?email=${email}&password=${password}`).then((res) => {

        if (res.data?.info) {
          setInfoLogin(res.data?.info);
          return res.data?.info;
        }

        if (res.data) {
          AsyncStorage.setItem("Dadosuser", JSON.stringify(res.data.user));
          setLogado(true);
          setUser(res.data);
        }
      }).catch((error) => {
        console.log(error);
      });
    }
  }

  return (
    <AuthContext.Provider value={{ user, setUser, logado, setLogado, login, infoLogin }}>
      {children}
    </AuthContext.Provider>
  )

}

export default AuthContext;