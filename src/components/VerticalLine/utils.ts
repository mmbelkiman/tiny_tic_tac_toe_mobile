import {PlayerMark} from '../../common/types';
import styles from './styles';
import {getShakeStyle} from './animations';
import {Animated} from 'react-native';
import {getPlayerColor} from '../../common/utils';

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
