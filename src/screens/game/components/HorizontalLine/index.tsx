import React, {useEffect, useRef} from 'react';
import {Animated} from 'react-native';
import {
  playOpacityAnimation,
  playShakeAnimation,
  playSizeAnimation,
} from '@/common/animations';
import {getLineStyle} from './utils';
import {PlayerMark} from '@/screens/game/common/types';

interface HorizontalLineProps {
  height: number;
  positionY: number;
  winner: PlayerMark;
}

const HorizontalLine: React.FC<HorizontalLineProps> = ({
  height,
  positionY,
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
  }, [height, heightAnimation, opacityAnimation, shakeAnimation, winner]);

  if (winner === '') {
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
