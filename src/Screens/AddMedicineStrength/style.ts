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
  unitItemsPosition: {
    marginTop: verticalScale(5)
  },
  unitItemsText: {
    color: colors.mainText,
    marginLeft: scale(20)
  },
  unitText: {
    color: colors.header,
    fontSize: moderateScale(14),
    fontWeight: '500'
  },
  unitTextPosition: {
    marginTop: verticalScale(25),
    right: scale(150)
  }
});

export default styles;
