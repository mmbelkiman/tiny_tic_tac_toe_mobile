import React from 'react';
import {Animated} from 'react-native';
import {getLineStyle} from './utils';

interface VerticalLineProps {
  width: number;
  positionX: number;
  color: string;
  widthAnimation: Animated.Value;
  opacityAnimation: Animated.Value;
  shakeAnimation: Animated.Value;
  testID?: string | number;
}

const VerticalLine: React.FC<VerticalLineProps> = ({
  positionX,
  color,
  widthAnimation,
  shakeAnimation,
  opacityAnimation,
  testID = '',
}) => {
  return (
    <Animated.View
      testID={`VerticalLine${testID}`}
      style={getLineStyle(
        color,
        positionX,
        widthAnimation,
        opacityAnimation,
        shakeAnimation,
      )}
    />
  );
};

export default VerticalLine;
