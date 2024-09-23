import { StyleSheet } from 'react-native';
import { moderateScale, scale, verticalScale } from 'react-native-size-matters';

import { colors } from '../../theme/colors';

const styles = StyleSheet.create({
  askAboutAccount: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: verticalScale(15)
  },
  askAboutAccountText: {
    color: colors.typedText,
    fontSize: moderateScale(14),
    fontWeight: '400'
  },
  container: {
    backgroundColor: colors.white,
    flex: 1
  },
  errorTxt: {
    color: colors.error,
    fontSize: moderateScale(14),
    marginBottom: 6
  },
  forgotPassword: {
    color: colors.buttonBg,
    fontSize: moderateScale(14),
    fontWeight: '400',
    textAlign: 'center'
  },
  guestButton: {
    alignItems: 'center',
    backgroundColor: colors.textInput,
    borderRadius: scale(30),
    flexDirection: 'row',
    gap: scale(12),
    height: verticalScale(56),
    justifyContent: 'center',
    width: scale(315)
  },
  guestButtonPosition: {
    alignItems: 'center',
    marginTop: verticalScale(12)
  },
  guestButtonText: {
    color: colors.typedText,
    fontSize: moderateScale(18),
    fontWeight: '400'
  },
  inputHeader: {
    color: colors.header,
    fontSize: moderateScale(14),
    fontWeight: '500',
    marginRight: scale(226)
  },
  inputText: {
    color: colors.header,
    fontSize: moderateScale(14),
    fontWeight: '400'
  },
  mainHeader: {
    alignItems: 'center',
    top: verticalScale(15)
  },
  mobileNumberInput: {
    gap: verticalScale(6)
  },
  orHorizontalLine: {
    backgroundColor: colors.subText,
    height: verticalScale(2),
    width: scale(120)
  },
  orPart: {
    alignItems: 'center',
    flexDirection: 'row',
    gap: scale(16),
    justifyContent: 'space-between'
  },
  orPartPosition: {
    alignItems: 'center',
    marginTop: verticalScale(12)
  },
  orText: {
    color: colors.mainText,
    fontSize: moderateScale(18),
    fontWeight: '400'
  },
  passwordInput: {
    gap: verticalScale(6),
    marginTop: verticalScale(20)
  },
  signInButtonPosition: {
    alignItems: 'center',
    marginTop: verticalScale(25)
  },
  signUpText: {
    color: colors.typedText,
    fontSize: moderateScale(14),
    fontWeight: '400',
    textDecorationLine: 'underline'
  },
  subHeaderFirstLine: {
    alignItems: 'center',
    top: verticalScale(-30)
  },
  subHeaderSecondLine: {
    alignItems: 'center',
    top: verticalScale(-60)
  },
  textInputComponentsPosition: {
    alignItems: 'center'
  },
  textInputError: {
    borderColor: colors.error,
    borderWidth: 1
  }
});

export default styles;
