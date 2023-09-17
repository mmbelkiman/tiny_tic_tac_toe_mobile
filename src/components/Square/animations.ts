import {Animated} from 'react-native';

export const playShakeAnimation = (animation: Animated.Value) => {
  Animated.sequence([
    Animated.timing(animation, {
      toValue: 1,
      duration: 100,
      useNativeDriver: true,
    }),
    Animated.timing(animation, {
      toValue: 0,
      duration: 100,
      useNativeDriver: true,
    }),
  ]).start();
};

export const getShakeStyle = (animation: Animated.Value) => ({
  transform: [
    {
      translateX: animation.interpolate({
        inputRange: [0, 0.2, 0.4, 0.6, 0.8, 1],
        outputRange: [0, -5, 5, -5, 5, 0],
      }),
    },
    {
      translateY: animation.interpolate({
        inputRange: [0, 0.2, 0.4, 0.6, 0.8, 1],
        outputRange: [-2, 0, 2, 0, -2, 0],
      }),
    },
  ],
});
