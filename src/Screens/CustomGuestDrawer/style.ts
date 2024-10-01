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
    fontSize: moderateScale(12),
    fontWeight: '400'
  },
  forgotPassword: {
    color: colors.buttonBg,
    fontSize: moderateScale(12),
    fontWeight: '400',
    textAlign: 'center'
  },
  guestGreetingsPosition: {
    alignItems: 'center',
    marginTop: verticalScale(100)
  },
  guestGreetingsText: {
    color: colors.header,
    fontSize: moderateScale(16),
    fontWeight: '600'
  },
  guestSignInButton: {
    alignItems: 'center',
    backgroundColor: colors.buttonBg,
    borderRadius: scale(30),
    flexDirection: 'row',
    gap: scale(5),
    height: verticalScale(38),
    justifyContent: 'center',
    width: scale(140)
  },
  guestSignInButtonPosition: {
    alignItems: 'center',
    marginTop: verticalScale(30)
  },
  guestSignInButtonText: {
    color: colors.white,
    fontSize: moderateScale(13),
    fontWeight: '400'
  },
  imagePosition: {
    alignItems: 'center',
    top: verticalScale(80)
  },
  signUpText: {
    color: colors.typedText,
    fontSize: moderateScale(12),
    fontWeight: '400',
    textDecorationLine: 'underline'
  },
  signUptext: {
    color: colors.header,
    fontSize: moderateScale(14),
    fontWeight: '300'
  },
  textForGuest: {
    color: colors.typedText,
    fontSize: moderateScale(14),
    fontWeight: '300',
    textAlign: 'center'
  },
  textForGuestPosition: {
    alignItems: 'center',
    marginTop: verticalScale(30)
  }
});

export default styles;
