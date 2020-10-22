import React from 'react';
import { TextInput } from 'react-native';

import styles from './styles';

function InputText() {
  return (
    <TextInput
      style={styles.input}
      placeholder="clique para digitar"
    />
  );
}

export default InputText;