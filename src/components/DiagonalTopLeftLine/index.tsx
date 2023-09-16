import React, {useEffect, useRef} from 'react';
import {Animated} from 'react-native';

interface DiagonalTopLeftLineProps {
  length: number;
  height: number;
  winner: 'X' | 'O' | null;
  visible: boolean;
}

const DiagonalTopLeftLine: React.FC<DiagonalTopLeftLineProps> = ({
  length,
  height,
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

  useEffect(() => {
    Animated.timing(opacity, {
      toValue: 0.8,
      duration: 90,
      useNativeDriver: false,
    }).start();

    // Play height animation from 0 to height
    Animated.timing(heightAnimation, {
      toValue: height,
      duration: 80,
      useNativeDriver: false,
    }).start();

    // Play shake animation
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
  }, [opacity, heightAnimation, animation, height]);

  return (
    <Animated.View
      style={{
        position: 'absolute',
        backgroundColor: lineColor,
        width: length,
        height: heightAnimation,
        transform: [
          {translateX: -length / 2},
          {translateY: -height / 2},
          {rotate: '45deg'},
          {translateX: length / 2},
          {translateY: height / 2},
          {
            translateY: animation.interpolate({
              inputRange: [0, 1],
              outputRange: [0, -5],
            }),
          },
        ],
        opacity,
      }}
    />
  );
};

export default DiagonalTopLeftLine;
