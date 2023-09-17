import {Animated} from 'react-native';

export const playOpacityAnimation = (animation: Animated.Value) => {
  Animated.timing(animation, {
    toValue: 0.6,
    duration: 90,
    useNativeDriver: false,
  }).start();
};

export const playHeightAnimation = (
  animation: Animated.Value,
  height: number,
) => {
  Animated.timing(animation, {
    toValue: height,
    duration: 80,
    useNativeDriver: false,
  }).start();
};

export const playShakeAnimation = (animation: Animated.Value) => {
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
};

export const getShakeStyle = (animation: Animated.Value) => [
  {
    translateX: animation.interpolate({
      inputRange: [0, 0.2, 0.4, 0.6, 0.8, 1],
      outputRange: [0, -5, 5, -5, 5, 0],
    }),
  },
];
