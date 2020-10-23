import { StatusBar } from 'expo-status-bar';
import React from "react";

import { AppLoading } from 'expo';
import api from './src/services/api';

import Navigation from "./src/Routes/Navigation";

export default function Main() {

  return (
    <>
      <Navigation />
      <StatusBar style="light" />
    </>
  );
}
