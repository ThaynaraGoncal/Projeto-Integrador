import { StyleSheet } from 'react-native';
import * as color from '../../../Colors';

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
  
    categoriaButton: {
      width: '100%',
      height: 50,
      backgroundColor: '#fff',
      borderRadius: 5,
      alignItems: 'center',
      justifyContent: 'space-between',
      flexDirection: 'row',
      padding: 10,
      marginBottom: 10,
    },
  
    textButton: {
      fontSize: 24,
      marginLeft: 20
    }
  });

  export default styles;