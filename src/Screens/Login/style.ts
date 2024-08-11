import { StyleSheet } from 'react-native';
import { moderateScale, scale, verticalScale } from 'react-native-size-matters';

import { colors } from '../../theme/colors';

const styles = StyleSheet.create({
  askAboutAccount: {
    flexDirection: 'row',
    justifyContent: 'center'
  },
  askAboutAccountText: {
    color: colors.typedText,
    fontSize: moderateScale(14),
    fontWeight: '400'
  },
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center'
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
    borderWidth: scale(0.15),
    flexDirection: 'row',
    gap: scale(12),
    height: verticalScale(56),
    justifyContent: 'center',
    width: scale(315)
  },
  guestButtonText: {
    color: colors.typedText,
    fontSize: moderateScale(18),
    fontWeight: '400'
  },
  headerPosition: {
    top: verticalScale(50)
  },
  inputHeader: {
    color: colors.header,
    fontSize: moderateScale(14),
    fontWeight: '500',
    marginRight: scale(226)
  },
  inputText: {
    color: colors.typedText,
    fontSize: moderateScale(16),
    fontWeight: '400'
  },
  keyboardContainer: {
    flex: 1
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
  orText: {
    color: colors.mainText,
    fontSize: moderateScale(18),
    fontWeight: '400'
  },
  scrollViewContainer: {
    flexGrow: 1
  },
  signUpText: {
    color: colors.typedText,
    fontSize: moderateScale(14),
    fontWeight: '400',
    textDecorationLine: 'underline'
  }
});

export default styles;
