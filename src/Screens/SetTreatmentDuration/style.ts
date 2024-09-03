import { StyleSheet } from 'react-native';
import { scale, verticalScale } from 'react-native-size-matters';

import { colors } from '../../theme/colors';

const styles = StyleSheet.create({
  NextbuttonPosition: {
    alignItems: 'center',
    marginTop: verticalScale(25)
  },
  chip: {
    backgroundColor: colors.textInput,
    borderRadius: scale(2),
    height: verticalScale(35),
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
    alignItems: 'center',
    marginTop: verticalScale(10)
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
    backgroundColor: colors.white,
    flex: 1
  },
  headingPosition: {
    alignItems: 'center',
    top: verticalScale(30)
  },
  imagePosition: {
    alignItems: 'center',
    top: verticalScale(30)
  },
  instructionProperties: {
    alignItems: 'center',
    borderWidth: scale(0.17),
    height: scale(40),
    justifyContent: 'center',
    marginRight: scale(5),
    width: scale(168)
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
    left: scale(10),
    marginTop: verticalScale(30)
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
