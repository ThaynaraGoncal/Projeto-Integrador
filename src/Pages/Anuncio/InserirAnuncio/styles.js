import { StyleSheet } from 'react-native';
import * as color from '../../../Colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.PRETO_BACKGROUND,
    paddingBottom: 50
  },

  box: {
    padding: 10,
    marginBottom: 10
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
  },

  button: {
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
    color: '#c1bccc',
  },

  ViewImages: {
    flexDirection: 'row',
  },

  uploadImage: {
    width: 150,
    height: 150,
    borderRadius: 20,
    marginBottom: 32,
    marginRight: 8
  },

  imagesInput: {
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    borderStyle: 'dashed',
    borderColor: color.AMARELO,
    borderWidth: 1.4,
    borderRadius: 20,
    height: 150,
    width: 150,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 32,
  },
});

export default styles;