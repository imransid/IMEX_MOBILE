import { StyleSheet } from 'react-native';
import { moderateScale, scale, verticalScale } from 'react-native-size-matters';

import { colors } from '../../theme/colors';

const styles = StyleSheet.create({
  chip: {
    backgroundColor: colors.textInput,
    borderRadius: scale(3),
    borderWidth: scale(0.15),
    height: verticalScale(55),
    justifyContent: 'center',
    marginTop: verticalScale(5),
    width: scale(330)
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
    fontSize: moderateScale(12),
    fontWeight: '500'
  },
  pillsLeftDetailsText: {
    color: colors.typedText,
    fontSize: moderateScale(12),
    fontWeight: '500'
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
    fontSize: moderateScale(14),
    fontWeight: '500'
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
    fontSize: moderateScale(12),
    fontWeight: '400'
  }
});

export default styles;
