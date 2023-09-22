import React, {useEffect, useRef} from 'react';
import {Animated} from 'react-native';
import {
  playOpacityAnimation,
  playShakeAnimation,
  playSizeAnimation,
} from '@game/common/animations';
import {getLineStyle} from './utils';
import {PlayerMark} from '@game/common/types';

interface VerticalLineProps {
  width: number;
  positionX: number;
  winner: PlayerMark;
}

const VerticalLine: React.FC<VerticalLineProps> = ({
  width,
  positionX,
  winner,
}) => {
  const opacityAnimation = useRef(new Animated.Value(0)).current;
  const widthAnimation = useRef(new Animated.Value(0)).current;
  const shakeAnimation = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    playOpacityAnimation(opacityAnimation);
    playSizeAnimation(widthAnimation, width);
    playShakeAnimation(shakeAnimation);
  }, [opacityAnimation, shakeAnimation, width, widthAnimation, winner]);

  if (winner === '') {
    return null;
  }

  return (
    <Animated.View
      style={getLineStyle(
        winner,
        positionX,
        widthAnimation,
        opacityAnimation,
        shakeAnimation,
      )}
    />
  );
};

export default VerticalLine;
