import {ViewStyle} from 'react-native';
import {getMarkStyle, getMarkDuration, getMarkAnimationFile} from '../utils';
import {ANIMATION_DURATION_O, ANIMATION_DURATION_X} from '../constants';
import {PlayerMark} from '@/common/types';
import lottieCrossAnimation from '../res/lottieCrossAnimation.json';
import lottieCircleAnimation from '../res/lottieCircleAnimation.json';

describe('Utils Tests', () => {
  describe('getMarkDuration', () => {
    it('should return the correct mark duration for "X"', () => {
      const activePlayerMark: PlayerMark = 'X';
      const expectedDuration = ANIMATION_DURATION_X;
      const result = getMarkDuration(activePlayerMark);
      expect(result).toEqual(expectedDuration);
    });

    it('should return the correct mark duration for "O"', () => {
      const activePlayerMark: PlayerMark = 'O';
      const expectedDuration = ANIMATION_DURATION_O;
      const result = getMarkDuration(activePlayerMark);
      expect(result).toEqual(expectedDuration);
    });
  });

  describe('getMarkStyle', () => {
    it('should return the correct mark style', () => {
      const squareSize = 100;
      const expectedStyle: ViewStyle = {
        width: squareSize,
        height: squareSize,
      };
      const result = getMarkStyle(squareSize);
      expect(result).toEqual(expectedStyle);
    });
  });

  describe('getMarkAnimationFile', () => {
    it('should return the correct mark animation file for "X"', () => {
      const activePlayerMark: PlayerMark = 'X';
      const expectedAnimationFile = lottieCrossAnimation;
      const result = getMarkAnimationFile(activePlayerMark);
      expect(result).toEqual(expectedAnimationFile);
    });

    it('should return the correct mark animation file for "O"', () => {
      const activePlayerMark: PlayerMark = 'O';
      const expectedAnimationFile = lottieCircleAnimation;
      const result = getMarkAnimationFile(activePlayerMark);
      expect(result).toEqual(expectedAnimationFile);
    });
  });
});
