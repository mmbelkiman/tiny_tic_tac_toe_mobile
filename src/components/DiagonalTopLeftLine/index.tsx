import React, {useEffect, useRef} from 'react';
import {Animated} from 'react-native';
import {PlayerMark} from '../../common/types';
import {playHeightAnimation, playShakeAnimation} from './animations';
import {getLineStyle} from './utils';
import {playOpacityAnimation} from '../../common/animations';

interface DiagonalTopLeftLineProps {
  length: number;
  height: number;
  winner: PlayerMark | null;
  visible: boolean;
}

const DiagonalTopLeftLine: React.FC<DiagonalTopLeftLineProps> = ({
  length,
  height,
  winner,
  visible,
}) => {
  const opacityAnimation = useRef(new Animated.Value(0)).current;
  const heightAnimation = useRef(new Animated.Value(0)).current;
  const shakeAnimation = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    if (visible && winner) {
      playOpacityAnimation(opacityAnimation);
      playHeightAnimation(heightAnimation, height);
      playShakeAnimation(shakeAnimation);
    }
  }, [
    height,
    heightAnimation,
    opacityAnimation,
    shakeAnimation,
    visible,
    winner,
  ]);

  if (!visible || winner === null) {
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
