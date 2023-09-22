import {Animated} from 'react-native';
import {getPlayerColor} from '../../../../common/utils';
import {PlayerMark} from '../../../../common/types';
import styles from './styles';

export const getShakeStyle = (animation: Animated.Value) => ({
  transform: [
    {
      translateY: animation.interpolate({
        inputRange: [0, 0.2, 0.4, 0.6, 0.8, 1],
        outputRange: [0, -5, 5, -5, 5, 0],
      }),
    },
  ],
});

export const getLineStyle = (
  winner: PlayerMark,
  positionX: number,
  widthAnimation: Animated.Value,
  opacityAnimation: Animated.Value,
  shakeAnimation: Animated.Value,
) => [
  styles.line,
  {
    backgroundColor: getPlayerColor(winner),
    width: widthAnimation,
    opacity: opacityAnimation,
    left: positionX,
  },
  getShakeStyle(shakeAnimation),
];
