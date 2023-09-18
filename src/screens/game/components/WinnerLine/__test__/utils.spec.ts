import {
  DIAGONAL_LINE_SIZE_DIVISOR,
  STRAIGHT_LINE_POSITION_PADDING,
  STRAIGHT_LINE_SIZE_DIVISOR,
} from '../constants';
import {
  getDiagonalLineLength,
  getDiagonalLineSize,
  getStraightLinePosition,
  getStraightLineSize,
} from '../utils';

describe('Game:WinnerLine utils', () => {
  const SQUARE_SIZE = 100;
  const BOARD_SIZE = 10;

  describe('getStraightLineSize', () => {
    it('should calculate the straight line size correctly', () => {
      const result = getStraightLineSize(SQUARE_SIZE);
      expect(result).toEqual(SQUARE_SIZE / STRAIGHT_LINE_SIZE_DIVISOR);
    });
  });

  describe('getStraightLinePosition', () => {
    it('should calculate the straight line position correctly', () => {
      const boardPosition = 3;
      const result = getStraightLinePosition(SQUARE_SIZE, boardPosition);
      expect(result).toEqual(
        (boardPosition + STRAIGHT_LINE_POSITION_PADDING) * SQUARE_SIZE,
      );
    });
  });

  describe('getDiagonalLineSize', () => {
    it('should calculate the diagonal line size correctly', () => {
      const result = getDiagonalLineSize(SQUARE_SIZE);
      expect(result).toEqual(SQUARE_SIZE / DIAGONAL_LINE_SIZE_DIVISOR);
    });
  });

  describe('getDiagonalLineLength', () => {
    it('should calculate the diagonal line length correctly', () => {
      const result = getDiagonalLineLength(BOARD_SIZE, SQUARE_SIZE);

      const expected = 1435.8349623976817;
      expect(result).toEqual(expected);
    });
  });
});
