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
    fontSize: 38,
    marginTop: 28,
    marginBottom: 10,
    fontWeight: 'bold'
  },
  containerInputs: {
    marginTop: 20,
  },

  labelInput: {
    marginTop: 5,
    fontSize: 16,
    color: color.AMARELO,
  },
  textArea: {
    width: '100%',
    height: 100,
    borderRadius: 12,
    backgroundColor: '#fff',
  }
});

export default styles;