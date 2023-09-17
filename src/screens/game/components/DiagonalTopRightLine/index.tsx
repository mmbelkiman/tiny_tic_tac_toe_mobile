import React, {useEffect, useRef} from 'react';
import {Animated} from 'react-native';
import {
  playOpacityAnimation,
  playShakeAnimation,
  playSizeAnimation,
} from '@/common/animations';
import {getLineStyle} from './utils';
import {PlayerMark} from '@/screens/game/common/types';

interface DiagonalTopRightLineProps {
  length: number;
  height: number;
  winner: PlayerMark;
}

const DiagonalTopRightLine: React.FC<DiagonalTopRightLineProps> = ({
  length,
  height,
  winner,
}) => {
  const opacityAnimation = useRef(new Animated.Value(0)).current;
  const heightAnimation = useRef(new Animated.Value(0)).current;
  const shakeAnimation = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    if (winner !== '') {
      playOpacityAnimation(opacityAnimation);
      playSizeAnimation(heightAnimation, height);
      playShakeAnimation(shakeAnimation);
    }
  }, [opacityAnimation, heightAnimation, shakeAnimation, height]);

  if (winner === '') {
    return null;
  }

  return (
    <Animated.View
      style={getLineStyle({
        winner,
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