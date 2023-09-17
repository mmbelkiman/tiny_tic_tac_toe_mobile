import React, {useEffect, useRef} from 'react';
import {Animated} from 'react-native';
import {PlayerMark} from '@/common/types';
import {playOpacityAnimation} from '@/common/animations';
import {getLineStyle} from './utils';
import {playHeightAnimation, playShakeAnimation} from './animations';

interface DiagonalTopRightLineProps {
  length: number;
  height: number;
  winner: PlayerMark | null;
  visible: boolean;
}

const DiagonalTopRightLine: React.FC<DiagonalTopRightLineProps> = ({
  length,
  height,
  winner,
  visible,
}) => {
  const opacityAnimation = useRef(new Animated.Value(0)).current;
  const heightAnimation = useRef(new Animated.Value(0)).current;
  const shakeAnimation = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    playOpacityAnimation(opacityAnimation);
    playHeightAnimation(heightAnimation, height);
    playShakeAnimation(shakeAnimation);
  }, [opacityAnimation, heightAnimation, shakeAnimation, height]);

  if (!visible || winner === null) {
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
