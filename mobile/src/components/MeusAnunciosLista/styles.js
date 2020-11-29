import { StyleSheet } from 'react-native';
import * as color from '../../Colors';

const styles = StyleSheet.create({

  item: {
    backgroundColor: color.INPUT_LAVEL,
    marginVertical: 8,
    marginHorizontal: 10,
    borderRadius: 5,
    height: 150,
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: color.BUTTON_IMAGES,
    borderWidth: 0.5,
  },
  title: {
    fontSize: 16,
  },

  label: {
    fontFamily: 'Nunito_700Bold',
    fontSize: 24,
    color: color.CINZA_TITULO,
    fontWeight: 'bold'
  },

  containerItens: {
    flexDirection: 'row',
    alignItems: 'center',
    // padding: 10
  },

  containerImage: {
    height: 150,
    width: 170,
    backgroundColor: color.AMARELO
  },

  image: {
    width: 150,
    height: 150,
    borderBottomLeftRadius: 5,
    borderTopLeftRadius: 5
  },

  containerText: {
    alignItems: 'center',
    flex: 1,
    height: '100%',
    justifyContent: 'space-around',
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5
  }
});

export default styles;