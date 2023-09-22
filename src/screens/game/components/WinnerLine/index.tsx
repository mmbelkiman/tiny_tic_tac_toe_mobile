import React from 'react';
import {PlayerMark, WinnerResultDirection} from '@game/common/types';
import HorizontalLine from './components/HorizontalLine';
import VerticalLine from './components/VerticalLine';
import DiagonalTopLeftLine from './components/DiagonalTopLeftLine';
import DiagonalTopRightLine from './components/DiagonalTopRightLine';
import {
  getDiagonalLineLength,
  getDiagonalLineSize,
  getStraightLinePosition,
  getStraightLineSize,
} from './utils';

interface WinnerLineProps {
  winnerMark: PlayerMark;
  boardPosition: number | null;
  squareSize: number;
  winnerResultDirection: WinnerResultDirection | null;
  boardSize: number;
}

const WinnerLine: React.FC<WinnerLineProps> = ({
  winnerMark,
  boardPosition,
  squareSize,
  winnerResultDirection,
  boardSize,
}) => {
  if (boardPosition === null) {
    return null;
  }

  if (winnerResultDirection === 'horizontal') {
    return (
      <HorizontalLine
        winner={winnerMark}
        height={getStraightLineSize(squareSize)}
        positionY={getStraightLinePosition(squareSize, boardPosition)}
      />
    );
  }

  if (winnerResultDirection === 'vertical') {
    return (
      <VerticalLine
        winner={winnerMark}
        width={getStraightLineSize(squareSize)}
        positionX={getStraightLinePosition(squareSize, boardPosition)}
      />
    );
  }

  if (winnerResultDirection === 'diagonalTopLeft') {
    return (
      <DiagonalTopLeftLine
        winner={winnerMark}
        height={getDiagonalLineSize(squareSize)}
        length={getDiagonalLineLength(boardSize, squareSize)}
      />
    );
  }

  return (
    <DiagonalTopRightLine
      winner={winnerMark}
      height={getDiagonalLineSize(squareSize)}
      length={getDiagonalLineLength(boardSize, squareSize)}
    />
  );
};

export default WinnerLine;
