import { StyleSheet } from 'react-native';
import { moderateScale, scale, verticalScale } from 'react-native-size-matters';

import { colors } from '../../theme/colors';

const styles = StyleSheet.create({
  addMedicineButton: {
    backgroundColor: colors.buttonBg,
    borderRadius: scale(16),
    height: verticalScale(42),
    width: scale(162)
  },
  addMedicineButtonPosition: {
    marginLeft: scale(165),
    marginTop: verticalScale(90)
  },
  addMedicineButtonProperties: {
    flexDirection: 'row',
    gap: scale(10),
    justifyContent: 'center',
    marginTop: verticalScale(12)
  },
  addMedicineText: {
    color: colors.white,
    fontSize: moderateScale(15),
    fontWeight: '800'
  },
  calendarContainer: {
    alignItems: 'center'
  }
});

export default styles;
