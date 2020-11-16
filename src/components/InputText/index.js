import React from 'react';
import { TextInput } from 'react-native';

import styles from './styles';

function InputText(props) {
  return (
    <TextInput
      style={styles.input}
      placeholder="clique para digitar"
      {...props}
    />
  );
}

export default InputText;