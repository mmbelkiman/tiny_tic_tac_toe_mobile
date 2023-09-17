import styles from './styles';
import {getShakeStyle} from './animations';
import {Animated} from 'react-native';

export const getSquareStyle = (
  squareSize: number,
  animation: Animated.Value,
) => [
  styles.square,
  {width: squareSize, height: squareSize},
  getShakeStyle(animation),
];
