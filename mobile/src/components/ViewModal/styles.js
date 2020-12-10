import { StyleSheet } from 'react-native';
import * as color from '../../Colors';

const styles = StyleSheet.create({
  header: {
    height: 70,
    width: '100%',
    backgroundColor: color.AZUL_CIANETO,
    borderBottomWidth: 1,
    borderColor: '#fff',
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    paddingVertical: 5
  },

  titleHeader: {
    fontFamily: 'Nunito_800ExtraBold',
    color: color.INPUT_LAVEL,
    fontSize: 26,
    marginRight: 10,
  },

  centeredView: {
    flex: 1,
    //marginTop: 10,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    backgroundColor: color.AMARELO
  },

  buttonCategoria: {
    borderColor: color.AMARELO,
    height: 50,
    backgroundColor: '#fff',
    borderRadius: 8,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    marginTop: 5,
  },

  textButton: {
    fontFamily: 'Nunito_700Bold',
    color: '#c1bccc',
    fontSize: 24
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
    fontFamily: 'Nunito_700Bold',
    color: "white",
    fontSize: 20
    //textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  }

});

export default styles;
