import React from 'react';
import {PlayerMark, WinnerResultDirection} from '@/screens/game/common/types';
import HorizontalLine from '../HorizontalLine';
import VerticalLine from '../VerticalLine';
import DiagonalTopLeftLine from '../DiagonalTopLeftLine';
import DiagonalTopRightLine from '../DiagonalTopRightLine';
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
  if (winnerResultDirection === 'horizontal') {
    return (
      <HorizontalLine
        winner={winnerMark}
        height={getStraightLineSize(squareSize)}
        positionY={getStraightLinePosition(squareSize, boardPosition || 0)}
      />
    );
  }

  if (winnerResultDirection === 'vertical') {
    return (
      <VerticalLine
        winner={winnerMark}
        width={getStraightLineSize(squareSize)}
        positionX={getStraightLinePosition(squareSize, boardPosition || 0)}
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

  if (winnerResultDirection === 'diagonalTopRight') {
    return (
      <DiagonalTopRightLine
        winner={winnerMark}
        height={getDiagonalLineSize(squareSize)}
        length={getDiagonalLineLength(boardSize, squareSize)}
      />
    );
  }

  return <></>;
};

export default WinnerLine;
