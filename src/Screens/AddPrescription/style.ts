import { StyleSheet } from 'react-native';
import { moderateScale, scale, verticalScale } from 'react-native-size-matters';

import { colors } from '../../theme/colors';

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        flex: 1
    },
  buttonContainer: {
    alignItems: 'center',
    flex: 1
  },
  buttonPosition: {
    bottom: verticalScale(18),
    position: 'absolute'
  }, 
  headingPosition: {
    top: verticalScale(60)
  },
  imagePosition: {
    top: verticalScale(10)
  },
  subHeadingPosition: {
    marginTop: verticalScale(60)
  },
  chooseFileButton: {
    height: verticalScale(37),
    width: verticalScale(162),
    borderRadius: scale(16),
    backgroundColor: colors.buttonBg,
    justifyContent: 'center',
    alignItems: 'center'
  },
  chooseFileText: {
    fontSize: moderateScale(16),
    fontWeight: '500',
    color: colors.secondaryButtonText
  }
});

export default styles;
