import {StyleSheet} from 'react-native';
import { scale, moderateScale, verticalScale } from 'react-native-size-matters';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    gap: verticalScale(15),
  },
  inputText: {
    fontSize: moderateScale(16),
    fontWeight: '400',
    color: '#888888',
  },
  inputHeader: {
    fontSize: moderateScale(14),
    fontWeight: '500',
    color: '#212121',
    marginRight: scale(226),
    //marginBottom: -12,
  },
});

export default styles;