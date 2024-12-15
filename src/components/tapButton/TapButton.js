// spinner = for loading (default false)
// width = for loading (default 100%)
// height = for loading (default 40)
// colour = for background colour (default #3b5998)
// text = for Text value (default custom button)
// _singleTap = for single click
// _doubleTap = for double click
// _longTap = for long click

import React, {useMemo} from 'react';
import {Gesture, GestureDetector} from 'react-native-gesture-handler';
import Styles from './Styles';
import {Dimensions, ActivityIndicator} from 'react-native';

var widthDevice = Dimensions.get('window').width;

import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withRepeat,
  withTiming,
  withSequence,
  runOnJS,
} from 'react-native-reanimated';

export default function TapButton({
  height,
  width,
  color,
  text,
  _singleTap,
  _doubleTap,
  _longTap,
  spinner,
}) {
  // value
  const textValue = useMemo(
    () => (text === undefined ? 'custom button' : text),
    [text],
  );
  // height
  const Height = useMemo(() => (height === undefined ? 40 : height), [height]);
  // width
  const Width = useMemo(
    () => (width === undefined ? widthDevice : width),
    [width, widthDevice],
  );

  // color
  const Color = useMemo(
    () => (color === undefined ? '#3b5998' : color),
    [color],
  );

  // store animation value
  const _opacity = useSharedValue(2);
  const rotation = useSharedValue(0);
  const _textColour = useSharedValue('#fff');

  // for single Tab
  const singleTap = Gesture.Tap()
    .onBegin(() => {
      _opacity.value = 0.3;
      _textColour.value = '#404040';
    })
    .onStart(() => {
      runOnJS(_singleTap)(true);
    })
    .onEnd((_event, success) => {
      if (success) {
        _opacity.value = 2;
        _textColour.value = '#fff';
        rotation.value = withSequence(
          withTiming(-0.2, {duration: 50}),
          withRepeat(withTiming(0.3, {duration: 100}), 2, true),
          withTiming(0.2, {duration: 50}),
        );
      }
    });

  // for double tab
  const doubleTap = Gesture.Tap()
    .numberOfTaps(2)
    .onEnd((_event, success) => {
      if (success) {
        _opacity.value = 2;
        _textColour.value = '#fff';
        rotation.value = withSequence(
          withTiming(-0.2, {duration: 50}),
          withRepeat(withTiming(0.3, {duration: 100}), 2, true),
          withTiming(0.2, {duration: 50}),
        );
        runOnJS(_doubleTap)(true);
      }
    });
  //for long tab
  const longPressGesture = Gesture.LongPress().onEnd((_event, success) => {
    if (success) {
      _opacity.value = 2;
      _textColour.value = '#fff';
      rotation.value = withSequence(
        withTiming(-0.2, {duration: 50}),
        withRepeat(withTiming(0.3, {duration: 100}), 2, true),
        withTiming(0.2, {duration: 50}),
      );
      runOnJS(_longTap)(true);
    }
  });

  const taps = Gesture.Exclusive(doubleTap, singleTap, longPressGesture);

  // for animation

  const animatedStyle = useAnimatedStyle(() => {
    return {
      opacity: _opacity.value,
      transform: [{rotateZ: `${rotation.value}deg`}],
    };
  });

  const animatedTextStyle = useAnimatedStyle(() => {
    return {
      color: _textColour.value,
    };
  });

  return (
    <GestureDetector gesture={taps}>
      <Animated.View
        style={[
          Styles(parseInt(Height), parseInt(Width), Color).tapButton,
          animatedStyle,
        ]}>
        <Animated.Text style={[animatedTextStyle, Styles().tapButtonText]}>
          {!spinner ? (
            textValue.toUpperCase()
          ) : (
            <ActivityIndicator size="small" color="#CFCFCF" />
          )}
        </Animated.Text>
      </Animated.View>
    </GestureDetector>
  );
}
