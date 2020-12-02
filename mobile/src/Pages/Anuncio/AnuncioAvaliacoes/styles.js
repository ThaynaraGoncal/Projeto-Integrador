import { StyleSheet } from 'react-native';
import * as color from '../../../Colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  viewAvaliacoes: {
    marginVertical: 20,
    marginHorizontal: 15,
    backgroundColor: "#fff",
    borderRadius: 5,
    padding: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5
  },

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  line: {
    backgroundColor: color.INPUT_BORDER_LABEL,
    height: 1.5,
    marginTop: 5,
    marginBottom: 10,
  },

  usuario: {
    fontFamily: 'Nunito_700Bold',
    fontSize: 18,
    color: color.AZUL_CIANETO,
  },

  titulo: {
    fontFamily: 'Nunito_700Bold',
    fontSize: 16,
    color: color.CINZA_TITULO,
    marginBottom: 5,
  },

  texto: {
    fontFamily: 'Nunito_600SemiBold',
    fontSize: 15,
    color: '#3A3E3B',
  }





  // title: {
  //   fontFamily: 'Nunito_800ExtraBold',
  //   fontSize: 18,
  //   color: color.CINZA_TITULO,
  //   marginVertical: 5,
  // },

  // text: {
  //   fontFamily: 'Nunito_700Bold',
  //   fontSize: 16,
  //   color: color.CINZA_TITULO,
  //   marginTop: 15,
  //   marginBottom: 5,
  // },

  // anuncio: {
  //   fontFamily: 'Nunito_700Bold',
  //   fontSize: 18,
  //   color: color.CINZA_TITULO,
  //   marginVertical: 10,
  // },

  // viewText: {
  //   flexDirection: 'row',
  //   justifyContent: 'space-between'
  // },

  // input: {
  //   height: 40,
  //   backgroundColor: '#fff',
  //   borderColor: '#d3e2e6',
  //   borderWidth: 1.4,
  //   borderRadius: 8,
  //   padding: 10,
  // },

  // viewButtons: {
  //   width: '100%',
  //   flexDirection: 'row',
  //   justifyContent: 'space-around',
  // },

  // buttonAvaliacao: {
  //   width: '40%',
  //   height: 50,
  //   borderRadius: 10,
  //   borderWidth: 2.5,
  //   borderColor: color.AZUL_CIANETO,
  //   justifyContent: 'center',
  //   alignItems: 'center',
  //   marginVertical: 20,
  // },

  // buttonAvaliado: {
  //   width: '40%',
  //   height: 50,
  //   borderRadius: 10,
  //   borderWidth: 2.5,
  //   backgroundColor: color.AZUL_CIANETO,
  //   borderColor: '#fff',
  //   justifyContent: 'center',
  //   alignItems: 'center',
  //   marginVertical: 20,
  // },

  // button: {
  //   height: 50,
  //   backgroundColor: color.AZUL_CIANETO,
  //   borderRadius: 8,
  //   flexDirection: 'row',
  //   justifyContent: 'center',
  //   alignItems: 'center',
  //   margin: 10,
  //   marginTop: 20,
  // },

  // textButton: {
  //   fontFamily: 'Nunito_800ExtraBold',
  //   fontSize: 24,
  //   color: '#fff',
  // },

  // textareaContainer: {
  //   width: '100%',
  //   height: 170,
  //   padding: 5,
  //   backgroundColor: '#fff',
  //   borderColor: '#d3e2e6',
  //   borderWidth: 1.4,
  //   borderRadius: 8,
  // },
  // textarea: {
  //   textAlignVertical: 'top',  // hack android
  //   height: 170,
  //   fontSize: 14,
  //   color: '#333',
  // },
});

export default styles;
