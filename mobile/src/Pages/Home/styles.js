import { StyleSheet } from 'react-native';
import * as color from '../../Colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'blue'
  },

  view: {
    height: 200,
    backgroundColor: color.INPUT_LAVEL,
    borderRadius: 5,
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },

  info: {
    fontFamily: 'Nunito_800ExtraBold',
    fontSize: 30,
    color: color.CINZA_TITULO
  },

  headerHome: {
    paddingBottom: 10,
    width: '100%',
    height: 80,
    flexDirection: 'row',
    backgroundColor: color.AZUL_CIANETO,
    alignItems: 'flex-end',
    paddingHorizontal: 5
  },

  viewButtonsFiltro: {
    flex: 1,
    width: '100%',
    paddingVertical: 5,
  },

  titleHeader: {
    fontFamily: 'Nunito_600SemiBold',
    color: color.INPUT_LAVEL,
    fontSize: 22,
    marginRight: 10,
  },

  viewInput: {
    width: 270,
    height: 40,
    backgroundColor: '#fff',
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 5,
    marginRight: 5,
  },

  viewOrdenar: {
    height: 35,
    backgroundColor: "white",
    alignItems: "flex-end",
    paddingRight: 15,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5
  },

  buttonOrdenacao: {
    height: 40,
    width: '40%',
    backgroundColor: '#fff',
    borderRadius: 5,
    marginRight: 5,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row'
  },

  viewButtonsOrdena: {
    flexDirection: 'row',
    padding: 5,
  },

  seta: {
    fontSize: 30,
    color: color.AMARELO,
    fontWeight: 'bold'
  },

  textButtonOrdenacao: {
    fontSize: 25,
    color: color.AMARELO
  },

  button: {
    height: 40,
    width: 40,
    backgroundColor: '#fff',
    borderRadius: 5,
    marginRight: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },

  textInput: {
    flex: 1,
    width: 100,
    height: 40,
    fontFamily: 'Nunito_600SemiBold',
    fontSize: 18,
    color: color.CINZA_TITULO
  },

  openButton: {
    // width: 100,
    // padding: 10,
    // elevation: 2
  },

  textStyle: {
    color: color.CINZA_TITULO,
    fontFamily: 'Nunito_600SemiBold',
    textAlign: "center",
    fontSize: 20
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  }

});

export default styles;
