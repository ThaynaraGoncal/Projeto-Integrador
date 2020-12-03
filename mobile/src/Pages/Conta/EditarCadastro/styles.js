import { StyleSheet } from 'react-native';
import * as color from '../../../Colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: 50
  },

  box: {
    padding: 10,
    marginBottom: 50
  },

  input: {
    width: '90%',
    height: 50,
    backgroundColor: '#fff',
    borderColor: '#d3e2e6',
    borderWidth: 1.4,
    borderRadius: 10,
    borderRadius: 8,
    justifyContent: 'center',
    marginLeft: 15,
    padding: 10,
    color: '#5E565A',
    fontSize: 18,
  },

  labelInput: {
    marginTop: 5,
    fontSize: 20,
    color: color.CINZA_LABEL,
    fontFamily: color.FONT_NUNITO_600,
    marginLeft: 15,
  },
});

export default styles;