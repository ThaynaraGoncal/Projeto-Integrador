import React from 'react';
import { Text } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

import styles from './styles';

function Button({ titleButton, ...Rest }) {
  return (
    <RectButton style={styles.button} {...Rest}>
      <Text style={styles.titleButton}>{titleButton}</Text>
    </RectButton>
  )
}

export default Button;