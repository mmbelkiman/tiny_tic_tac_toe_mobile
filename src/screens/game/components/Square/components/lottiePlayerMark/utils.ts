import {ViewStyle} from 'react-native';
import {LottieColorObject, PlayerMark} from '@game/common/types';

import {ANIMATION_DURATION_O, ANIMATION_DURATION_X} from './constants';
import {getPlayerColor} from '@game/common/utils';
import {COLOR_TRANSPARENT} from '@game/common/constants';

export const getMarkStyle = (squareSize: number): ViewStyle => {
  return {
    width: squareSize,
    height: squareSize,
  };
};

export const getMarkDuration = (activePlayerMark: PlayerMark) =>
  activePlayerMark === 'X' ? ANIMATION_DURATION_X : ANIMATION_DURATION_O;

export const getColorFilterCross = ({
  activePlayerMark,
}: {
  activePlayerMark: PlayerMark;
}) =>
  activePlayerMark === 'X'
    ? COLOR_TRANSPARENT
    : getPlayerColor(activePlayerMark);

export const getColorFilterCircle = ({
  activePlayerMark,
}: {
  activePlayerMark: PlayerMark;
}) =>
  activePlayerMark === 'O'
    ? COLOR_TRANSPARENT
    : getPlayerColor(activePlayerMark);

export const getColorFilters = ({
  activePlayerMark,
}: {
  activePlayerMark: PlayerMark;
}): Array<LottieColorObject> => {
  return [
    {
      keypath: 'Layer 1',
      color: getColorFilterCross({activePlayerMark}),
    },
    {
      keypath: 'Layer 2',
      color: getColorFilterCircle({activePlayerMark}),
    },
  ];
};
