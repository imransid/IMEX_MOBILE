import { StyleSheet } from 'react-native';
import { moderateScale, scale, verticalScale } from 'react-native-size-matters';

import { colors } from '../../theme/colors';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1
  },
  progressBarPosition: {
    borderWidth: scale(0),
    marginTop: verticalScale(0.1)
  },
  weekDayPicker: {
    backgroundColor: colors.textInput,
    borderRadius: scale(6),
    borderWidth: scale(0.17),
    height: verticalScale(42),
    width: scale(330)
  },
  weekDayText: {
    fontSize: moderateScale(14),
    fontWeight: '500'
  }
});

export default styles;
