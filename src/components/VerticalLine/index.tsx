import React, {useEffect, useRef} from 'react';
import {Animated} from 'react-native';
import {PlayerMark} from '../../common/types';
import {getLineStyle} from './utils';
import {playShakeAnimation, playWidthAnimation} from './animations';
import {playOpacityAnimation} from '../../common/animations';

interface VerticalLineProps {
  width: number;
  positionX: number;
  winner: PlayerMark;
  visible: boolean;
}

const VerticalLine: React.FC<VerticalLineProps> = ({
  width,
  positionX,
  winner,
  visible,
}) => {
  const opacityAnimation = useRef(new Animated.Value(0)).current;
  const widthAnimation = useRef(new Animated.Value(0)).current;
  const shakeAnimation = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    if (visible && winner) {
      playOpacityAnimation(opacityAnimation);
      playWidthAnimation(widthAnimation, width);
      playShakeAnimation(shakeAnimation);
    }
  }, [
    opacityAnimation,
    shakeAnimation,
    visible,
    width,
    widthAnimation,
    winner,
  ]);

  if (!visible || winner === null) {
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
