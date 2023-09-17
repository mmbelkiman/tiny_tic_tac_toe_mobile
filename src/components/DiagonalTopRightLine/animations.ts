import {Animated} from 'react-native';

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

export const getShakeStyle = (
  animation: Animated.Value,
  length: number,
  height: number,
) => ({
  transform: [
    {translateX: length / 2},
    {translateY: -height / 2},
    {rotate: '-45deg'},
    {translateX: -length / 2},
    {translateY: height / 2},
    {
      translateY: animation.interpolate({
        inputRange: [0, 1],
        outputRange: [0, -5],
      }),
    },
  ],
});
