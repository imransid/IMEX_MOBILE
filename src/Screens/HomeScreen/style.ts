import { StyleSheet } from 'react-native';
import { moderateScale, scale, verticalScale } from 'react-native-size-matters';

import { colors } from '../../theme/colors';

const styles = StyleSheet.create({
  addMedicineButton: {
    backgroundColor: colors.buttonBg,
    borderRadius: scale(30),
    height: verticalScale(42),
    width: scale(162)
  },
  addMedicineButtonPosition: {
    marginLeft: scale(175),
    bottom: scale(70),
    position: 'absolute'
    
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
    borderRadius: scale(6),
    height: verticalScale(56),
    justifyContent: 'center',
    marginTop: verticalScale(5),
    width: scale(330)
  },
  chipheadingPosition: {
    marginTop: verticalScale(25)
  },
  chipheadingText: {
    color: colors.header,
    fontFamily: 'WorkSansSemiBold',
    fontSize: moderateScale(16)
  },
  container: {
    backgroundColor: colors.white,
    flex: 1
  },
  doseComponent: {
    gap: verticalScale(6)
  },
  doseDatesPosition: {
    flexDirection: 'row',
    gap: scale(5)
  },
  doseDetailsPosition: {
    justifyContent: 'center',
    marginRight: scale(30)
  },
  doseProperties: {
    flexDirection: 'row'
  },
  doseText: {
    color: colors.typedText,
    fontFamily: 'WorkSansMedium',
    fontSize: moderateScale(12)
  },
  doseTimePosition: {
    marginRight: scale(40),
    marginTop: scale(5)
  },
  medicineDoseComponentPosition: {
    alignItems: 'center'
  },
  medicineDoseProperties: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  medicineNameText: {
    color: colors.buttonBg,
    fontFamily: 'WorkSansMedium',
    fontSize: moderateScale(12)
  },
  clickToAddMedPosition: {
    alignItems: 'center',
    marginTop: scale(150)
  },
  donotHaveMedTextPosition: {
    marginTop: scale(5)
  },
  donotHaveMedText: {
    color: colors.typedText,
    fontFamily: 'WorkSansMedium',
    fontSize: moderateScale(14)
  },
  clickToAddText: {
    color: colors.header,
    fontFamily: 'WorkSansMedium',
    fontSize: moderateScale(14)
  },
  plusIconText: {
    color: colors.buttonBg,
    fontFamily: 'WorkSansMedium',
    fontSize: moderateScale(14)
  },
  clickToAddMedTextPosition: {
    flexDirection: 'row',
  },
  medicineDoseListStyle: {
    maxHeight: scale(330), 
  }
});

export default styles;
