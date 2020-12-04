import { StyleSheet } from 'react-native';
import * as color from '../../Colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
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

  headerCenter: {
    height: 80,
    backgroundColor: color.AZUL_CIANETO,
    borderBottomWidth: 1,
    borderColor: '#fff',
    flexDirection: 'row',
    alignItems: 'flex-end',
    paddingHorizontal: 5,
    paddingBottom: 10,
  },

  titleHeader: {
    fontFamily: 'Nunito_600SemiBold',
    color: color.INPUT_LAVEL,
    fontSize: 22,
    marginRight: 10,
  },

  viewInput: {
    flex: 1,
    height: 40,
    backgroundColor: '#fff',
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 5,
    paddingHorizontal: 5
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
    fontFamily: 'Nunito_600SemiBold',
    height: 30,
    fontSize: 18,
    color: color.CINZA_TITULO
  },

  centeredView: {
    flex: 1,
    marginTop: 30,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    backgroundColor: color.AMARELO
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5
  },
  openButton: {
    backgroundColor: "#F194FF",
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  }

});

export default styles;
