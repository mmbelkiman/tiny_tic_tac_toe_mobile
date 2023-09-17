import {Animated} from 'react-native';
import {getPlayerColor} from '@/common/utils';
import {PlayerMark} from '@/common/types';
import {getShakeStyle} from './animations';
import styles from './styles';

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
