import {ViewStyle} from 'react-native';
import {getColorFilters, getMarkDuration, getMarkStyle} from '../utils';
import {ANIMATION_DURATION_O, ANIMATION_DURATION_X} from '../constants';

describe('Game:Square Utils', () => {
  describe('getMarkDuration', () => {
    it('should return the correct mark duration for "X"', () => {
      const isCircle = false;
      const expectedDuration = ANIMATION_DURATION_X;
      const result = getMarkDuration(isCircle);
      expect(result).toEqual(expectedDuration);
    });

    it('should return the correct mark duration for "O"', () => {
      const isCircle = true;
      const expectedDuration = ANIMATION_DURATION_O;
      const result = getMarkDuration(isCircle);
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

  describe('getColorFilters', () => {
    it('should return the circle color filter', () => {
      const isCircle = true;
      const color = 'green';
      const backgroundColor = 'white';
      const result = getColorFilters({isCircle, color, backgroundColor});
      const expected = [
        {
          keypath: 'Layer 1',
          color: color,
        },
        {
          keypath: 'Layer 2',
          color: backgroundColor,
        },
      ];

      expect(result).toEqual(expected);
    });
    it('should return the circle cross filter', () => {
      const isCircle = false;
      const color = 'blue';
      const backgroundColor = 'white';

      const result = getColorFilters({isCircle, color, backgroundColor});
      const expected = [
        {
          keypath: 'Layer 1',
          color: backgroundColor,
        },
        {
          keypath: 'Layer 2',
          color: color,
        },
      ];

      expect(result).toEqual(expected);
    });
  });
});
