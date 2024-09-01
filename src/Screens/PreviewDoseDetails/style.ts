import { StyleSheet } from 'react-native';
import { moderateScale, scale, verticalScale } from 'react-native-size-matters';

import { colors } from '../../theme/colors';

const styles = StyleSheet.create({
  DonebuttonPosition: {
    alignItems: 'center',
    marginTop: verticalScale(38)
  },
  chip: {
    backgroundColor: colors.textInput,
    borderRadius: scale(2),
    height: verticalScale(35),
    justifyContent: 'center',
    marginTop: verticalScale(2),
    width: scale(330)
  },
  chipPosition: {
    alignItems: 'center',
    bottom: verticalScale(35)
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
  dayContentProperties: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: scale(20)
  },
  displayNameInput: {
    backgroundColor: colors.textInput,
    borderRadius: scale(2),
    color: colors.typedText,
    fontSize: moderateScale(13),
    fontWeight: '400',
    height: scale(35),
    width: scale(330)
  },
  doseDetailsPosition: {
    alignItems: 'center'
  },
  doseDetailsProperties: {
    gap: verticalScale(3)
  },
  historyButton: {
    backgroundColor: colors.textInput,
    borderRadius: scale(2),
    height: verticalScale(27),
    justifyContent: 'center',
    position: 'relative',
    right: scale(20),
    width: scale(101)
  },
  historyButtonProperties: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: scale(10),
    marginRight: scale(20)
  },
  imagePosition: {
    alignItems: 'center',
    top: verticalScale(20)
  },
  mainHeader: {
    alignItems: 'center',
    top: verticalScale(50)
  },
  notesInput: {
    backgroundColor: colors.textInput,
    borderRadius: scale(2),
    color: colors.typedText,
    fontSize: moderateScale(13),
    fontWeight: '400',
    height: scale(80),
    width: scale(330)
  },
  progressBarPosition: {
    borderWidth: scale(0)
  },
  rescheduleButton: {
    backgroundColor: colors.textInput,
    borderRadius: scale(2),
    height: verticalScale(27),
    justifyContent: 'center',
    position: 'relative',
    right: scale(20),
    width: scale(130)
  },
  rescheduleButtonProperties: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: scale(10),
    marginRight: scale(20)
  },
  secondaryButtonPosition: {
    flexDirection: 'row',
    gap: scale(30),
    justifyContent: 'space-between',
    marginRight: scale(25),
    marginTop: verticalScale(10)
  },
  secondayButtonText: {
    color: colors.header
  },
  subHeader: {
    alignItems: 'center'
  },
  timeAndQuantityProperties: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: scale(20),
    marginRight: scale(30)
  }
});

export default styles;
