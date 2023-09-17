import {Animated} from 'react-native';
import styles from './styles';
import {getShakeStyle} from './animations';

export const getSquareStyle = (
  squareSize: number,
  animation: Animated.Value,
) => [
  styles.square,
  {width: squareSize, height: squareSize},
  getShakeStyle(animation),
];
