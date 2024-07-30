import { StyleSheet } from 'react-native';
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  button: {
    backgroundColor: '#007AFF',
    alignItems: 'center',
    justifyContent: 'center',
    height: verticalScale(56),
    width: scale(315),
    borderRadius: scale(30)
  },
  buttonText: {
    fontSize: moderateScale(18),
    fontFamily: 'Work Sans',
    color: '#fff',
    fontWeight: '600'
  },
  buttonPosition: {
    position: 'absolute',
    bottom: verticalScale(18)
  }
});

export default styles;
