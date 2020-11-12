import { StyleSheet } from 'react-native';
import * as color from '../../Colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.PRETO_BACKGROUND,
    padding: 20,
  },
  title: {
    color: color.AMARELO,
    fontSize: 25,
    marginTop: 28,
    marginBottom: 20,
    fontWeight: 'bold'
  },
  containerInputs: {
    marginTop: 20,
  },

  labelInput: {
    fontSize: 16,
    color: '#fff',
  },
});

export default styles;