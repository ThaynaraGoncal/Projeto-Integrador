import { StyleSheet } from 'react-native';
import * as color from '../../../Colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  containerDados: {
    backgroundColor: color.INPUT_LAVEL,
    flexDirection: 'row',
    height: 130,
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

  containerButtons: {
    flex: 1,
    marginTop: 40,
  },

  button: {
    backgroundColor: '#fff',
    height: 50,
    justifyContent: 'center',
    padding: 10,
  },

  textButton: {
    fontFamily: 'Nunito_800ExtraBold',
    fontSize: 18,
    color: color.AZUL_CIANETO,
  },

  line: {
    borderColor: color.INPUT_BORDER_LABEL,
    borderWidth: 0.5,
    borderStyle: "solid",
    height: 0.5,
    marginHorizontal: 10,
  },
});

export default styles;