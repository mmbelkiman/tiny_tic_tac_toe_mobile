import React from 'react';
import {Animated} from 'react-native';
import {getLineStyle} from './utils';

interface DiagonalTopRightLineProps {
  length: number;
  height: number;
  color: string;
  heightAnimation: Animated.Value;
  opacityAnimation: Animated.Value;
  shakeAnimation: Animated.Value;
  testID?: string | number;
}

const DiagonalTopRightLine: React.FC<DiagonalTopRightLineProps> = ({
  length,
  height,
  color,
  shakeAnimation,
  opacityAnimation,
  heightAnimation,
  testID = '',
}) => {
  return (
    <Animated.View
      testID={`DiagonalTopRightLine${testID}`}
      style={getLineStyle({
        color,
        length,
        height,
        right: height,
        heightAnimation,
        opacityAnimation,
        shakeAnimation,
      })}
    />
  );
};

export default DiagonalTopRightLine;
