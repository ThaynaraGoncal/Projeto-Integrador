import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { RectButton, BorderlessButton } from 'react-native-gesture-handler';
import { AntDesign, Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import * as color from '../../Colors';

export default function Header({ title, buttonBack, route, buttonEsq }) {
  const { navigate } = useNavigation();

  const handleRoute = () => {
    navigate(route);
  }

  return (
    <View style={buttonBack ? styles.header : styles.headerCenter}>
      {buttonBack && (<BorderlessButton style={styles.button}
        onPress={handleRoute}
      >
        <AntDesign name="arrowleft" size={27} color={color.INPUT_LAVEL} />
      </BorderlessButton>)}
      <Text style={styles.titleHeader}>{title}</Text>
      {buttonEsq && (<BorderlessButton style={styles.button}
        onPress={handleRoute}
      >
        <Feather name="x" size={24} color="#ff669d" />
      </BorderlessButton>)}
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
    height: 70,
    width: '100%',
    backgroundColor: color.AZUL_CIANETO,
    borderBottomWidth: 1,
    borderColor: '#fff',
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'center',
    padding: 5,
    marginBottom: 15,
  },

  titleHeader: {
    fontFamily: 'Nunito_600SemiBold',
    color: color.INPUT_LAVEL,
    fontSize: 22,
    marginRight: 10,
  }
})
