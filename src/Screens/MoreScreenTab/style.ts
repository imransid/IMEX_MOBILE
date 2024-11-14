import { StyleSheet } from 'react-native';
import { moderateScale, scale, verticalScale } from 'react-native-size-matters';

import { colors } from '../../theme/colors';

const styles = StyleSheet.create({
  chip: {
    backgroundColor: colors.textInput,
    borderRadius: scale(6),
    height: verticalScale(55),
    justifyContent: 'center',
    marginTop: verticalScale(5),
    width: scale(330)
  },
  container: {
    backgroundColor: colors.white,
    flex: 1
  },
  doseComponent: {
    gap: verticalScale(2)
  },
  doseDatesPosition: {
    flexDirection: 'row',
    gap: scale(5)
  },
  doseDetailsPosition: {
    justifyContent: 'center',
    marginLeft: scale(20)
  },
  prescriptionDetailsPosition: {
    justifyContent: 'center',
    marginRight: scale(5)
  },
  prescriptionImageStyle: {
    height: '100%',
    width: '20%',
    marginLeft: scale(10)
  },
  headingPosition: {
    alignItems: 'center',
    top: verticalScale(10)
  },
  medicineDoseComponentPosition: {
    alignItems: 'center'
  },
  medicineDoseProperties: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  pillsLeft: {
    color: colors.buttonBg,
    fontFamily: 'WorkSansMedium',
    fontSize: moderateScale(13)
  },
  pillsLeftDetailsText: {
    color: colors.typedText,
    fontFamily: 'WorkSansMedium',
    fontSize: moderateScale(12)
  },
  pillsLeftPosition: {
    marginRight: scale(20)
  },
  pillsLeftPress: {
    alignItems: 'center',
    flexDirection: 'row',
    gap: scale(2)
  },
  refillsHeadingProperties: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    left: scale(10),
    marginTop: verticalScale(20)
  },
  refillsText: {
    color: colors.header,
    fontFamily: 'WorkSansMedium',
    fontSize: moderateScale(14)
  },
  viewAllPress: {
    alignItems: 'center',
    flexDirection: 'row',
    gap: scale(2),
    justifyContent: 'space-between',
    right: scale(20)
  },
  viewAllText: {
    color: colors.buttonBg,
    fontFamily: 'WorkSansMedium',
    fontSize: moderateScale(12)
  },
  moreSettingsListStyle: {
    flexDirection: 'column'
  },
  scrollContainerStyle: {
    paddingBottom: scale(15)
  }
});

export default styles;
