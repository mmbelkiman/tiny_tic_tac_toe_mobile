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
