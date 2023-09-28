import {ViewStyle} from 'react-native';
import {LottieColorObject} from '@game/common/types';
import {ANIMATION_DURATION_O, ANIMATION_DURATION_X} from './constants';

export const getMarkStyle = (squareSize: number): ViewStyle => {
  return {
    width: squareSize,
    height: squareSize,
  };
};

export const getMarkDuration = (isCircle: boolean) =>
  isCircle ? ANIMATION_DURATION_O : ANIMATION_DURATION_X;

export const getColorFilters = ({
  isCircle,
  color,
  backgroundColor,
}: {
  isCircle: boolean;
  color: string;
  backgroundColor: string;
}): LottieColorObject[] => {
  const circleColor = isCircle ? color : backgroundColor;
  const crossColor = !isCircle ? color : backgroundColor;

  return [
    {
      keypath: 'Layer 1',
      color: circleColor,
    },
    {
      keypath: 'Layer 2',
      color: crossColor,
    },
  ];
};
