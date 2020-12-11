import { StyleSheet } from 'react-native';
import * as color from '../../../Colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: 50
  },

  viewCenter: {
    flex: 1,
    marginTop: 5
  },

  titulo: {
    marginTop: 5,
    marginBottom: 5,
    fontSize: 24,
    color: color.CINZA_LABEL,
    fontFamily: 'Nunito_800ExtraBold',
    marginLeft: 15,
  },

  labelInput: {
    marginTop: 5,
    marginBottom: 5,
    fontSize: 16,
    color: color.CINZA_LABEL,
    fontFamily: 'Nunito_700Bold',
    marginLeft: 15,
  },

  input: {
    width: '88%',
    height: '50%',
    marginLeft: 10,
  },

  viewInput: {
    width: '95%',
    height: 50,
    backgroundColor: '#fff',
    borderColor: '#d3e2e6',
    borderWidth: 1.4,
    borderRadius: 10,
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10
  },

});


export default styles;