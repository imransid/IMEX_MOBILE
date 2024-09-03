import { StyleSheet } from 'react-native';
import { moderateScale, scale, verticalScale } from 'react-native-size-matters';

import { colors } from '../../theme/colors';

const styles = StyleSheet.create({
  chooseFileBackground: {
    alignItems: 'center',
    borderColor: colors.selectButtonBg,
    borderRadius: scale(8),
    borderStyle: 'dashed',
    borderWidth: scale(3.34),
    height: verticalScale(200),
    justifyContent: 'center',
    width: scale(330)
  },
  chooseFileButton: {
    alignItems: 'center',
    backgroundColor: colors.buttonBg,
    borderRadius: scale(16),
    height: verticalScale(37),
    justifyContent: 'center',
    width: scale(162)
  },
  chooseFileButtonPosition: {
    alignItems: 'center',
    marginTop: verticalScale(10)
  },
  chooseFileHeaderText: {
    color: colors.header,
    fontSize: moderateScale(16),
    fontWeight: '500',
    marginTop: verticalScale(30)
  },
  chooseFileText: {
    color: colors.white,
    fontSize: moderateScale(16),
    fontWeight: '500'
  },
  container: {
    backgroundColor: colors.white,
    flex: 1
  },
  fileSelectionContentPosition: {
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
  mainText: {
    color: colors.typedText,
    fontSize: moderateScale(16),
    fontWeight: '500'
  },
  subHeadingPosition: {
    left: scale(10),
    marginTop: verticalScale(30)
  },
  subText: {
    color: colors.typedText,
    fontSize: moderateScale(16),
    fontWeight: '500',
    marginTop: verticalScale(10)
  }
});

export default styles;
