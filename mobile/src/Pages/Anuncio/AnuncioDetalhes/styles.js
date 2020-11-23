import { StyleSheet } from 'react-native';
import * as color from '../../../Colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  content: {
    padding: 5,
  },

  viewImages: {
    flex: 1,
    marginHorizontal: 10,
    marginTop: 5
  },

  image: {
    width: 300,
    height: 300,
    borderRadius: 5,
    marginRight: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    //borderColor: color.BUTTON_IMAGES,
    //borderWidth: 1,
  },

  titulo: {
    fontFamily: 'Nunito_800ExtraBold',
    fontSize: 32,
    color: color.CINZA_TITULO,
    marginTop: 10,
    marginLeft: 10,
  },

  labelValor: {
    fontFamily: 'Nunito_800ExtraBold',
    fontSize: 26,
    color: color.AZUL_CIANETO,
    marginTop: 10,
    marginLeft: 10,
  },

  line:{
    borderColor: color.INPUT_BORDER_LABEL,
    borderWidth: 0.5,
    borderStyle: "solid",
    height: 0.5,
    marginTop: 40,
    marginHorizontal: 10,
  },

  labelTitulo: {
    fontFamily: 'Nunito_700Bold',
    fontSize: 24,
    color: color.CINZA_TITULO,
    marginTop: 10,
    marginLeft: 10,
  },

  labelText: {
    fontFamily: 'Nunito_600SemiBold',
    color: color.CINZA_LABEL,
    fontSize: 20,
    marginLeft: 10,
    marginTop: 10
  },

  viewInfo: {
    height: 50,
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 10,
  },

  tituloCategoria: {
    fontFamily: 'Nunito_700Bold',
    fontSize: 18,
    color: color.CINZA_LABEL
  },

  labelCategoria: {
    fontFamily: 'Nunito_700Bold',
    fontSize: 16,
    color: color.CINZA_LABEL,
    marginRight: 40,
  },

  viewDescricao: {
    height: 100,
    backgroundColor: '#fff',
    borderColor: '#d3e2e6',
    borderWidth: 1.4,
    borderRadius: 10,
    borderRadius: 8,
    marginLeft: 10,
    marginRight: 10,
    paddingTop: 5,
  },

  viewButtons: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  button: {
    flex: 1,
    height: 70,
    margin: 10,
    backgroundColor: color.AZUL_CIANETO,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  }

});

export default styles;