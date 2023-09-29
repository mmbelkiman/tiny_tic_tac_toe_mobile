import React, {useEffect, useRef, useState} from 'react';
import {Animated} from 'react-native';
import {WinnerResultDirection} from '@game/common/types';
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

interface WinnerLineProps {
  color: string | null;
  winnerResultDirection: WinnerResultDirection | null;
  boardPosition: number | null;
  squareSize: number;
  boardSize: number;
}

const WinnerLine: React.FC<WinnerLineProps> = ({
  color,
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
    if (color === null) {
      opacityAnimation.resetAnimation();
      sizeAnimation.resetAnimation();
      shakeAnimation.resetAnimation();
      setLineSize(0);
    }
  }, [sizeAnimation, opacityAnimation, shakeAnimation, color]);

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
    if (color !== null) {
      playOpacityAnimation(opacityAnimation);
      playSizeAnimation(sizeAnimation, lineSize);
      playShakeAnimation(shakeAnimation);
    }
  }, [sizeAnimation, opacityAnimation, shakeAnimation, lineSize, color]);

  if (color === null || boardPosition === null) {
    return null;
  }

  if (winnerResultDirection === 'horizontal') {
    return (
      <HorizontalLine
        testID={boardPosition}
        color={color}
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
        testID={boardPosition}
        width={lineSize}
        color={color}
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
        testID={boardPosition}
        height={lineSize}
        color={color}
        length={getDiagonalLineLength(boardSize, squareSize)}
        opacityAnimation={opacityAnimation}
        shakeAnimation={shakeAnimation}
        heightAnimation={sizeAnimation}
      />
    );
  }
  return (
    <DiagonalTopRightLine
      testID={boardPosition}
      height={lineSize}
      color={color}
      length={getDiagonalLineLength(boardSize, squareSize)}
      opacityAnimation={opacityAnimation}
      shakeAnimation={shakeAnimation}
      heightAnimation={sizeAnimation}
    />
  );
};

export default WinnerLine;
