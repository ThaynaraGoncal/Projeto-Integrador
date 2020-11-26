import { StatusBar } from 'expo-status-bar';
import React from "react";

import { useFonts } from 'expo-font';
import { Nunito_600SemiBold, Nunito_700Bold, Nunito_800ExtraBold } from '@expo-google-fonts/nunito';

import { ContextAuth } from './src/contexts/AuthContext';

import Navigation from "./src/Routes/Navigation";
import NavigationBottom from './src/Routes/NavigationBottom';

export default function Main() {
  const [fontsLoaded] = useFonts({
    Nunito_600SemiBold,
    Nunito_700Bold,
    Nunito_800ExtraBold
  })

  if (!fontsLoaded) {
    return null;
  }

  return (
    <ContextAuth>
      <NavigationBottom />
      <StatusBar style="light" />
    </ContextAuth>
  );
}
