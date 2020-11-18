import React from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import { RectButton, BorderlessButton } from 'react-native-gesture-handler';
import { AntDesign, Feather, MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import * as color from '../../Colors';

export default function HeaderHome() {
  const { navigate } = useNavigation();

  const handleRoute = () => {
    navigate(route);
  }

  return (
    <View style={styles.headerCenter}>
      <TextInput style={styles.input} />
      <BorderlessButton style={styles.button}>
        <MaterialIcons name='search' size={25} />
      </BorderlessButton>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    height: 70,
    width: '100%',
    backgroundColor: color.AZUL_CIANETO,
    borderBottomWidth: 1,
    borderColor: '#dde3f0',
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    padding: 10,
    marginBottom: 15,
    paddingRight: 10,
    paddingLeft: 10
  },

  headerCenter: {
    height: 80,
    backgroundColor: color.AZUL_CIANETO,
    borderBottomWidth: 1,
    borderColor: '#fff',
    flexDirection: 'row',
    alignItems: 'flex-end',
    paddingHorizontal: 5,
    paddingBottom: 10,
  },

  titleHeader: {
    fontFamily: 'Nunito_600SemiBold',
    color: color.INPUT_LAVEL,
    fontSize: 22,
    marginRight: 10,
  },

  input: {
    flex: 1,
    height: 40,
    backgroundColor: '#fff',
    borderRadius: 5,
    justifyContent: 'center',
    marginRight: 5,
    paddingHorizontal: 5
  },

  button: {
    height: 40,
    width: 40,
    backgroundColor: '#fff',
    borderRadius: 5,
    marginRight: 5,
    alignItems: 'center',
    justifyContent: 'center',
  }
})
