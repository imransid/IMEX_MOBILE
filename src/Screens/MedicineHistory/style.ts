import { StyleSheet } from 'react-native';
import { moderateScale, scale, verticalScale } from 'react-native-size-matters';

import { colors } from '../../theme/colors';

const styles = StyleSheet.create({
  BackbuttonPosition: {
    alignItems: 'center',
    marginTop: verticalScale(15)
  },
  addMoreSettingsHeaderPosition: {
    bottom: verticalScale(40)
  },
  addMoresettingsContainer: {
    alignItems: 'center',
    marginTop: verticalScale(10)
  },
  checkMarkIconPosition: {
    position: 'absolute',
    right: scale(20)
  },
  chip: {
    backgroundColor: colors.textInput,
    borderRadius: scale(6),
    height: verticalScale(35),
    justifyContent: 'center',
    marginTop: verticalScale(5),
    width: scale(330)
  },
  chipContentProperties: {
    marginLeft: scale(20),
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginRight: scale(20)
  },
  chipPosition: {
    alignItems: 'center'
  },
  medicineNameText: {
    color: colors.header,
    fontFamily: 'WorkSansSemiBold',
    fontSize: moderateScale(16)
  },
  doseTimeText: {
    color: colors.header,
    fontFamily: 'WorkSansMedium',
    fontSize: moderateScale(16)
  },
  container: {
    backgroundColor: colors.white,
    flex: 1
  },
  headingPosition: {
    alignItems: 'center',
    top: verticalScale(10)
  },
  medicineHistoryHeading: {
    color: colors.header,
    fontFamily: 'WorkSansMedium',
    fontSize: moderateScale(16),
    marginTop: scale(30)
  },
  progressBarPosition: {
    borderWidth: scale(0)
  },
  scrollViewContainer: {
    paddingBottom: verticalScale(15)
  }
});

export default styles;
