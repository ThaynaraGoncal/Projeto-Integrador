import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { RectButton, BorderlessButton } from 'react-native-gesture-handler';
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';


export default function Header({ title, buttonBack, route }) {
  const { navigate } = useNavigation();

  const handleRoute = () => {
    navigate(route);
  }

  return (
    <View style={buttonBack ? styles.header : styles.headerCenter}>
      {buttonBack && (<BorderlessButton style={styles.button}
        onPress={handleRoute}
      >
        <AntDesign name="arrowleft" size={27} color="#fff" />
      </BorderlessButton>)}


      <Text style={styles.titleHeader}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    height: 70,
    width: '100%',
    backgroundColor: '#fcbf49',
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    padding: 5,
    marginBottom: 15,
  },

  headerCenter: {
    height: 70,
    width: '100%',
    backgroundColor: '#fcbf49',
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'center',
    padding: 5,
    marginBottom: 15,
  },

  titleHeader: {
    color: '#fff',
    fontSize: 26,
    fontWeight: 'bold',
    marginRight: 10,
  }
})
