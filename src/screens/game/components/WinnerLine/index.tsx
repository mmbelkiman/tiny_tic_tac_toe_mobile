import React, {useEffect, useRef, useState} from 'react';
import {Animated} from 'react-native';
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
import {
  playOpacityAnimation,
  playShakeAnimation,
  playSizeAnimation,
} from '@game/components/WinnerLine/animations';
import {getPlayerColor} from '@game/common/utils';

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
  const [lineSize, setLineSize] = useState(0);
  const opacityAnimation = useRef(new Animated.Value(0)).current;
  const sizeAnimation = useRef(new Animated.Value(0)).current;
  const shakeAnimation = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    //Reset animations when board is reset
    if (winnerMark === '') {
      opacityAnimation.resetAnimation();
      sizeAnimation.resetAnimation();
      shakeAnimation.resetAnimation();
      setLineSize(0);
    }
  }, [sizeAnimation, opacityAnimation, shakeAnimation, winnerMark]);

  useEffect(() => {
    //Set the line size
    if (winnerResultDirection === null) {
      return;
    }
    if (
      winnerResultDirection === 'horizontal' ||
      winnerResultDirection === 'vertical'
    ) {
      setLineSize(getStraightLineSize(squareSize));
    }
    setLineSize(getDiagonalLineSize(squareSize));
  }, [squareSize, winnerResultDirection]);

  useEffect(() => {
    //Run animations when has a winner
    if (winnerMark !== '') {
      playOpacityAnimation(opacityAnimation);
      playSizeAnimation(sizeAnimation, lineSize);
      playShakeAnimation(shakeAnimation);
    }
  }, [sizeAnimation, opacityAnimation, shakeAnimation, lineSize, winnerMark]);

  if (boardPosition === null) {
    return null;
  }

  if (winnerResultDirection === 'horizontal') {
    return (
      <HorizontalLine
        color={getPlayerColor(winnerMark)}
        positionY={getStraightLinePosition(squareSize, boardPosition)}
        opacityAnimation={opacityAnimation}
        shakeAnimation={shakeAnimation}
        heightAnimation={sizeAnimation}
      />
    );
  }

  if (winnerResultDirection === 'vertical') {
    return (
      <VerticalLine
        width={lineSize}
        color={getPlayerColor(winnerMark)}
        positionX={getStraightLinePosition(squareSize, boardPosition)}
        opacityAnimation={opacityAnimation}
        shakeAnimation={shakeAnimation}
        widthAnimation={sizeAnimation}
      />
    );
  }

  if (winnerResultDirection === 'diagonalTopLeft') {
    return (
      <DiagonalTopLeftLine
        height={lineSize}
        color={getPlayerColor(winnerMark)}
        length={getDiagonalLineLength(boardSize, squareSize)}
        opacityAnimation={opacityAnimation}
        shakeAnimation={shakeAnimation}
        heightAnimation={sizeAnimation}
      />
    );
  }
  return (
    <DiagonalTopRightLine
      height={lineSize}
      color={getPlayerColor(winnerMark)}
      length={getDiagonalLineLength(boardSize, squareSize)}
      opacityAnimation={opacityAnimation}
      shakeAnimation={shakeAnimation}
      heightAnimation={sizeAnimation}
    />
  );
};

export default WinnerLine;
