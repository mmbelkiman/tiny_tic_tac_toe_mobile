import {Animated} from 'react-native';
import styles from './styles';

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

export const getSquareStyle = (
  squareSize: number,
  animation: Animated.Value,
) => [
  styles.square,
  {width: squareSize, height: squareSize},
  getShakeStyle(animation),
];
