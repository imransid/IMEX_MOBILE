import { StyleSheet } from 'react-native';
import { moderateScale, scale, verticalScale } from 'react-native-size-matters';

import { colors } from '../../theme/colors';

const styles = StyleSheet.create({
  NextButtonPosition: {
    bottom: verticalScale(15)
  },
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center'
  },
  formsItemsPosition: {
    marginTop: verticalScale(5)
  },
  formsItemsText: {
    color: colors.mainText,
    marginLeft: scale(20)
  },
  formsPosition: {
    marginTop: verticalScale(55),
    right: scale(150)
  },
  formsText: {
    color: colors.header,
    fontSize: moderateScale(14),
    fontWeight: '500',
    left: scale(10)
  },
  headingPosition: {
    top: verticalScale(90)
  },
  imagePosition: {
    top: verticalScale(15)
  },
  inputHeader: {
    color: colors.header,
    fontSize: moderateScale(14),
    fontWeight: '500',
    marginRight: scale(226)
  },
  inputText: {
    color: colors.typedText,
    fontSize: moderateScale(16),
    fontWeight: '400'
  },
  progressBarPosition: {
    borderWidth: scale(0),
    marginTop: verticalScale(0.1)
  },
  skipText: {
    color: colors.buttonBg,
    fontSize: moderateScale(14),
    fontWeight: '400',
    textAlign: 'center'
  },
  skipTextPosition: {
    bottom: verticalScale(10)
  },
  textInputPosition: {
    marginTop: verticalScale(40)
  },
  unitItems: {
    backgroundColor: colors.textInput,
    borderRadius: scale(6),
    borderWidth: scale(0.15),
    height: verticalScale(33),
    justifyContent: 'center',
    marginTop: verticalScale(5),
    width: scale(330)
  },
  unitProperties: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginRight: scale(20)
  }
});

export default styles;
