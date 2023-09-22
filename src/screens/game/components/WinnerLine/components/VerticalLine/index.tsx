import React from 'react';
import {Animated} from 'react-native';
import {getLineStyle} from './utils';
import {PlayerMark} from '@game/common/types';

interface VerticalLineProps {
  width: number;
  positionX: number;
  color: string;
  widthAnimation: Animated.Value;
  opacityAnimation: Animated.Value;
  shakeAnimation: Animated.Value;
}

const VerticalLine: React.FC<VerticalLineProps> = ({
  positionX,
  color,
  widthAnimation,
  shakeAnimation,
  opacityAnimation,
}) => {
  return (
    <Animated.View
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
