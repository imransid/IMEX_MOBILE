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
  headingPosition: {
    top: verticalScale(60)
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
  scrollViewContainer: {
    justifyContent: 'center'
  },
  signIpText: {
    color: colors.typedText,
    fontSize: moderateScale(14),
    fontWeight: '400',
    textDecorationLine: 'underline'
  },
  signUpWithHorizontalLine: {
    backgroundColor: colors.subText,
    height: verticalScale(2),
    width: scale(120)
  },
  signUpWithIcons: {
    alignItems: 'center', // Center horizontally
    borderColor: colors.buttonBg,
    borderRadius: scale(20),
    borderWidth: scale(1.5),
    height: scale(56),
    justifyContent: 'center', // Center vertically
    width: scale(56)
  },
  signUpWithIconsContainer: {
    flexDirection: 'row',
    gap: 8,
    justifyContent: 'center',
    marginTop: verticalScale(8)
  },
  signUpWithPart: {
    alignItems: 'center',
    flexDirection: 'row',
    gap: scale(16),
    justifyContent: 'space-between'
  },
  signUpWithText: {
    color: colors.mainText,
    fontSize: moderateScale(18),
    fontWeight: '400'
  }
});

export default styles;
