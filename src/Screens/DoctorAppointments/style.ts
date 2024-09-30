import { StyleSheet } from 'react-native';
import { moderateScale, scale, verticalScale } from 'react-native-size-matters';

import { colors } from '../../theme/colors';

const styles = StyleSheet.create({
  NextbuttonPosition: {
    alignItems: 'center',
    marginTop: verticalScale(125)
  },
  chip: {
    backgroundColor: colors.textInput,
    borderRadius: scale(2),
    height: verticalScale(43),
    justifyContent: 'center',
    marginTop: verticalScale(5),
    width: scale(330)
  },
  chipContentProperties: {
    alignItems: 'center',
    flexDirection: 'row',
    gap: scale(8),
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
  container: {
    backgroundColor: colors.white
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
    marginRight: scale(15)
  },
  nameInput: {
    borderRadius: scale(2),
    borderWidth: scale(0.15),
    color: colors.header,
    fontSize: moderateScale(16),
    fontWeight: '400',
    height: scale(38),
    justifyContent: 'center',
    textAlign: 'center',
    width: scale(150)
  },
  selectButton: {
    alignItems: 'center',
    backgroundColor: colors.selectButtonBg,
    borderRadius: scale(6),
    height: verticalScale(30),
    justifyContent: 'center',
    position: 'relative',
    right: scale(20),
    width: scale(145)
  },
  selectButtonText: {
    color: colors.buttonBg
  },
  subHeadingPosition: {
    left: scale(10),
    marginTop: verticalScale(30)
  }
});

export default styles;
