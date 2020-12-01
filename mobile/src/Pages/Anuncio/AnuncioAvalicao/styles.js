import { StyleSheet } from 'react-native';
import * as color from '../../../Colors';

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    title: {
      fontFamily: 'Nunito_800ExtraBold',
      fontSize: 18,
      color: color.CINZA_TITULO,
      marginVertical: 10,
    },

    anuncio: {
      fontFamily: 'Nunito_700Bold',
      fontSize: 18,
      color: color.CINZA_TITULO,
      marginVertical: 10,
    },

    viewText: {
      flexDirection: 'row',
      justifyContent: 'space-between'
    },

    input: {
        width: '90%',
        height: 200,
        backgroundColor: '#fff',
        borderColor: '#d3e2e6',
        borderWidth: 1.4,
        borderRadius: 8,
      },

    button: {
      width: '90%',
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
      fontSize: 20,
      color: '#fff',
    }
});

export default styles;
