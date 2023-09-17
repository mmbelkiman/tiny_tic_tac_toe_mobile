import {getPlayerColor} from '../../common/utils';
import styles from './styles';
import {getShakeStyle} from './animations';
import {Animated} from 'react-native';
import {PlayerMark} from '../../common/types';

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
