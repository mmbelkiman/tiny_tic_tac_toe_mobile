import {Animated} from 'react-native';
import {PlayerMark} from '@/common/types';
import {getPlayerColor} from '@/common/utils';
import styles from './styles';

export const getShakeStyle = (animation: Animated.Value) => ({
  transform: [
    {
      translateX: animation.interpolate({
        inputRange: [0, 0.2, 0.4, 0.6, 0.8, 1],
        outputRange: [0, -5, 5, -5, 5, 0],
      }),
    },
  ],
});

export const getLineStyle = (
  winner: PlayerMark,
  positionY: number,
  heightAnimation: Animated.Value,
  opacityAnimation: Animated.Value,
  shakeAnimation: Animated.Value,
) => [
  styles.line,
  {
    backgroundColor: getPlayerColor(winner),
    height: heightAnimation,
    top: positionY,
    opacity: opacityAnimation,
  },
  getShakeStyle(shakeAnimation),
];
