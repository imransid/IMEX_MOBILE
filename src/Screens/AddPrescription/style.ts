import { StyleSheet } from 'react-native';
import { moderateScale, scale, verticalScale } from 'react-native-size-matters';

import { colors } from '../../theme/colors';

const styles = StyleSheet.create({
  chooseFileButton: {
    alignItems: 'center',
    backgroundColor: colors.buttonBg,
    borderRadius: scale(16),
    height: verticalScale(37),
    justifyContent: 'center',
    width: verticalScale(162)
  },
  chooseFileButtonPosition: {
    alignItems: 'center',
    marginTop: verticalScale(25)
  },
  chooseFileText: {
    color: colors.secondaryButtonText,
    fontSize: moderateScale(16),
    fontWeight: '500'
  },
  defaultText: {
    alignItems: 'center',
    marginTop: verticalScale(30)
  },
  headingPosition: {
    alignItems: 'center',
    top: verticalScale(30)
  },
  imagePosition: {
    alignItems: 'center',
    top: verticalScale(30)
  },
  subHeadingPosition: {
    left: scale(10),
    marginTop: verticalScale(30)
  }
});

export default styles;
