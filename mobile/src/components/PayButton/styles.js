import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  button: {
    width: 60,
    height: 60,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#15c3d6'
  },

  buttonOff: {
    width: 60,
    height: 60,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },

  label: {
    fontSize: 12,
    color: '#fff',
    fontWeight: 'bold'
  },

  labelOff: {
    fontSize: 12,
    color: '#15c3d6',
    fontWeight: 'bold'
  }

});

export default styles;