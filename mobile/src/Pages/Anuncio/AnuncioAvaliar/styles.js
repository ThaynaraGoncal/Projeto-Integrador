import { StyleSheet } from 'react-native';
import * as color from '../../../Colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  title: {
    fontFamily: 'Nunito_800ExtraBold',
    fontSize: 20,
    color: color.CINZA_TITULO,
    marginTop: 5,
    marginBottom: 10,
    textAlign: 'center'
  },

  text: {
    fontFamily: 'Nunito_700Bold',
    fontSize: 16,
    color: color.CINZA_TITULO,
    marginTop: 15,
    marginBottom: 5,
  },

  viewAnuncio: {
    borderWidth: 1,
    borderColor: color.INPUT_BORDER_LABEL,
    borderRadius: 5,
  },

  headerAnuncio: {
    backgroundColor: color.INPUT_BORDER_LABEL,
    height: 30,
    marginBottom: 5,
    alignItems: 'center',
    justifyContent: 'center'
  },

  anuncio: {
    fontFamily: 'Nunito_700Bold',
    fontSize: 18,
    color: color.CINZA_TITULO,
  },

  textAnuncio: {
    fontFamily: 'Nunito_700Bold',
    fontSize: 18,
    color: color.CINZA_TITULO,
  },

  line: {
    backgroundColor: color.INPUT_BORDER_LABEL,
    height: 1.5,
    marginTop: 5,
    marginBottom: 10,
  },

  viewText: {
    flexDirection: 'row',
    justifyContent: 'space-around'
  },

  input: {
    height: 40,
    backgroundColor: '#fff',
    borderColor: '#d3e2e6',
    borderWidth: 1.4,
    borderRadius: 8,
    padding: 10,
  },

  viewButtons: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },

  buttonAvaliacao: {
    width: '40%',
    height: 50,
    borderRadius: 10,
    borderWidth: 2.5,
    borderColor: color.AZUL_CIANETO,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 20,
  },

  buttonAvaliado: {
    width: '40%',
    height: 50,
    borderRadius: 10,
    borderWidth: 2.5,
    backgroundColor: color.AZUL_CIANETO,
    borderColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 20,
  },

  button: {
    height: 50,
    backgroundColor: color.AZUL_CIANETO,
    borderRadius: 8,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
    marginTop: 20,
  },

  textButton: {
    fontFamily: 'Nunito_800ExtraBold',
    fontSize: 24,
    color: '#fff',
  },

  textareaContainer: {
    width: '100%',
    height: 170,
    padding: 5,
    backgroundColor: '#fff',
    borderColor: '#d3e2e6',
    borderWidth: 1.4,
    borderRadius: 8,
  },
  textarea: {
    textAlignVertical: 'top',  // hack android
    height: 170,
    fontSize: 14,
    color: '#333',
  },
});

export default styles;