import { StyleSheet } from 'react-native';
import * as color from '../../../Colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
  },

  labelInput: {
    marginTop: 5,
    marginBottom: 5,
    fontSize: 20,
    color: color.CINZA_LABEL,
    fontFamily: color.FONT_NUNITO_600,
    marginLeft: 15,
  },

  infoApelido :{
    fontFamily: color.FONT_NUNITO_600,
    fontSize: 14,
    color: color.CINZA_TITULO,
    marginTop: 11,
    marginLeft: 10
  }
});

export default styles;