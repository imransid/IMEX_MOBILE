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
  },
  chip: {
    backgroundColor: colors.textInput,
    borderRadius: scale(3),
    borderWidth: scale(0.15),
    height: verticalScale(55),
    justifyContent: 'center',
    marginTop: verticalScale(5),
    width: scale(330)
  },
  medicineDoseProperties: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  medicineNameText: {
    color: colors.buttonBg,
    fontSize: moderateScale(12),
    fontWeight: '500'
  },
  medicineDoseComponentPosition:{
    alignItems: 'center'
  },
  doseComponent: {
    gap: verticalScale(6)
  },
  doseDetailsPosition: {
    justifyContent: 'center', 
    marginRight: scale(30)
  },
  doseProperties: {
    flexDirection: 'row'
  },
  doseDatesPosition: {
    flexDirection: 'row', 
    gap: scale(5)
  },
  doseText: {
    color: colors.typedText,
    fontSize: moderateScale(12),
    fontWeight: '500'
  },
  doseTimePosition: {
    marginRight: scale(40)
  }
});

export default styles;
