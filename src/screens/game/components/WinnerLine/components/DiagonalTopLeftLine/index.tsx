import React from 'react';
import {Animated} from 'react-native';
import {getLineStyle} from './utils';

interface DiagonalTopLeftLineProps {
  length: number;
  height: number;
  color: string;
  heightAnimation: Animated.Value;
  opacityAnimation: Animated.Value;
  shakeAnimation: Animated.Value;
  testID?: string | number;
}

const DiagonalTopLeftLine: React.FC<DiagonalTopLeftLineProps> = ({
  length,
  height,
  color,
  opacityAnimation,
  shakeAnimation,
  heightAnimation,
  testID = '',
}) => {
  return (
    <Animated.View
      testID={`DiagonalTopLeftLine${testID}`}
      style={getLineStyle({
        color,
        length,
        height,
        left: height,
        heightAnimation,
        opacityAnimation,
        shakeAnimation,
      })}
    />
  );
};

export default DiagonalTopLeftLine;
