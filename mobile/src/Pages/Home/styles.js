import { StyleSheet } from 'react-native';
import * as color from '../../Colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-evenly',
    backgroundColor: color.PRETO_BACKGROUND,
  },

  ContainerLogo: {
    width: '100%',
    height: '50%',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 100
  },

  ContainerButton: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },

  title: {
    fontSize: 36,
    color: color.AMARELO,
    fontWeight: 'bold',
  },

});


export default styles;
