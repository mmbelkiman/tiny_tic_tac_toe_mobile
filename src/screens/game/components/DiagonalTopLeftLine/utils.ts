import {Animated} from 'react-native';
import {getPlayerColor} from '../../../../common/utils';
import {PlayerMark} from '../../../../common/types';
import styles from './styles';

export const getShakeStyle = (
  animation: Animated.Value,
  length: number,
  height: number,
) => ({
  transform: [
    {translateX: -length / 2},
    {translateY: -height / 2},
    {rotate: '45deg'},
    {translateX: length / 2},
    {translateY: height / 2},
    {
      translateY: animation.interpolate({
        inputRange: [0, 1],
        outputRange: [0, -5],
      }),
    },
  ],
});

export const getLineStyle = ({
  winner,
  length,
  height,
  left,
  heightAnimation,
  opacityAnimation,
  shakeAnimation,
}: {
  winner: PlayerMark;
  length: number;
  height: number;
  left: number;
  heightAnimation: Animated.Value;
  opacityAnimation: Animated.Value;
  shakeAnimation: Animated.Value;
}) => [
  styles.line,
  {
    backgroundColor: getPlayerColor(winner),
    width: length,
    left: left,
    height: heightAnimation,
    opacity: opacityAnimation,
  },
  getShakeStyle(shakeAnimation, length, height),
];
