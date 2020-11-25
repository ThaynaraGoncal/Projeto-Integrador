import { StyleSheet } from 'react-native';
import * as color from '../../../Colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  containerDados: {
    backgroundColor: color.INPUT_LAVEL,
    flexDirection: 'row',
    height: 100,
  },

  dadosTitulo: {
    fontFamily: 'Nunito_700Bold',
    color: color.AZUL_CIANETO,
    fontSize: 18,
    fontWeight: 'bold',
  },

  dados: {
    fontFamily: 'Nunito_600SemiBold',
    color: color.CINZA_TITULO,
    fontSize: 16,
  },
  containerInputs: {
    marginTop: 20,
  },

  labelInput: {
    fontSize: 16,
    color: color.AMARELO,
  },
});

export default styles;