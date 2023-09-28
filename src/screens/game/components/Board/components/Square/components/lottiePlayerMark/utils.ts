import {ViewStyle} from 'react-native';
import {LottieColorObject} from '@game/common/types';
import {COLOR_TRANSPARENT} from '@game/common/constants';
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
}: {
  isCircle: boolean;
  color: string;
}): LottieColorObject[] => {
  const circleColor = isCircle ? color : COLOR_TRANSPARENT;
  const crossColor = !isCircle ? color : COLOR_TRANSPARENT;

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
