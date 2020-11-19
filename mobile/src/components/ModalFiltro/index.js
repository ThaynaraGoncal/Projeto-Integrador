import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TextInput, Modal, TouchableHighlight } from 'react-native';
import { RectButton, BorderlessButton, TouchableOpacity } from 'react-native-gesture-handler';
import { AntDesign, Feather, MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import styles from './styles';
import Header from '../Header';

export default function ModalFiltro({ visible, setModalVisible }) {

  const { navigate } = useNavigation();

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={() => {
        Alert.alert("Modal has been closed.");
      }}
    >
      <View style={styles.centeredView}>
        <View style={styles.header}>
          <TouchableOpacity>
            <Text style={styles.textStyle}>Limpar</Text>
          </TouchableOpacity>
          <Text style={styles.titleHeader}>Filtros</Text>
          <BorderlessButton style={styles.button}
            onPress={() => setModalVisible(!visible)}
          >
            <Feather name="x" size={28} color="#ff669d" />
          </BorderlessButton>
        </View>

        <View style={styles.container}>
          <Text>Categorias</Text>
          <RectButton style={styles.buttonCategoria}
            onPress={() => {
              navigate('Categoria');
              setModalVisible(!visible)
            }}
          //value={categoria}
          //onChangeText={setCategoria}
          >
            <Text style={styles.textButton}>Categorias</Text>
            <AntDesign name="arrowright" size={24} color="#c1bccc" />
          </RectButton>
        </View>

        <View style={styles.modalView}>
          <Text style={styles.modalText}>Hello World!</Text>

          <TouchableHighlight
            style={{ ...styles.openButton, backgroundColor: "#2196F3" }}
            onPress={() => {
              setModalVisible(!visible);
            }}
          >
            <Text style={styles.textStyle}>Hide Modal</Text>
          </TouchableHighlight>
        </View>
      </View>
    </Modal>
  );
}