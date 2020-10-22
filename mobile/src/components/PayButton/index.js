import React from 'react'
import { Text } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

import styles from './styles';

function PayButton({ label, focused }) {
  return (
    <RectButton
      style={[
        styles.button,
        focused ? styles.buttonOff : {}
      ]}
    >
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