import {
  DIAGONAL_LINE_ANGLE,
  DIAGONAL_LINE_LENGTH_SIZE_PADDING,
  DIAGONAL_LINE_SIZE_DIVISOR,
  STRAIGHT_LINE_POSITION_PADDING,
  STRAIGHT_LINE_SIZE_DIVISOR,
} from './constants';

export const getStraightLineSize = (squareSize: number) =>
  squareSize / STRAIGHT_LINE_SIZE_DIVISOR;
export const getStraightLinePosition = (
  squareSize: number,
  boardPosition: number,
) => (boardPosition + STRAIGHT_LINE_POSITION_PADDING) * squareSize;
export const getDiagonalLineSize = (squareSize: number) =>
  squareSize / DIAGONAL_LINE_SIZE_DIVISOR;

export const getDiagonalLineLength = (
  boardSize: number,
  squareSize: number,
) => {
  const squareDiagonalLength = Math.sqrt(squareSize * squareSize * 2);
  const lineLength =
    boardSize * Math.cos(DIAGONAL_LINE_ANGLE) * squareDiagonalLength;

  //multiply by 2 to cover the whole board
  return lineLength * 2 - DIAGONAL_LINE_LENGTH_SIZE_PADDING;
};
