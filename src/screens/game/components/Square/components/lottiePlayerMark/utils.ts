import {ViewStyle} from 'react-native';
import {PlayerMark} from '../../../../../../common/types';
import {ANIMATION_DURATION_O, ANIMATION_DURATION_X} from './constants';
import lottieCrossAnimation from './res/lottieCrossAnimation.json';
import lottieCircleAnimation from './res/lottieCircleAnimation.json';

export const getMarkStyle = (squareSize: number): ViewStyle => {
  return {
    width: squareSize,
    height: squareSize,
  };
};

export const getMarkDuration = (activePlayerMark: PlayerMark) =>
  activePlayerMark === 'X' ? ANIMATION_DURATION_X : ANIMATION_DURATION_O;

export const getMarkAnimationFile = (activePlayerMark: PlayerMark) =>
  activePlayerMark === 'X' ? lottieCrossAnimation : lottieCircleAnimation;
