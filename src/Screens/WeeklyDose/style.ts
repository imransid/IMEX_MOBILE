import { StyleSheet } from 'react-native';
import { moderateScale, scale, verticalScale } from 'react-native-size-matters';

import { colors } from '../../theme/colors';

const styles = StyleSheet.create({
  buttonContainer: {
    alignItems: 'center',
    flex: 1
  },
  buttonPosition: {
    bottom: verticalScale(18),
    position: 'absolute'
  },
  chip: {
    backgroundColor: colors.textInput,
    borderRadius: scale(6),
    height: verticalScale(35),
    justifyContent: 'center',
    marginTop: verticalScale(12),
    width: scale(330)
  },
  chipContentProperties: {
    alignItems: 'center',
    flexDirection: 'row',
    marginLeft: scale(20)
  },
  chipPosition: {
    alignItems: 'center'
  },
  chipProperties: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  chipText: {
    alignSelf: 'center',
    color: colors.mainText,
    marginLeft: scale(10)
  },
  container: {
    backgroundColor: colors.white,
    flex: 1
  },
  dayPickerPosition: {
    alignItems: 'center'
  },
  headingPosition: {
    left: scale(10),
    marginTop: verticalScale(25)
  },
  headingText: {
    color: colors.header,
    fontSize: moderateScale(18),
    fontWeight: '600'
  },
  imagePosition: {
    alignItems: 'center',
    top: verticalScale(10)
  },
  progressBarPosition: {
    borderWidth: scale(0),
    marginTop: verticalScale(0.1)
  },
  selectButton: {
    alignItems: 'center',
    backgroundColor: colors.selectButtonBg,
    borderRadius: scale(6),
    height: verticalScale(27),
    justifyContent: 'center',
    position: 'relative',
    right: scale(20),
    width: scale(74)
  },
  selectButtonText: {
    color: colors.buttonBg
  },
  selectedDaysList: {
    maxHeight: '15%'
  },
  selectedDaysText: {
    color: colors.buttonBg,
    fontSize: moderateScale(14),
    fontWeight: '400',
    marginLeft: scale(10),
    marginTop: verticalScale(5)
  },
  timeIntervalHeader: {
    color: colors.typedText,
    fontSize: moderateScale(16),
    fontWeight: '500',
    left: scale(10)
  },
  weekDayPicker: {
    backgroundColor: colors.textInput,
    borderRadius: scale(6),
    height: verticalScale(42),
    width: scale(330)
  },
  weekDayText: {
    fontSize: moderateScale(12),
    fontWeight: '500'
  },
  weekDaysHeader: {
    color: colors.typedText,
    fontSize: moderateScale(16),
    fontWeight: '500',
    left: scale(5)
  },
  weekDaysHeaderPosition: {
    left: scale(5),
    marginTop: verticalScale(25)
  }
});

export default styles;
