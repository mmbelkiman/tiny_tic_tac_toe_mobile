import React from 'react';
import {Animated} from 'react-native';
import {getLineStyle} from './utils';

interface HorizontalLineProps {
  positionY: number;
  color: string;
  heightAnimation: Animated.Value;
  opacityAnimation: Animated.Value;
  shakeAnimation: Animated.Value;
  testID?: string | number;
}

const HorizontalLine: React.FC<HorizontalLineProps> = ({
  positionY,
  color,
  heightAnimation,
  opacityAnimation,
  shakeAnimation,
  testID = '',
}) => {
  return (
    <Animated.View
      testID={`HorizontalLine${testID}`}
      style={getLineStyle(
        color,
        positionY,
        heightAnimation,
        opacityAnimation,
        shakeAnimation,
      )}
    />
  );
};

export default HorizontalLine;
