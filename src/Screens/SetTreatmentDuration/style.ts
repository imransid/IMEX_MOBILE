import { StyleSheet } from 'react-native';
import { scale, verticalScale } from 'react-native-size-matters';

import { colors } from '../../theme/colors';

const styles = StyleSheet.create({
  buttonContainer: {
    alignItems: 'center',
    flex: 1
  },
  buttonPosition: {
    bottom: verticalScale(18),
    position: 'absolute'
  },
  chip: {
    backgroundColor: colors.textInput,
    borderRadius: scale(6),
    borderWidth: scale(0.15),
    height: verticalScale(43),
    justifyContent: 'center',
    marginTop: verticalScale(5),
    width: scale(330)
  },
  chipContentProperties: {
    alignItems: 'center',
    flexDirection: 'row',
    marginLeft: 20
  },
  chipPosition: {
    marginTop: verticalScale(-40)
  },
  chipProperties: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  chipText: {
    alignSelf: 'center',
    color: colors.mainText,
    marginLeft: scale(10)
  },
  container: {
    alignItems: 'center',
    flex: 1
  },
  headingPosition: {
    top: verticalScale(60)
  },
  imagePosition: {
    top: verticalScale(10)
  },
  instructionProperties: {
    alignItems: 'center',
    borderWidth: scale(0.17),
    height: scale(40),
    justifyContent: 'center',
    marginRight: scale(5),
    width: scale(168)
  },
  progressBarPosition: {
    borderWidth: scale(0)
  },
  selectButton: {
    alignItems: 'center',
    backgroundColor: colors.selectButtonBg,
    borderRadius: scale(6),
    height: verticalScale(27),
    justifyContent: 'center',
    position: 'relative',
    right: scale(20),
    width: scale(105)
  },
  selectButtonText: {
    color: colors.buttonBg
  },
  subHeadingPosition: {
    marginTop: verticalScale(60)
  },
  treatmentDurationContainer: {
    backgroundColor: colors.textInput,
    position: 'absolute',
    right: scale(10),
    top: verticalScale(240)
  },
  treatmentDurationText: {
    color: colors.header
  }
});

export default styles;
