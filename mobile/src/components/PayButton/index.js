import React from 'react'
import { Text } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';

import styles from './styles';

function PayButton({ label, focused }) {
  return (
    <RectButton
      style={[
        styles.button,
        focused ? styles.buttonOff : {}
      ]}
    >
      <Feather name='edit' color={focused ? '#fcbf49' : '#fff'} size={20}/> 
      <Text
        style={[
          styles.label,
          focused ? styles.labelOff : {}
        ]}
      >{label}</Text>
    </RectButton>
  );
}

export default PayButton;