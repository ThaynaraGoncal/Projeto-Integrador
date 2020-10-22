import React from "react";
import { View, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";

import Button from "../../components/button";
import styles from "./styles";

function Options() {
  const { navigate } = useNavigation();

  function handleTelaCadastro() {
    navigate("Cadastro");
  }

  function handleCategorias() {
    navigate("Categoria");
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Menu de Opções</Text>
      <Button titleButton="Categorias" onPress={handleCategorias}></Button>
    </View>
  );
}

export default Options;
