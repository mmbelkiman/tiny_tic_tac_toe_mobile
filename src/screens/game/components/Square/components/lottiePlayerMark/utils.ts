import {ViewStyle} from 'react-native';
import {PlayerMark} from '@game/common/types';

import {ANIMATION_DURATION_O, ANIMATION_DURATION_X} from './constants';

export const getMarkStyle = (squareSize: number): ViewStyle => {
  return {
    width: squareSize,
    height: squareSize,
  };
};

export const getMarkDuration = (activePlayerMark: PlayerMark) =>
  activePlayerMark === 'X' ? ANIMATION_DURATION_X : ANIMATION_DURATION_O;
