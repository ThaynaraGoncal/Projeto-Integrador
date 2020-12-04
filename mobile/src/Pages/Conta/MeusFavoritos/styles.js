import { StyleSheet } from 'react-native';
import * as color from '../../../Colors';

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
});

export default styles;