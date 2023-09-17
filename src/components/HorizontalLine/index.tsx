import React, {useEffect, useRef} from 'react';
import {Animated} from 'react-native';
import {PlayerMark} from '@/common/types';
import {playOpacityAnimation} from '@/common/animations';
import {getLineStyle} from './utils';
import {playHeightAnimation, playShakeAnimation} from './animations';

interface HorizontalLineProps {
  height: number;
  positionY: number;
  winner: PlayerMark;
  visible: boolean;
}

const HorizontalLine: React.FC<HorizontalLineProps> = ({
  height,
  positionY,
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
      style={getLineStyle(
        winner,
        positionY,
        heightAnimation,
        opacityAnimation,
        shakeAnimation,
      )}
    />
  );
};

export default HorizontalLine;
