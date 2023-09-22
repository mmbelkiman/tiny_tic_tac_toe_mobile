import React, {useEffect, useRef} from 'react';
import {Animated} from 'react-native';
import {
  playOpacityAnimation,
  playShakeAnimation,
  playSizeAnimation,
} from '@game/common/animations';
import {PlayerMark} from '@game/common/types';
import {getLineStyle} from './utils';

interface DiagonalTopLeftLineProps {
  length: number;
  height: number;
  winner: PlayerMark;
}

const DiagonalTopLeftLine: React.FC<DiagonalTopLeftLineProps> = ({
  length,
  height,
  winner,
}) => {
  const opacityAnimation = useRef(new Animated.Value(0)).current;
  const heightAnimation = useRef(new Animated.Value(0)).current;
  const shakeAnimation = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    playOpacityAnimation(opacityAnimation);
    playSizeAnimation(heightAnimation, height);
    playShakeAnimation(shakeAnimation);
  }, [height, heightAnimation, opacityAnimation, shakeAnimation, winner]);

  if (winner === '') {
    return null;
  }

  return (
    <Animated.View
      style={getLineStyle({
        winner,
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
