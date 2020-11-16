import React from 'react'
import { TextInputMask } from 'react-native-masked-text';

import styles from './styles';

function Input({ type, ...rest }) {
  return (
    <TextInputMask
      type={type}
      style={styles.input}
      placeholder="clique para digitar"
      placeholderTextColor="#c1bccc"
      {...rest}
    >

    </TextInputMask>
  )
}

export default Input;