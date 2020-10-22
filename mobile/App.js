import { StatusBar } from 'expo-status-bar';
import React from "react";

import Navigation from "./src/Routes/Navigation";

export default function Main() {
  return (
    <>
      <Navigation />
      <StatusBar style="light" />
    </>
  );
}
