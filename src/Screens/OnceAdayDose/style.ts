import { StyleSheet } from 'react-native';
import { scale, verticalScale } from 'react-native-size-matters';

import { colors } from '../../theme/colors';

const styles = StyleSheet.create({
  addMoreSettingsContentProperties: {
    alignItems: 'center',
    flexDirection: 'row',
    marginLeft: 20
  },
  addMoreSettingsHeaderPosition: {
    marginTop: verticalScale(30)
  },
  addMoreSettingsItems: {
    alignItems: 'center',
    backgroundColor: colors.textInput,
    borderRadius: scale(6),
    borderWidth: scale(0.15),
    flexDirection: 'row',
    height: verticalScale(35),
    marginTop: verticalScale(5),
    width: scale(330)
  },
  addMoreSettingsItemsPosition: {
    marginTop: verticalScale(-40)
  },
  addMoreSettingsItemsText: {
    color: colors.mainText,
    marginLeft: scale(20)
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
    marginTop: verticalScale(-60)
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
    marginTop: verticalScale(70)
  },
  imagePosition: {
    top: verticalScale(10)
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
    width: scale(74)
  },
  selectButtonText: {
    color: colors.buttonBg
  },
  settingsAndButtonContainer: {
    alignItems: 'center',
    flex: 1
  }
});

export default styles;
