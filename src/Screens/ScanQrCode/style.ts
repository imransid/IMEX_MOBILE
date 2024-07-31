import { StyleSheet } from 'react-native';
import { moderateScale, scale, verticalScale } from 'react-native-size-matters';

import { Colors } from '../../constants/colors';

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    backgroundColor: Colors.primary,
    borderRadius: scale(30),
    height: verticalScale(56),
    justifyContent: 'center',
    width: scale(315)
  },
  buttonPosition: {
    bottom: verticalScale(18),
    position: 'absolute'
  },
  buttonText: {
    color: Colors.white,
    fontFamily: 'Work Sans',
    fontSize: moderateScale(18),
    fontWeight: '600'
  },
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center'
  }
});

export default styles;
