import { StyleSheet } from 'react-native';
import * as color from '../../Colors';

const styles = StyleSheet.create({
  button: {
    backgroundColor: color.AZUL_CIANETO,
    height: 50,
    borderRadius: 5,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
    marginTop: 20,
  },

  titleButton: {
    fontFamily: 'Nunito_800ExtraBold',
    fontSize: 22,
    fontWeight: 'bold',
    color: color.INPUT_LAVEL,
    padding: 12,
  }

});

export default styles;