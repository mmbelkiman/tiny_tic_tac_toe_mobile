import {Animated} from 'react-native';

export const playOpacityAnimation = (animation: Animated.Value) => {
  Animated.timing(animation, {
    toValue: 0.6,
    duration: 90,
    useNativeDriver: false,
  }).start();
};
