import {Animated} from 'react-native';
import {PlayerMark} from '../../../../common/types';
import {getPlayerColor} from '../../common/utils';
import styles from './styles';

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

export const getLineStyle = ({
  winner,
  length,
  height,
  right,
  heightAnimation,
  opacityAnimation,
  shakeAnimation,
}: {
  winner: PlayerMark;
  length: number;
  height: number;
  right: number;
  heightAnimation: Animated.Value;
  opacityAnimation: Animated.Value;
  shakeAnimation: Animated.Value;
}) => [
  styles.line,
  {
    backgroundColor: getPlayerColor(winner),
    width: length,
    right: right,
    height: heightAnimation,
    opacity: opacityAnimation,
  },
  getShakeStyle(shakeAnimation, length, height),
];
