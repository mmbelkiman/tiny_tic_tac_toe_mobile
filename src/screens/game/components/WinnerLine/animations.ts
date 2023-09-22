import {Animated} from 'react-native';

export const playShakeAnimation = (animation: Animated.Value) =>
  Animated.sequence([
    Animated.timing(animation, {
      toValue: 1,
      duration: 200,
      useNativeDriver: false,
    }),
    Animated.timing(animation, {
      toValue: 0,
      duration: 200,
      useNativeDriver: false,
    }),
  ]).start();

export const playSizeAnimation = (animation: Animated.Value, size: number) =>
  Animated.timing(animation, {
    toValue: size,
    duration: 80,
    useNativeDriver: false,
  }).start();

export const playOpacityAnimation = (animation: Animated.Value) =>
  Animated.timing(animation, {
    toValue: 0.6,
    duration: 90,
    useNativeDriver: false,
  }).start();
