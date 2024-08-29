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
  componentsPosition: {
    alignItems: 'center',
    marginTop: verticalScale(10)
  },
  forgotPassword: {
    color: colors.buttonBg,
    fontSize: moderateScale(14),
    fontWeight: '400',
    textAlign: 'center'
  },
  guestGreetingsText: {
    color: colors.header,
    fontSize: moderateScale(18),
    fontWeight: '600'
  },
  guestSignInButton: {
    alignItems: 'center',
    backgroundColor: colors.buttonBg,
    borderRadius: scale(30),
    flexDirection: 'row',
    gap: scale(5),
    height: verticalScale(43),
    justifyContent: 'center',
    width: scale(160)
  },
  guestSignInButtonPosition: {
    alignItems: 'center',
    marginTop: verticalScale(50)
  },
  guestSignInButtonText: {
    color: colors.white,
    fontSize: moderateScale(15),
    fontWeight: '400'
  },
  headingPosition: {
    alignItems: 'center',
    top: verticalScale(10)
  },
  signUpText: {
    color: colors.typedText,
    fontSize: moderateScale(14),
    fontWeight: '400',
    textDecorationLine: 'underline'
  },
  signUptext: {
    color: colors.header,
    fontSize: moderateScale(16),
    fontWeight: '300'
  },
  textForGuest: {
    color: colors.typedText,
    fontSize: moderateScale(16),
    fontWeight: '300',
    textAlign: 'center'
  }
});

export default styles;
