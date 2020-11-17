import { StatusBar } from 'expo-status-bar';
import React from "react";

import { useFonts } from 'expo-font';
import { Nunito_600SemiBold, Nunito_700Bold, Nunito_800ExtraBold } from '@expo-google-fonts/nunito';

import Navigation from "./src/Routes/Navigation";

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
    <>
      <Navigation />
      <StatusBar style="light" />
    </>
  );
}
