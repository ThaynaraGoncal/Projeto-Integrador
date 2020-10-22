import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#131418',
    padding: 20,
  },
  title: {
    color: '#fcbf49',
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
    color: '#fcbf49',
  },
  textArea: {
    width: '100%',
    height: 100,
    borderRadius: 12,
    backgroundColor: '#fff',
  }
});

export default styles;