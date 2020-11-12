import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import * as color from '../../Colors';


export default function Container({ children, title, buttonBack, route, show }) {
  const { navigate } = useNavigation();

  const handleRoute = () => {
    navigate(route);
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        {buttonBack && show && (<RectButton style={styles.button}
          onPress={handleRoute}
        >
          <AntDesign name="arrowleft" size={27} color="#fff" />
        </RectButton>)}


        <Text style={styles.titleHeader}>{title}</Text>
      </View>
      <View style={styles.content}>
        {children}
      </View>

    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.PRETO_BACKGROUND,
  },

  header: {
    height: 70,
    width: '100%',
    backgroundColor: color.AMARELO,
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-around',
    padding: 5,
    marginBottom: 15,
  },

  titleHeader: {
    color: '#fff',
    fontSize: 26,
    fontWeight: 'bold',
    marginRight: 10,
  },

  content: {
    padding: 5,
  }
})
