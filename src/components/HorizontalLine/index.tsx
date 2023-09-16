import React, {useCallback, useEffect, useRef} from 'react';
import {Animated} from 'react-native';

interface HorizontalLineProps {
  height: number;
  positionY: number;
  winner: 'X' | 'O' | null;
  visible: boolean;
}

const HorizontalLine: React.FC<HorizontalLineProps> = ({
  height,
  positionY,
  winner,
  visible,
}) => {
  if (!visible || winner === null) {
    return null;
  }

  const lineColor =
    winner === 'X' ? 'rgba(216, 14, 13, 0.8)' : 'rgba(0, 0, 0, 0.8)';
  const opacity = useRef(new Animated.Value(0)).current;
  const heightAnimation = useRef(new Animated.Value(0)).current;
  const animation = useRef(new Animated.Value(0)).current;

  const playShakeAnimation = useCallback(() => {
    Animated.sequence([
      Animated.timing(animation, {
        toValue: 1,
        duration: 200,
        useNativeDriver: false,
      }),
      Animated.timing(animation, {
        toValue: 0,
        duration: 200,
        useNativeDriver: false,
      }),
    ]).start();
  }, [animation]);

  useEffect(() => {
    // Play opacity animation
    Animated.timing(opacity, {
      toValue: 0.8,
      duration: 90,
      useNativeDriver: false,
    }).start();

    // Play height animation
    Animated.timing(heightAnimation, {
      toValue: height,
      duration: 80,
      useNativeDriver: false,
    }).start();

    // Play shake animation
    playShakeAnimation();
  }, [opacity, heightAnimation, playShakeAnimation, height]);

  return (
    <Animated.View
      style={{
        position: 'absolute',
        backgroundColor: lineColor,
        height: heightAnimation,
        width: '90%',
        top: positionY,
        opacity,
        borderRadius: 10,
        alignSelf: 'center',
        transform: [
          {
            translateX: animation.interpolate({
              inputRange: [0, 0.2, 0.4, 0.6, 0.8, 1],
              outputRange: [0, -5, 5, -5, 5, 0],
            }),
          },
        ],
      }}
    />
  );
};

export default HorizontalLine;
