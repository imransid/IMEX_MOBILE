import { ScaledSheet } from 'react-native-size-matters';
import { Dimensions } from 'react-native';

var widthDevice = Dimensions.get('window').width;

const Styles = (height, width, color) =>
  ScaledSheet.create({
    tapButton: {
      height: `${height}@s`,
      width: parseInt(widthDevice) === width ? '100%' : `${width}@s`,
      backgroundColor: color,
      borderRadius: '5@s',
      justifyContent: 'center',
      alignItems: 'center',
    },
    tapButtonText: {
      fontSize: '15@s',
      // fontWeight: 'bold',
      // fontFamily: 'Roboto_Black',
    },
  });

export default Styles;
