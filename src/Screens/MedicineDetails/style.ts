import { StyleSheet } from 'react-native';
import { moderateScale, scale, verticalScale } from 'react-native-size-matters';

import { colors } from '../../theme/colors';

const styles = StyleSheet.create({
  brandNameText: {
    color: colors.mainText,
    fontSize: moderateScale(12),
    fontWeight: '400'
  },
  buttonPosition: {
    bottom: verticalScale(10)
  },
  container: {
    alignItems: 'center',
    backgroundColor: colors.white,
    flex: 1
  },
  iconPosition: {
    top: scale(2)
  },
  imagePosition: {
    alignItems: 'center',
    top: verticalScale(20)
  },
  inputHeader: {
    color: colors.header,
    fontSize: moderateScale(14),
    fontWeight: '500'
  },
  medicineDetailsComponentPosition: {
    alignItems: 'center'
  },
  medicineDetailsComponentProperties: {
    gap: verticalScale(6),
    marginTop: verticalScale(14)
  },
  medicineDetailscontainer: {
    alignItems: 'center',
    backgroundColor: colors.textInput,
    borderRadius: scale(6),
    flexDirection: 'row',
    height: 'auto',
    width: scale(330)
  },
  medicineNameAndBrandPosition: {
    alignItems: 'center',
    marginTop: scale(40)
  },
  medicineNameText: {
    color: colors.header,
    fontSize: moderateScale(24),
    fontWeight: '600'
  },
  medicineNameTypeProperties: {
    flexDirection: 'row',
    gap: scale(5)
  },
  medicineTypeAndQuantityPosition: {
    flexDirection: 'row',
    gap: scale(10),
    marginLeft: scale(85),
    marginTop: verticalScale(10)
  },
  medicineTypeAndQuantityProperties: {
    alignSelf: 'center',
    flexDirection: 'row',
    gap: scale(7)
  },
  medicineTypeAndQuantityStyle: {
    backgroundColor: colors.textInput,
    borderRadius: scale(6),
    height: verticalScale(24),
    justifyContent: 'center',
    right: scale(20),
    width: scale(94)
  },
  medicineTypeAndQuantityText: {
    color: colors.header
  },
  medicineTypePosition: {
    marginTop: scale(13)
  },
  medicineTypeText: {
    color: colors.typedText,
    fontSize: moderateScale(12),
    fontWeight: '400'
  },
  scannedText: {
    color: colors.mainText,
    fontSize: moderateScale(12),
    fontWeight: '400',
    textAlign: 'justify'
  },
  scrollViewContainer: {
    paddingBottom: verticalScale(15)
  },
  textPosition: {
    marginBottom: scale(-32),
    marginLeft: scale(12),
    marginRight: scale(15),
    marginTop: scale(8)
  }
});

export default styles;
