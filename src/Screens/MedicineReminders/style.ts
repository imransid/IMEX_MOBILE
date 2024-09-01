import { StyleSheet } from 'react-native';
import { moderateScale, scale, verticalScale } from 'react-native-size-matters';

import { colors } from '../../theme/colors';

const styles = StyleSheet.create({
  NextbuttonPosition: {
    alignItems: 'center',
    marginTop: verticalScale(235)
  },
  chip: {
    backgroundColor: colors.textInput,
    borderRadius: scale(2),
    borderWidth: scale(0.15),
    height: verticalScale(40),
    justifyContent: 'center',
    marginTop: verticalScale(5),
    width: scale(330)
  },
  chipContentProperties: {
    alignItems: 'center',
    flexDirection: 'row',
    marginLeft: 20
  },
  chipPosition: {
    alignItems: 'center',
    marginTop: verticalScale(10)
  },
  chipProperties: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  chipText: {
    alignSelf: 'center',
    color: colors.mainText
  },
  headingPosition: {
    alignItems: 'center',
    top: verticalScale(30)
  },
  imagePosition: {
    alignItems: 'center',
    top: verticalScale(30)
  },
  inputPosition: {
    flexDirection: 'row',
    gap: scale(10),
    marginLeft: scale(50)
  },
  medicineInput: {
    borderRadius: scale(2),
    borderWidth: scale(0.15),
    color: colors.typedText,
    fontSize: moderateScale(14),
    fontWeight: '400',
    height: scale(34),
    textAlign: 'center',
    width: scale(80)
  },
  medicineText: {
    alignSelf: 'center',
    color: colors.buttonBg,
    fontSize: moderateScale(14),
    fontWeight: '400'
  },
  subHeadingPosition: {
    left: scale(10),
    marginTop: verticalScale(30)
  }
});

export default styles;
