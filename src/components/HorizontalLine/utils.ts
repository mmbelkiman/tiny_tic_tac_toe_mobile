import {Animated} from 'react-native';
import {PlayerMark} from '../../common/types';
import {getPlayerColor} from '../../common/utils';
import styles from './styles';
import {getShakeStyle} from './animations';

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
